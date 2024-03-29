const _my = require("../../__antmove/api/index.js")(my);
// pages/kepuone/kepuone.js
const app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        barInfo: app.globalData.barInfo,
        num: 0,
        scroll: 2
    },

    next() {
        _my.navigateTo({
            url: "/pages/haveBreath21/haveBreath21"
        });
    },

    toNavigate() {
        _my.navigateBack({
            url: "/pages/secondaidNavigate/secondaidNavigate"
        });
    },

    scrollSteps() {
        _my.navigateTo({
            url: "/pages/secondaidNavigate/secondaidNavigate"
        });
    },

    toNavigate1() {
        _my.navigateTo({
            url: "/pages/jijiuchuli3/jijiuchuli3"
        });
    },

    toNavigate2() {
        _my.navigateTo({
            url: "/pages/haveBreath11/haveBreath11"
        });
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {},

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {},

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {},

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {},

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {},

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
