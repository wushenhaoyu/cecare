const utils = require('../../api/utils');
const { warnLife, fnAppClass, browserPath } = utils;
const createNode = require('./relation');
const processRelationHandle = require('./processRelation');
const Relations = require('../../api/relations');
const SelectComponent = require('./selectComponent');
const config = require('../../api/config.js');
const {createSelectorQuery} = require('../../api/my')
const {
    getUrl,
    updateData,
    processRelationPath,
    _relationNode,
    findRelationNode,
    compatibleLifetime,
    collectObserver,
    collectObservers,
    processTriggerEvent,
    observerHandle,
    handleProps,
    handleExternalClasses,
    handleAfterInit,
    mergeOptions,
    copy
} = require('../utils');
const { antmoveAction } = require('./utils');

function getInfo (key, obj) {
    let val = {};
    Object.keys(obj)
        .forEach(function (item) {
            if (key === item) {
                val = obj[item];
            } else if (key.indexOf(item) !== -1) {
                val = obj[item];
            }
        });
    return val;
}

function processRelations (ctx, relationInfo = {}) {
    let route = ctx.is;
    route = route.replace(/\/node_modules\/[a-z-]+\/[a-z-]+/, '');
    if (route[0] === '/') {
        route = route.substring(1);
    }
    let info = getInfo(route, relationInfo);
    if (info) {
        processRelationHandle(info, function (node) {
            if (node.$id === 'saveChildRef0') {
                ctx[node.$id] = function () {};
                node.$index = 0;
                node.$route = route;
                createNode.call(ctx, ctx, null, node);
                return false;
            }
            ctx[node.$id] = function (ref) {
                ctx.$antmove = ctx.$antmove || {};
                if (ctx.$antmove[node.$id] === undefined) {
                    ctx.$antmove[node.$id] = 0;
                } else {
                    ctx.$antmove[node.$id] += 1;
                }
                this.selectComponentApp.preProcesscomponents(ref);
                node.$index = ctx.$antmove[node.$id];
                node.$route = route;
                createNode.call(ctx, ref, null, node);

            };
        });
    } else {
        console.warn('Missing nodes relation of ', route);
    }
}

function handleRelations () {
    if (this.props.theRelations) {
        Object.keys(this.props.theRelations)
            .forEach((relation)=> {
                let _p = processRelationPath(this, relation);
                let relationInfo = this.props.theRelations[relation];
                let nodes = null;

                if (relationInfo.type === 'child' || relationInfo.type === 'descendant') {
                    return false;
                }
                nodes = findRelationNode(this.$node, _p, relationInfo.type, true);
                if (!nodes || nodes[0] === undefined) {
                    return false;
                }

                nodes.forEach((n) => {
                    if (!n) {
                        // console.error('wrong relation reference of ', relationInfo);
                        // console.error('from: ', this.$node.$self.is, 'to: ', _p);
                        return false;
                    }
                    _relationNode.call(this, n, {
                        relationInfo,
                        _p,
                        relation
                    });
                });


            });
    }
}



function behaviorsAssign (_opts, item, res) {
    let obj = {};
    if (_opts[res] ) {
        obj = Object.assign(_opts[res], ...item[res]);
    } else {
        obj = item[res];
    }
    return obj;
}


function processObservers (observersObj, options, param) {
    if (options.observers) {
        collectObservers.call(this, observersObj, options, param);
    }
}

function processInit () {
    getUrl();
}



function processIntersectionObserver (context) {
    context.createIntersectionObserver = function (...p) {
        return my.createIntersectionObserver(...p);
    };
}

function preProcesscomponents () {
    if (this.props.id) {
        this.$node.addComponentNodeId(this.props.id, this);
    }
    if (this.props.className) {
        this.$node.addComponentNode(this.props.className, this);
    }
}

/**
 *
 * @param {*} behavior
 * @param {*} _opts
 * @param {*} mixins
 */

