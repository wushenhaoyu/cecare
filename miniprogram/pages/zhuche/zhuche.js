const _my = require("../../__antmove/api/index.js")(my);
// pages/zhuche/zhuche.js
const app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        barInfo: app.globalData.barInfo,
        uiop: "",
        ium: "",
        mingz: "",
        mima: "",
        yanzs: "",
        phone: "",
        gois: 23,
        second: 60,
        colorFor: 4,
        colorFor1: 4,
        flag: true,
        borderH: 4,
        nimama: 2,
        flagTrue: true,
        //登录消失
        logoIn: true,
        logoIntoGet: true,
        animationData: {},
        //验证码的时间问题
        whetherSendMsg: false,
        canIUseAuthButton: my.canIUse('button.open-type.getAuthorize')
    },

    //隐私协议
    toNavigateto() {
        _my.navigateTo({
            url: "/pages/article/article"
        });
    },

    toNext() {
        // 创建一个动画实例
        var animation = _my.createAnimation({
            duration: 1000,
            // 动画持续时间
            timingFunction: "ease" // 动画效果
        }); // 设置 opacity 属性为 0

        animation.opacity(0).step(); // 导出动画数据

        this.setData({
            animationData: animation.export()
        });
        let that = this;
        setTimeout(function() {
            animation.opacity(10).step(); // 导出动画数据

            that.setData({
                animationData: animation.export(),
                logoIntoGet: false
            });
        }, 500);
    },

    toBack2() {
        // 创建一个动画实例
        var animation = _my.createAnimation({
            duration: 1000,
            // 动画持续时间
            timingFunction: "ease" // 动画效果
        }); // 设置 opacity 属性为 0

        animation.opacity(0).step(); // 导出动画数据

        this.setData({
            animationData: animation.export()
        });
        let that = this;
        setTimeout(function() {
            animation.opacity(10).step(); // 导出动画数据

            that.setData({
                animationData: animation.export(),
                logoIn: false,
                logoIntoGet: true
            });
        }, 500);
    },

    toBack() {
        // 创建一个动画实例
        var animation = _my.createAnimation({
            duration: 1000,
            // 动画持续时间
            timingFunction: "ease" // 动画效果
        }); // 设置 opacity 属性为 0

        animation.opacity(0).step(); // 导出动画数据

        this.setData({
            animationData: animation.export()
        });
        let that = this;
        setTimeout(function() {
            animation.opacity(10).step(); // 导出动画数据

            that.setData({
                animationData: animation.export(),
                logoIn: true
            });
        }, 500);
    },

    toggle() {
        // 创建一个动画实例
        var animation = _my.createAnimation({
            duration: 1000,
            // 动画持续时间
            timingFunction: "ease" // 动画效果
        }); // 设置 opacity 属性为 0

        animation.opacity(0).step(); // 导出动画数据

        this.setData({
            animationData: animation.export()
        });
        let that = this;
        setTimeout(function() {
            animation.opacity(10).step(); // 导出动画数据

            that.setData({
                animationData: animation.export(),
                logoIn: false
            });
        }, 500);
    },

    selectedColor() {
        this.setData({
            borderH: 4,
            flag: true
        });
        this.setData({
            borderH1: 0
        });
    },

    selectedColor1() {
        this.setData({
            borderH1: 4,
            flag: false
        });
        this.setData({
            borderH: 0
        });
    },

    toNavigate() {
        _my.switchTab({
            url: "../login/login"
        });
    },

    keyInput1: function(e) {
        this.setData({
            mingz: e.detail.value
        });
    },
    keyInput2: function(e) {
        this.setData({
            mima: e.detail.value
        });
    },
    keyInput3: function(e) {
        this.setData({
            phone: e.detail.value
        });
    },
    keyInput4: function(e) {
        this.setData({
            yanzs: e.detail.value
        });
    },
    keyInput6: function(e) {
        this.setData({
            uiop: e.detail.value
        });
    },
    keyInput7: function(e) {
        this.setData({
            ium: e.detail.value
        });
    },

    generateMixed(n) {
        let chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        let res = "";

        for (var i = 0; i < n; i++) {
            var id = Math.ceil(Math.random() * 9);
            res += chars[id];
        }

        return res;
    },

    yanzhengma1() {
        let that = this;
        let sa = that.generateMixed(6);
        that.setData({
            gois: sa
        });

        _my.cloud.callFunction({
            name: "sdengsms",
            data: {
                mobile: that.data.phone,
                nationcode: "86",
                params: [that.data.gois]
            },
            success: res => {
                console.log("[云函数] [sendsms] 调用成功");
                console.log(res);
                that.setData({
                    whetherSendMsg: true
                });
            },
            fail: err => {
                console.error("[云函数] [sendsms] 调用失败", err);
            }
        });

        this.timer();
    },

    zhuche() {
      _my.getOpenUserInfo({
        success: (res) => {
            let userInfo = JSON.parse(res.response).response
            console.log(userInfo)
        },
        fail: (err) => {
            console.log(err)
        }
    });
      
        let that = this;
        if (this.data.logoIn) {
          console.log("登陆")
          my.yunkaifa.callFunction({
            name:"reg",
            user_name:that.data.mingz,
            password:that.data.mima,
            success:function(res)
            {
              console.log(res)
            },
            fail:function(res){

            }
          })
 
        }

        if (!this.data.logoIn) {
            let s = that.data.phone.substr(0, 1);

            if (that.data.phone.length != 11) {
                _my.showToast({
                    icon: "none",
                    title: "请输入正确的手机号"
                });

                return;
            }

            if (s != 1) {
                _my.showToast({
                    icon: "none",
                    title: "请输入正确的手机号"
                });

                return;
            } //注册后上传至数据库中

            const DB = _my.cloud.database();

            DB.collection("user")
                .where({
                    number: that.data.phone
                })
                .get()
                .then(res => {
                    let flag = res.data.length;

                    if (that.data.yanzs != that.data.gois) {
                        _my.showToast({
                            title: "验证码不正确"
                        });

                        return 0;
                    }

                    if (flag == 0) {
                        // 未注册
                        DB.collection("user").add({
                            data: {
                                name: that.data.mingz,
                                mima: that.data.mima,
                                number: that.data.phone,
                                lian: [
                                    {
                                        mingz: "志愿者",
                                        phone: "13881789957",
                                        qin: "志愿者"
                                    }
                                ],
                                geren: {},
                                yanz: []
                            },

                            success(res) {
                                console.log("注册成功", res);

                                _my.showToast({
                                    title: "注册成功"
                                });

                                that.setData({
                                    logoIn: true,
                                    logoIntoGet: true
                                });
                            }
                        });
                    } else {
                        _my.showToast({
                            icon: "none",
                            title: "请勿重复注册"
                        });
                    }
                });
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {


    },
    timer: function() {
        let promise = new Promise((resolve, reject) => {
            let setTimer = setInterval(() => {
                this.setData({
                    second: this.data.second - 1
                });

                if (this.data.second <= 0) {
                    this.setData({
                        second: 60,
                        alreadySend: false,
                        send: true
                    });
                    resolve(setTimer);
                }
            }, 1000);
        });
        promise.then(setTimer => {
            clearInterval(setTimer);
            this.setData({
                whetherSendMsg: false
            });
        });
    },
    onShow:function(options){
    
  
         _my.getAuthCode({
            scopes: 'auth_user',
            success: res => {
              const authCode = res.authCode;
              console.log(res)
              // 在服务端获取用户信息
            },
            fail: err => {
              console.log('my.getAuthCode 调用失败', err)
            }
          });
        
      
      
    
  }
});
