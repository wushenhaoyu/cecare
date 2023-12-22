const _my = require("../../__antmove/api/index.js")(my);
// pages/friendslist/friendslist.js
const app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        create: 2,
        number1: "",
        number2: "",
        number3: "",
        openid: "",
        ss: "",
        conrectpeople: [],
        barInfo: app.globalData.barInfo,
        flagShow: true
    },

    toNavigate() {
        _my.navigateBack({
            url: "/pages/login/login"
        });
    },

    touch: function(event) {
        let gg = event.currentTarget.dataset.item;

        _my.redirectTo({
            url: "/pages/conversation/conversation?lian=" + gg.phone
        });
    },

    to() {
        let phone = _my.getStorageSync("phone");

        if (!phone) {
            _my.showToast({
                icon: "error",
                title: "请先登录"
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
            _my.redirectTo({
                // 路径传参
                url: "/pages/connect/connect"
            });
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        let that = this;

        let phone = _my.getStorageSync("phone");

        let phone1 = _my.getStorageSync("er");

        const DB = _my.cloud.database();

        if (phone1) {
            DB.collection("user")
                .where({
                    number: phone1
                })
                .get()
                .then(res => {
                    let data = res.data[0];
                    that.setData({
                        conrectpeople: data.lian,
                        flagShow: false
                    });
                });
        } else {
            DB.collection("user")
                .where({
                    number: phone
                })
                .get()
                .then(res => {
                    let data = res.data[0];
                    that.setData({
                        conrectpeople: data.lian
                    });
                });
        }
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {},

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
        let that = this;

        let phone = _my.getStorageSync("phone");

        let phone1 = _my.getStorageSync("er");

        const DB = _my.cloud.database();

        if (phone1) {
            DB.collection("user")
                .where({
                    number: phone1
                })
                .get()
                .then(res => {
                    let data = res.data[0];
                    that.setData({
                        conrectpeople: data.lian,
                        flagShow: false
                    });
                });
        } else {
            DB.collection("user")
                .where({
                    number: phone
                })
                .get()
                .then(res => {
                    let data = res.data[0];
                    that.setData({
                        conrectpeople: data.lian
                    });
                });
        }
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {
        _my.removeStorageSync("er");
    },
    onUnload: function() {
        _my.removeStorageSync("er");
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {},

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {},

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {}
});