module.exports = {
    processTransformationComponent (_opts, options) {
        let fnApp = fnAppClass();
        options.properties = options.properties || {};
        let behaviors = options.behaviors || [];
        let mixins = options.mixins || [];
        let _export = options.export || "";
        delete options.behaviors;
        delete options.mixins;
        let retMixins = {};

        _opts.observerObj = {};
        _opts.observersObj = {};
        _opts.behaviorsArr = [];

        processBehavior(retMixins, behaviors, _opts.behaviorsArr);
        processBehavior(retMixins, mixins, _opts.behaviorsArr);
        mergeOptions(retMixins, options);
        processBehaviorId(behaviors);
        processBehaviorId(mixins);

        Object.keys(options)
            .forEach(function (key) {
                _opts[key] = options[key];
            });

        handleProps(_opts);
        handleExternalClasses(_opts);


        let _life = compatibleLifetime(options);
        if (options.properties) {
            collectObserver(_opts.observerObj, options.properties, options);
        }

        if (!_opts.methods) {
            _opts.methods = {}
        }

        _opts.methods.antmoveAction = antmoveAction

        /**
         * 处理组件所在的页面尺寸变化时执行
         */
        if (_opts.pageLifetimes && _opts.pageLifetimes.resize) {
            _opts.methods.antmovePageLifetimes = function (e) {
                return _opts.pageLifetimes.resize(e)
            }
        }
        
        let didMount = function () {
            this.createIntersectionObserver = function(){
                return my.createIntersectionObserver()
            }
            _life.error && warnLife(`There is no error life cycle`, "error");
            _life.move && warnLife(`There is no moved life cycle`, "moved");
            _life.pageLifetimes && warnLife(`There is no page life cycle where the component resides,including(show,hide,resize)`, "pageLifetimes");
            this.props.genericSelectable && warnLife(`generic:selectable is Unsupported`, "generic");

            // process relations, get relation ast
            let relationAst = createNode.call(this, null, null, null, null, true).mountedHandles;
            relationAst.push(()=>{
                handleRelations.call(this);
            });
        };
        fnApp.add('onInit', function () {
            processIntersectionObserver(this);

            this.onPageReady = function (p) {
                _opts.onPageReady && _opts.onPageReady.call(this, p);
            };
            this.createSelectorQuery = function() {
                if (config.env !== "production"){
                    console.warn('支付宝createSelectorQuery不支持限定选择器的选择范围，如使用，请保证对应选择器使用的唯一性');
                }
                return createSelectorQuery.fn()
            }
        });

        fnApp.add('deriveDataFromProps', function () {
        });

        fnApp.add('didMount', didMount);
        if (_opts.lifetimes && _opts.lifetimes.created) {
            fnApp.add('onInit ', _opts.lifetimes.created);
        } else {
            fnApp.add('onInit', _opts.created);
        }
        fnApp.add('onInit', function () {
            processObservers.call(this, _opts.observersObj, options, this.$antmove._data);
        });
        fnApp.insert('onInit', function () {
            for (const method in this) {
                if (typeof this[method] === 'function') {
                    this[method] = this[method].bind(this);
                }
            };
            this.getRelationNodes = function () {
                return [];
            };
            processComponentExport (_export, behaviors, this);
            this.selectComponentApp = new SelectComponent(this);

            this.properties = {
                ..._opts.properties
            };
            processInit.call(this, _opts, options, _life, fnApp);
            testBehaviors(behaviors);
            updateData.call(this);
            processRelations(this, Relations);
            this.selectComponentApp.connect();
            this.selectOwnerComponent = processSelectOwnerComponent.bind(this);
            this.getPageId = processGetPageId.bind(this);
            addAntmoveData.call(this);
            if (typeof this.triggerEvent !== 'function') {
                processTriggerEvent.call(this);
            }
            observerHandle(_opts.observerObj, _opts, this, true);
        });
        fnApp.bind('onInit', _opts);
        if (_opts.lifetimes && _opts.lifetimes.attached) {
            fnApp.add('didMount', _opts.lifetimes.attached);
        } else {
            fnApp.add('didMount', _opts.attached);
        }
        if (_opts.pageLifetimes && _opts.pageLifetimes.show) {
            fnApp.add('didMount', _opts.pageLifetimes.show)
        }

        fnApp.add('didMount', _opts.ready);


        let didUpdate = function (...param) {
            updateData.call(this, param);
            processObservers.call(this, _opts.observersObj, options, this.$antmove._data);
            observerHandle(_opts.observerObj, this.$antmove._data, this);
            addAntmoveData.call(this);
        };
        fnApp.add('didUpdate', didUpdate);
        fnApp.add('didUpdate', function () {
            handleAfterInit.call(this);
        });

        fnApp.bind('deriveDataFromProps', _opts);
        fnApp.bind('didUpdate', _opts);
        fnApp.bind('didMount', _opts);
        if (_opts.lifetimes && _opts.lifetimes.detached) {
            fnApp.add('didUnmount', _opts.lifetimes.detached);
        } else {
            fnApp.add('didUnmount', options.detached);
        }
        fnApp.add('didUnmount', function () {
            // todo: 暂时这样处理使其不报错
            if (this.$node && this.$node.$parent) {
                this.$node.$parent.removeChild(this.$node);
                let refId = this.$node.$relationNode.$id;
                this.$antmove[refId]--;
            }
        });
        fnApp.bind("didUnmount", _opts);
    }
};



