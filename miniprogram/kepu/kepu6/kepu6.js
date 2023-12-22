const _my = require("../../__antmove/api/index.js")(my);
// pages/kepuone/kepuone.js
const app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        text1:
            "哮喘发作可急可缓，大多数会表现出焦虑、压抑或恐慌的情绪，呼吸短促、咳嗽、喘息，脸色苍白且出汗，嘴唇、耳垂和手指头会因缺氧而发紫，更严重时，患者会不省人事。",
        text2: "确保患者处在安全、空气流通的地方；",
        text3: "轻轻向上抬起病人的下巴，这样会帮助病人张开呼吸道；",
        text4: "如果病人出现呼吸、心跳停止，立即进行心肺复苏；",
        text5: "静待救护车到达。",
        text6:
            "哮喘病人一般会随身携带哮喘喷雾，其外观呈「L」型，可帮助病人找到，并且递给他使用。",
        text7: "确保病人处在安全、空气流通的地方；",
        text8: "帮助病人保持舒适的姿势，比如坐着及前倾；",
        text9: "安慰病人，告诉他慢慢深呼吸；",
        text12:
            "注意：症状严重时，病人可能会不断吸入喷雾剂，但过量使用药物也可能危及生命，应当保持与 120 医生的电话联系，获得指导。",
        text13:
            "必须首先拨打120急救电话。等待救护车时，根据患者的情况，进行必要的急救措施。",
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
