const _my = require("../../__antmove/api/index.js")(my);
// pages/kepuone/kepuone.js
const app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        text2: "病因复杂，不建议患者自行胡乱处置",
        text3: "建议暂时禁止饮水禁止摄入食物。",
        text4: "转移注意力，有利于缓解疼痛",
        text5:
            "明确患有慢性胃炎、胃溃疡、胃食管反流病的患者，可服用质子泵抑制剂等药物，若症状不缓解或加重，携带病历和目前服用药物，及时就医",
        text6: "拨打120急救电话，必要时进行心肺复苏",
        text7: "未知病因，继续吃东西、喝水",
        text8: "未知病因，使用止痛药",
        text12:
            "戒烟酒；控制血压、血脂、血糖；控制体重；定期体检；不要暴饮暴食，要饮食清淡，保持大便通畅",
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
