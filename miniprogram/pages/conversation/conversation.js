const _my = require("../../__antmove/api/index.js")(my);
// pages/conversation/conversation.js
const app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        array: ["亲属", "邻居", "朋友", "其它"],
        selector: "",
        jinji1: "",
        jinji2: "",
        jinji3: "",
        lian: "",
        jinji: [],
        shuz: 1,
        id: "",
        lians: [1],
        barInfo: app.globalData.barInfo
    },

    toNavigate() {
        _my.navigateTo({
            url: "/pages/friendslist/friendslist"
        });
    },

    bindPickerChange: function(e) {
        this.setData({
            selector: this.data.array[e.detail.value]
        });
    },
    keyInput1: function(res) {
        this.setData({
            jinji1: res.detail.value
        });
    },
    keyInput2: function(res) {
        this.setData({
            jinji2: res.detail.value
        });
    },
    keyInput3: function(res) {
        this.setData({
            jinji3: res.detail.value
        });
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        let i = 0;
        let that = this;

        let phone = _my.getStorageSync("phone");

        this.setData({
            lian: options.lian //articleID问pageB页面变量
        });

        const DB = _my.cloud.database();

        DB.collection("user")
            .where({
                number: phone
            })
            .get()
            .then(res => {
                let data = res.data[0];
                that.setData({
                    jinji: data.lian,
                    id: data._id
                });

                for (i = 1; i <= that.data.jinji.length; i++) {
                    if (that.data.lian == that.data.jinji[i - 1].phone) {
                        this.setData({
                            shuz: i,
                            jinji1: that.data.jinji[i - 1].mingz,
                            jinji2: that.data.jinji[i - 1].phone,
                            selector: that.data.jinji[i - 1].qin
                        });
                        return;
                    }
                }
            });
    },

    kk1() {
        let that = this;
        that.data.jinji.splice(that.data.shuz - 1, 1);

        const DB = _my.cloud.database();

        DB.collection("user")
            .doc(that.data.id)
            .update({
                data: {
                    lian: that.data.jinji
                }
            })
            .then(res => {
                _my.showToast({
                    title: "删除成功"
                });

                setTimeout(function() {
                    _my.redirectTo({
                        url: "/pages/friendslist/friendslist"
                    });
                }, 3000);
            });
    },

    kk2() {
        let that = this;
        that.data.jinji[that.data.shuz - 1].mingz = that.data.jinji1;
        that.data.jinji[that.data.shuz - 1].phone = that.data.jinji2;
        that.data.jinji[that.data.shuz - 1].qin = that.data.selector;

        const DB = _my.cloud.database();

        DB.collection("user")
            .doc(that.data.id)
            .update({
                data: {
                    lian: that.data.jinji
                }
            })
            .then(res => {
                _my.showToast({
                    title: "修改成功"
                });

                setTimeout(function() {
                    _my.redirectTo({
                        url: "/pages/friendslist/friendslist"
                    });
                }, 3000);
            });
    },

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
