const _my = require("../../__antmove/api/index.js")(my);
// pages/kepuone/kepuone.js
const app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        text1:
            "注意事项:烫伤后要进行科学救治，不要迷信一些治疗烫伤的土方、偏方。不要抹牙膏，不要抹酱油香油。",
        text2:
            "立即对受伤部位进行冷却降温处理，用干净的冷水冲洗烫伤部位或泡在冷水中10~30分钟",
        text3:
            "保持烫伤部位的清洁卫生，不能随意用药品涂抹伤处，以免加重伤口感染情况，影响后续进一步的治疗。",
        text4:
            "烫伤部位出现水泡时，不要挑破水泡，可以用酒精清洗水泡周围的皮肤，然后用洁净纱布包扎处理。",
        text5:
            "如果烫伤的面积较大，需要立即用剪开烫伤部位的衣物，不要强行脱下衣服或者撕开衣服，以免让烫伤部位的皮肤出现破损，引发感染。",
        text6:
            "烫伤情况严重或烫伤身体关键部位，例如眼睛或脸时，要立即送往医院进行紧急救治。",
        text7:
            "烫伤处要注意保持干燥洁净，不要接触水，也不要用手触摸伤口，以免引发感染或影响伤口的恢复。",
        barInfo: app.globalData.barInfo
    },

    toNavigate() {
        _my.navigateBack({
            delta: 0
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
