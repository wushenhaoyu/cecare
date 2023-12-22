const _my = require("../../__antmove/api/index.js")(my);
// pages/kepuone/kepuone.js
const app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        text111: "1.严重出血",
        text112: "2.怀疑有内出血",
        text113: "3.胸部或胸腔受伤",
        text114: "4.伤口喷血",
        text115: "5.持续用力按压10分钟后不能止血",
        text2:
            "一般止血法：针对小的创口出血。需用生理盐水冲洗消毒患部，然后覆盖多层消毒纱布用绷带扎紧包扎。注意：如果患部有较多毛发，在处理时应剪、剃去毛发",
        text4:
            "指压止血法：此方法一般适用于较大动脉出血的情况，为止血短暂应急措施，出血后用拇指压住出血的血管上方（近心端），将动脉压迫到骨面上。使血管被压闭住，中断血液，只适用于头面颈部及四肢的动脉出血急救，注意压迫时间不能过长。",
        text5:
            "加压包扎止血法：适用于四肢、头顶、躯干等体表血管外伤时的出血处，当前臂或小腿出血时，可在肘窝、膝窝内放以纱布垫、棉花团或毛巾、衣服等物品，屈曲关节，用三角巾作8字型固定。但骨折或关节脱位者不能使用。建议野外活动以及家里药箱常备一次性止血带如（仁康舒止），防止发生意外后无有效止血工具的情况发生。",
        text6:
            "橡皮止血带止血：止血带法适用于四肢伤大出血，且其他的办法无法控制的情况。止血带的选择以充气止血带最好，常用的止血带是三尺左右长的橡皮管。在紧急情况下可用橡皮管、布条、绷带代替，但应在止血带下增加衬垫，千万不能用细的布条、绳索、电线等直接捆绑。",
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
