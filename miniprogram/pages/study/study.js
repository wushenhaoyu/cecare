const _my = require("../../__antmove/api/index.js")(my);
// pages/login/login.js
const app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        barInfo: app.globalData.barInfo,
        x: 400,
        guo: false,
        y: 250
    },

    onLoad() {
        _my.showTabBar({
            animation: false
        });

        console.log("nihao");
        let that = this;

        if (!that.data.guo) {
           /* DB.collection("hei")
                .where({
                    _id: "f6e08a646279374e01ffc4f74a571799"
                })
                .get()
                .then(res => {
                    let sd = res.data[0];
                    console.log(res);
                    that.setData({
                        guo: sd.dd
                    });
                });*/
        }
    },

    onShow() {
        let that = this;

      

        if (!that.data.guo) {
            /*DB.collection("hei")
                .where({
                    _id: "f6e08a646279374e01ffc4f74a571799"
                })
                .get()
                .then(res => {
                    let sd = res.data[0];
                    console.log(res);
                    that.setData({
                        guo: sd.dd
                    });
                });*/
        }
    },

    toNavigate1(e) {
        _my.navigateTo({
            url: "/kepu/kepu1/kepu1"
        });
    },

    toNavigate2(e) {
        _my.navigateTo({
            url: "/kepu/kepu2/kepu2"
        });
    },

    toNavigate3(e) {
        _my.navigateTo({
            url: "/kepu/kepu3/kepu3"
        });
    },

    aboutvolunte() {
        let phone = _my.getStorageSync("Name");

        if (!phone) {
            _my.showToast({
                icon: "error",
                title: "正在开发"
            });

            _my.getOpenUserInfo({
              success: (res) => {
                  let userInfo = JSON.parse(res.response).response
                  console.log(userInfo)
              },
              fail: (err) => {
                  console.log(err)
              }
          });
            /*setTimeout(function() {
                _my.navigateTo({
                    url: "/pages/zhuche/zhuche"
                });
            }, 1000);*/ // setTimeout(function () {
            //     that.jer()
            // }, 1000)

            return;
        } else {
            _my.navigateTo({
                url: "/pages/volunteer/volunteer"
            });
        }
    },

    aboutvolunte1() {
        _my.showModal({
            title: "联系我们",
            content: "如有想申请志愿者，请联系邮箱2597454007@qq.com"
        });
    },

    aboutvolunte3() {
        let phone = _my.getStorageSync("phone");

        if (!phone) {
            _my.showToast({
                icon: "error",
                title: "正在开发"
            });
            _my.getOpenUserInfo({
              success: (res) => {
                  let userInfo = JSON.parse(res.response).response
                  console.log(userInfo)
              },
              fail: (err) => {
                  console.log(err)
              }
          });/*
            setTimeout(function() {
                _my.navigateTo({
                    url: "/pages/zhuche/zhuche"
                });
            }, 1000); */// setTimeout(function () {
            //     that.jer()
            // }, 1000)

            return;
        } else {
            _my.setStorageSync("haoyou1", "12345678900");

            _my.navigateTo({
                url: "/pages/client/client"
            });
        }
    },

    toNavigate4(e) {
        _my.navigateTo({
            url: "/kepu/kepu8/kepu8"
        });
    },

    toNavigate5(e) {
        _my.navigateTo({
            url: "/kepu/kepu6/kepu6"
        });
    },

    toNavigate6(e) {
        _my.navigateTo({
            url: "/kepu/kepu4/kepu4"
        });
    },

    toNavigate7(e) {
        _my.navigateTo({
            url: "/kepu/kepu5/kepu5"
        });
    },

    toNavigate8(e) {
        _my.navigateTo({
            url: "/kepu/kepu7/kepu7"
        });
    },

    toNavigate9(e) {
        _my.navigateTo({
            url: "/kepu/kepu9/kepu9"
        });
    }
});
