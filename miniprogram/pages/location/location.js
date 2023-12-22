const _my = require("../../__antmove/api/index.js")(my);
let plugin = requirePlugin("routePlan");
let key = "DLRBZ-GKNW6-BEHSQ-MOHAV-QQNJJ-BCB3K"; //使用在腾讯位置服务申请的key

let referer = "iYILIAO"; //调用插件的app的名称

let endPoint = JSON.stringify({
    //终点
    name: "北京西站",
    latitude: 39.894806,
    longitude: 116.321592
});
import {
    CDN_PATH,
    MOYUAN_KEY,
    BAIQIAN_KEY,
    YULU_KEY,
    DIFUNI_KEY,
    REFERER
} from "../../config/appConfig";
const app = getApp();
Page({
    data: {
        flagTrue: true,
        imgs: {
            rightArrow: `${CDN_PATH}/iconArrowRight@3x.png`
        },
        barInfo: app.globalData.barInfo,
        modes: [
            {
                text: "驾车",
                value: "driving"
            },
            {
                text: "公交",
                value: "transit"
            },
            {
                text: "步行",
                value: "walking"
            }
        ],
        modeIndex: 0,
        endPoint: {},
        isNavigate: false,
        themeColor: "#427CFF",
        showCustomActionsheet: false,
        showThemeColorActionsheet: false,
        customStyles: [
            {
                text: "墨渊",
                value: MOYUAN_KEY,
                icon: `${CDN_PATH}/iconMapMoyuan@3x.png`
            },
            {
                text: "白浅",
                value: BAIQIAN_KEY,
                icon: `${CDN_PATH}/iconMapBaiqian@3x.png`
            },
            {
                text: "玉露",
                value: YULU_KEY,
                icon: `${CDN_PATH}/iconMapYulu@3x.png`
            },
            {
                text: "自定义",
                value: DIFUNI_KEY
            }
        ],
        themeColors: [
            {
                text: "",
                value: "#427CFF"
            },
            {
                text: "",
                value: "#85d5c8"
            }
        ],
        keyIndex: 0,
        chooseType: "",
        //搜索的功能如下变量来控制
        toSearchData: ""
    },

    //为了搜索的函数
    searchData() {
        let that = this;

        let phone = _my.getStorageSync("phone");

        let time = new Date().getTime();

        const DB = _my.cloud.database();

        const _ = DB.command;
        DB.collection("qz")
            .orderBy("time", "desc")
            .where(
                _.or([
                    {
                        jinji1: phone,
                        name: that.data.toSearchData
                    },
                    {
                        jinji2: phone,
                        name: that.data.toSearchData
                    },
                    {
                        jinji3: phone,
                        name: that.data.toSearchData
                    },
                    {
                        jinji4: phone,
                        name: that.data.toSearchData
                    },
                    {
                        jinji5: phone,
                        name: that.data.toSearchData
                    }
                ])
            )
            .get()
            .then(res => {
                let ss = res.data.length;
                let ppp = res.data;

                for (var i in ppp) {
                    ppp[i].jb = {
                        name: "求救者位置",
                        latitude: ppp[i].lat,
                        longitude: ppp[i].lon
                    };
                }

                that.setData({
                    ppp: ppp
                });
            });
    },

    //得到输入的函数
    searchDataInput(e) {
        //console.log(e)
        this.setData({
            toSearchData: e.detail.value
        });

        if (e.detail.value.length == 0) {
            this.onLoad();
        }
    },

    geren(e) {
        let value = e.currentTarget.dataset.jb;

        _my.setStorageSync("jb", value);

        let that = this;

        _my.navigateTo({
            url: "../personality/personality?jb=" + value
        });
    },

    //确定后删除
    removeList(e) {
        let that = this;

        _my.showModal({
            content: "确定删除？",
            complete: res => {
                if (res.cancel) {
                    return;
                }

                if (res.confirm) {
                    let phone = _my.getStorageSync("phone");

                    let id = e.currentTarget.dataset["e"];

                    _my.cloud
                        .database()
                        .collection("qz")
                        .doc(id)
                        .remove()
                        .then(res => {
                            console.log("删除成功", res);

                            _my.showToast({
                                title: "删除成功"
                            });
                        })
                        .catch(res => {
                            console.error("删除失败", res);

                            _my.showToast({
                                title: "删除成功",
                                icon: "error"
                            });
                        });

                    const DB = _my.cloud.database();

                    const _ = DB.command;
                    DB.collection("qz")
                        .orderBy("time", "desc")
                        .where(
                            _.or([
                                {
                                    jinji1: phone
                                },
                                {
                                    jinji2: phone
                                },
                                {
                                    jinji3: phone
                                },
                                {
                                    jinji4: phone
                                },
                                {
                                    jinji5: phone
                                }
                            ])
                        )
                        .get()
                        .then(res => {
                            let ss = res.data.length;
                            let ppp = res.data;

                            for (var i in ppp) {
                                ppp[i].jb = {
                                    name: "求救者位置",
                                    latitude: ppp[i].lat,
                                    longitude: ppp[i].lon
                                };
                            }

                            that.setData({
                                ppp: ppp
                            });

                            if (ppp[0].jinji1 != 0) {
                                that.setData({
                                    flagTrue: false
                                });
                            }
                        });
                }
            }
        });
    },

    toNavigate() {
        _my.switchTab({
            url: "/pages/first/first"
        });
    },

    onShow() {
        let that = this;

        let phone = _my.getStorageSync("phone");

        let time = new Date().getTime();

        const DB = _my.cloud.database();

        const _ = DB.command;
        DB.collection("qz")
            .orderBy("time", "desc")
            .where(
                _.or([
                    {
                        jinji1: phone
                    },
                    {
                        jinji2: phone
                    },
                    {
                        jinji3: phone
                    },
                    {
                        jinji4: phone
                    },
                    {
                        jinji5: phone
                    }
                ])
            )
            .get()
            .then(res => {
                let ss = res.data.length;
                let ppp = res.data;

                for (var i in ppp) {
                    ppp[i].jb = {
                        name: "求救者位置",
                        latitude: ppp[i].lat,
                        longitude: ppp[i].lon
                    };
                }

                that.setData({
                    ppp: ppp
                });

                if (ppp[0].jinji1 != 0) {
                    that.setData({
                        flagTrue: false
                    });
                }
            });
    },

    onLoad(options) {
        let that = this;

        let phone = _my.getStorageSync("phone");

        let time = new Date().getTime();

        const DB = _my.cloud.database();

        const _ = DB.command;
        DB.collection("qz")
            .orderBy("time", "desc")
            .where(
                _.or([
                    {
                        jinji1: phone
                    },
                    {
                        jinji2: phone
                    },
                    {
                        jinji3: phone
                    },
                    {
                        jinji4: phone
                    },
                    {
                        jinji5: phone
                    }
                ])
            )
            .get()
            .then(res => {
                let ss = res.data.length;
                let ppp = res.data;

                for (var i in ppp) {
                    ppp[i].jb = {
                        name: "求救者位置",
                        latitude: ppp[i].lat,
                        longitude: ppp[i].lon
                    };
                }

                that.setData({
                    ppp: ppp
                }); //   let data = res.data[ss - 1]
                //   let time2 =data.time
                //   let lon=data.lon
                //   let lat=data.lat
                // let jb = {
                //     name: '求救者位置',
                //     latitude: lat,
                //     longitude: lon
                // }
                // that.setData({
                //     endPoint: jb
                // })
            });
    },

    onChooseStartPoint() {
        const key = this.data.customStyles[this.data.keyIndex].value;
        this.setData({
            chooseType: "start"
        });
        chooseLocation.setLocation(null);

        if (!key || !REFERER) {
            console.error("请输入有效的key和referer");
            return;
        }

        const url =
            "plugin://chooseLocation/index?key=" + key + "&referer=" + REFERER;

        _my.navigateTo({
            url
        });
    },

    onChooseEndPoint() {
        const key = this.data.customStyles[this.data.keyIndex].value;
        this.setData({
            chooseType: "end"
        });
        chooseLocation.setLocation(null);

        if (!key || !REFERER) {
            console.error("请输入有效的key和referer");
            return;
        }

        const url =
            "plugin://chooseLocation/index?key=" + key + "&referer=" + REFERER;

        _my.navigateTo({
            url
        });
    },

    onSelectMode(event) {
        const { index } = event.currentTarget.dataset;

        if (index === this.data.modeIndex) {
            return;
        }

        this.setData({
            modeIndex: index
        });
    },

    onTriggerActionsheet() {
        this.setData({
            showCustomActionsheet: true
        });
    },

    onSelectCustom(event) {
        const { index } = event.detail;
        this.setData({
            keyIndex: index,
            showCustomActionsheet: false
        });
    },

    onWatchDemo(e) {
        let value = e.currentTarget.dataset.jb;
        let that = this;
        const key = this.data.customStyles[this.data.keyIndex].value;
        const referer = REFERER;
        const endPoint = JSON.stringify(value);
        const startPoint = this.data.startPoint
            ? JSON.stringify(this.data.startPoint)
            : "";
        const mode = this.data.modes[this.data.modeIndex].value;
        const navigation = this.data.isNavigate ? 1 : 0;
        let url =
            "plugin://routePlan/index?key=" +
            "32VBZ-S53WJ-ZOTFK-X4U37-DMU7S-NPB4I" +
            "&referer=" +
            "iYILIAO" +
            "&endPoint=" +
            endPoint +
            "&mode=" +
            mode +
            "&navigation=" +
            navigation +
            "&themeColor=" +
            this.data.themeColor;

        _my.navigateTo({
            url
        });
    }
});
