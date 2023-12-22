const _my = require("../../__antmove/api/index.js")(my);
// pages/connect/connect.js
const app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        jinji1: "",
        jinji2: "",
        jinji3: "",
        id: "",
        lian: [],
        array: ["亲属", "邻居", "朋友", "其它"],
        // 用户选择的关系
        selcected: "请选择",
        barInfo: app.globalData.barInfo
    },

    toNavigate() {
        _my.navigateTo({
            url: "/pages/friendslist/friendslist"
        });
    },

    bindPickerChange: function(e) {
        this.setData({
            selcected: this.data.array[e.detail.value]
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

    kk() {
        let that = this;

        let phone = _my.getStorageSync("phone");

        const DB = _my.cloud.database();

        if (that.data.jinji2.length != 11) {
            _my.showToast({
                icon: "none",
                title: "请输入正确的手机号"
            });

            return;
        }

        DB.collection("user")
            .where({
                number: phone
            })
            .get()
            .then(res => {
                let data = res.data[0];
                that.setData({
                    id: data._id,
                    lian: data.lian
                });
            });
        let lian = that.data.lian;

        if (lian.length == 0) {
            lian = [
                {
                    mingz: that.data.jinji1,
                    phone: that.data.jinji2,
                    qin: that.data.jinji3
                }
            ];
        } else {
            lian.push({
                mingz: that.data.jinji1,
                phone: that.data.jinji2,
                qin: that.data.jinji3
            });
        }

        DB.collection("user")
            .doc(that.data.id)
            .update({
                data: {
                    lian: lian
                }
            })
            .then(res => {
                _my.showToast({
                    title: "添加成功"
                });

                setTimeout(function() {
                    _my.redirectTo({
                        url: "/pages/friendslist/friendslist"
                    });
                }, 2000);
                console.log(res);
            });
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        let that = this;

        let phone = _my.getStorageSync("phone");

        const DB = _my.cloud.database();

        DB.collection("user")
            .where({
                number: phone
            })
            .get()
            .then(res => {
                let data = res.data[0];
                that.setData({
                    id: data._id,
                    lian: data.lian
                });
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
