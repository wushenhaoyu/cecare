const _my = require("../../__antmove/api/index.js")(my);
// pages/kepuone/kepuone.js
const app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        text2:
            "背部着地，两腿弯曲，慢慢向有椅子或床的地方挪动，盖好毯子，保持体温。",
        text3: "休息好之后，翻过来趴在地上",
        text4: "两手支撑，弯曲膝盖，尽量跪立，扶着椅子或床尽量站起来",
        text5: "休息一会，打电话求助，告知自己摔倒了，方便以后进一步检查",
        text6: "老人意识不清、呼之不应，需要紧急打电话呼救。",
        text7:
            "如果有外伤、出血需要紧急止血包扎，对于有呕吐的患者，应将头偏向一侧并清理口腔和鼻腔的分泌物，以避免气道堵塞。如果有抽搐时，应将患者移体到平整的地面，避免身体从高处跌落而发生损伤和擦伤，必要时可以在牙齿之间垫较硬的物体，防止舌头咬伤。不要生硬的搬动或者抵抗抽搐的肢体，防止肌肉和骨骼的损伤。如果发生了呼吸和心跳停止、应立即进行胸按压，实施心肺复苏等治疗措施。",
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
