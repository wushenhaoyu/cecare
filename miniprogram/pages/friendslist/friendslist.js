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
        console.log(gg)

        _my.redirectTo({
            url: "/pages/conversation/conversation?lian=" + gg
        });
    },

    to() {
        let phone = my.getStorageSync("user");

        if (!phone) {
            _my.showToast({
                icon: "error",
                title: "请先登录"
            });

            
            setTimeout(function() {
                _my.navigateTo({
                    url: "/pages/login/login"
                });
            }, 1000); // setTimeout(function () {
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

        let data = my.getStorageSync({key:"jinji"});
        let jinji = data.data
        that.setData({
          conrectpeople:jinji
        })

   
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

        let data = my.getStorageSync({key:"jinji"});
        let jinji = data.data
        console.log(data);
        console.log(jinji);
        that.setData({
          conrectpeople:jinji
        })
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