function handleData (otps = {}) {

}
function addAntmoveData () {
    let _data = [{}, {}], ctx = this, _props = {};
    for (var i in ctx.properties) {
        _props[i] = ctx.data[i];
    }
    _data[0] = copy(_props);
    _data[1] = copy(ctx.data) ;
    this.$antmove = this.$antmove || {};
    this.$antmove._data = _data;
}

/**
 * selectOwnerComponent
 */
function processSelectOwnerComponent () {
    const node = this.$node;
    if (node && node.$parent && node.$parent.$self) {
        return node.$parent.$self
    }
    return {}
}

/**
 * getPageId
 */

function processGetPageId () {
    if (this.$page) {
        return 'pageId:' + this.$page.$id
    }
    return "pageId: undefined"
}

/**
 * behavior
 */
function processBehavior (_opts = {}, opts, $behaviors) {
    let self = this;
    if (Array.isArray(opts)) {
        opts.forEach(function (item) {
            if (typeof item === 'object' && ($behaviors.indexOf(item.$id) === -1 || item.$id === undefined)) {
                $behaviors.push(item.$id);
                _process.call(self, _opts, item);
            }
        });
    } else {
        if (typeof opts === 'object'&& $behaviors.indexOf(item.$id) === -1) {
            $behaviors.push(item.$id);
            _process.call(self, _opts, opts);
        }
    }
    function _process (__opts = {}, opt = {}) {
        if (opt.behaviors) {
            processBehavior.call(self, __opts, opt.behaviors, $behaviors);
            delete opt.behaviors;
        }

        if (opt.mixins) {
            processBehavior(__opts, opt.mixins, $behaviors);
            delete opt.mixins;
        }
        mergeOptions(opt, __opts);
    }
}


function processBehaviorId (behavior) {
    if (Array.isArray(behavior)) {
        behavior.forEach(function (item) {
            if (typeof item === 'object' && item.$id) {
                delete item.$id;
            }
        });
    } else {
        if (typeof opts === 'object' && item.$id) {
            delete item.$id;
        }
    }
}

function processComponentExport (_export, behaviors, self) {
    if (typeof _export !== "function" ) return;
    if (Array.isArray(behaviors)) {
        behaviors.forEach(function (bhv) {
            if (bhv === "wx://component-export") {
                self._this = _export();
            }
        });
    } else {
        if (behaviors === "wx://component-export") {
            self._this = _export();
        }
    }

}

function testBehaviors (behaviors) {
    if (Array.isArray(behaviors)) {
        behaviors.forEach(function (bhv) {
            if (bhv === "wx://form-field") {
                warnLife("Wx://form-field in built-in behavior is not supported", "behavior/form-field");
            }
        });
    } else {
        if (behaviors === "wx://form-field") {
            warnLife("Wx://form-field in built-in behavior is not supported", "behavior/form-field");
        }
    }
}