const _my = require("../../__antmove/api/index.js")(my);
// pages/kepuone/kepuone.js
const app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        text1:
            "蛇咬伤后会造成咬伤处迅速肿胀、发硬、流血不止，剧痛，皮肤呈紫黑色，发生皮肤坏死，淋巴结肿大。经6-8小时可扩散到头部、颈部、四肢和腰背部。伤者战栗，体温升高，心动加快，呼吸困难，不能站立。鼻出血，尿血，抽搐。如果咬伤后4小时内未得到有效治疗则最后因心力衰竭或休克而死亡。",
        text2: "保持受伤部位静止下垂、保持静止不动、减缓毒液在体内的流动。",
        text3: "取下手表、戒指等束缚,用大量的水冲洗伤口。",
        text4: "使用急救按钮，拨打120，立即送医院救治",
        text5: "奔跑",
        text6: "长时间勒紧伤口",
        text7: "火烧灭毒",
        text8: "切开放血排毒",
        text9: "用嘴吸毒液",
        text10: "乱用草药",
        text11: "因为不痛、不痒、不肿而不去医院做任何治疗",
        text12:
            "研究显示,金环蛇、银环蛇等毒蛇咬伤后,伤口往往不红、不肿、不痛,无出血,或仅有轻微麻痒的感觉。在咬伤后3天左右才出现全身中毒症状,可以致命。所以,蛇咬伤后,一定要去医院接受正规治疗",
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
