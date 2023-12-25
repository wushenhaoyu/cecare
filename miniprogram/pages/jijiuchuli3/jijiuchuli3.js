const _my = require("../../__antmove/api/index.js")(my);
// pages/jijiuchuli3/jijiuchuli3.js
const app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        barInfo: app.globalData.barInfo,
        num: 0,
        scroll: 2,
        img1:"",
        img2:""
    },

    toNavigate1() {
        _my.navigateTo({
            url: "/pages/jijiuchuli4/jijiuchuli4"
        });
    },

    toNavigateback() {
        _my.navigateBack({
            url: "/pages/secondaidNavigate/secondaidNavigate"
        });
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
     
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
      var that = this
      my.yunkaifa.getTempFileURL({
        fileList: [
          {  fileID: 'cloud://env-00jx4xbq2toc/E7A1D08B88B3AB290ABE0190D82F6558.gif', maxAge: 3600 },
          {  fileID: 'cloud://env-00jx4xbq2toc/0386B56A9C8945DFFF96F29D3CF37D18.gif', maxAge: 3600 }
        ],
        success: (res) => {
          let data = res.fileList
          console.log(data)
         this.setData({
          img1:data[0].tempFileURL,
          img2:data[1].tempFileURL
         })
        }
      })
    },

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
