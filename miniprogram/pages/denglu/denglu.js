const _my = require("../../__antmove/api/index.js")(my);
// pages/denglu/denglu.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        ss: ""
    },
    keyInput2: function(e) {
        this.setData({
            ss: e.detail.value
        });
    },

    denglu() {
        let that = this;

        const DB = _my.cloud.database();

        DB.collection("user")
            .where({
                number: that.data.ss
            })
            .get()
            .then(res => {
                let flag = res.data.length;

                if (flag == 0) {
                    // 未注册
                    _my.showToast({
                        icon: "none",
                        title: "您还未注册"
                    });

                    return;
                } else {
                    //登录成功
                    _my.showToast({
                        icon: "none",
                        title: "登录成功"
                    });

                    _my.setStorageSync("phone", that.data.phone);

                    setTimeout(function() {
                        _my.switchTab({
                            url: "../login/login"
                        });
                    }, 3000);
                }
            });
    },

    jer() {
        _my.navigateTo({
            url: "../zhuche/zhuche"
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
