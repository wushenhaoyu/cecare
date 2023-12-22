const _my = require("../../__antmove/api/index.js")(my);
// pages/volunteer/volunteer.js
const app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        id: "",
        jieshao: "",
        xingbie: "",
        phone: "",
        hangye: "",
        xingmin: "",
        nimade: true,
        dianhua: "",
        zhuzhi: "",
        shenfenz: "",
        geren: "",
        photo_src: "",
        barInfo: app.globalData.barInfo,
        jingli: "",
        //图片的list
        imgList: [],
        //个人列表的展示
        showNotice: false,
        //动画
        toggleDelay: false,
        animation: "",
        noneCarton: ""
    },

    //志愿者信息添加
    changeStats(e) {
        this.setData({
            animation: e.currentTarget.dataset.class,
            showNotice: true,
            noneCarton: ""
        });
        let that = this;
    },

    carton() {
        let that = this;
        that.setData({
            animation: "animation-reverse"
        });
        that.setData({
            noneCarton: "animation-reverse",
            animation: "slide-bottom",
            animation: "slide-bottom"
        });
        that.setData({
            noneCarton: "animation-reverse",
            showNotice: false
        });
    },

    toNavigate1: function() {
        _my.navigateBack({
            delta: 1
        });
    },
    remarkInputAction: function(options) {
        //获取输入框输入的内容
        this.setData({
            zhuzhi: options.detail.value
        });
    },
    keyInput1: function(e) {
        this.setData({
            xingmin: e.detail.value
        });
    },
    keyInput2: function(e) {
        this.setData({
            jieshao: e.detail.value
        });
    },
    keyInput3: function(e) {
        this.setData({
            xingbie: e.detail.value
        });
    },
    keyInput4: function(e) {
        this.setData({
            zhuzhi: e.detail.value
        });
    },
    keyInput5: function(e) {
        this.setData({
            phone: e.detail.value
        });
    },
    keyInput6: function(e) {
        this.setData({
            hangye: e.detail.value
        });
    },
    keyInput7: function(e) {
        this.setData({
            jingli: e.detail.value
        });
    },

    saveImage() {
        let _this = this;

        let that = this;
        let img = this.data.imgList;

        _my.chooseImage({
            count: 1,
            sizeType: ["original", "compressed"],
            sourceType: ["album", "camera"],

            success(res) {
                console.log(res.tempFilePaths[0]); //一个数组，每个元素都是“http://...”图片地址

                img.push(res.tempFilePaths[0]);

                _this.setData({
                    photo_src: res.tempFilePaths[0],
                    imgList: img
                });
            }
        });

        if (img.length == 3) {
            that.setData({
                nimade: false
            });
        }
    },

    shenchu(e) {
        let that = this;
        that.data.imgList.splice(e.currentTarget.dataset.index, 1);
        that.setData({
            imgList: that.data.imgList
        });
    },

    tijiao() {
        let that = this;

        _my.showModal({
            content: "确定上传信息？",
            complete: res => {
                if (res.cancel) {
                    return;
                }

                if (res.confirm) {
                  if(this.data.jieshao&&this.data.xingmin&&this.data.xingbie&&this.data.zhuzhi&&this.data.dianhua&&this.data.hangye)
                  {
                    my.setStorageSync("zhi", that.data.xingmin);
                    _my.showToast({
                      title: "上传成功请等待审核"
                  });
                  _my.navigateBack();
                }
                else{
                  _my.showToast({
                    title: "信息不全，请认真填写"
                });
                }
              
                    //const DB = _my.cloud.database();

                   /* if (!that.data.xingmin) {
                        DB.collection("zhiyuanz")
                            .add({
                                data: {
                                    jingli: that.data.jingli,
                                    xingmin: that.data.xingmin,
                                    phone: that.data.phone,
                                    address: that.data.zhuzhi,
                                    xingbie: that.data.xingbie,
                                    jieshao: that.data.jieshao,
                                    hangye: that.data.hangye,
                                    isc: that.data.photo_src
                                }
                            })
                            .then(res => {
                                console.log(res);
                            });

                        _my.cloud.uploadFile({
                            cloudPath:
                                "志愿者/1/" + that.data.xingmin + "-" + ".png",
                            filePath: that.data.photo_src,
                            // 成功回调
                            success: res => {
                                console.log("上传成功", res);

                                _my.showToast({
                                    title: "上传成功"
                                });

                                that.setData({
                                    soundUrl: res.fileID // time: util.formatTime1(new Date())
                                });
                            }
                        });
                    } else {
                        DB.collection("zhiyuanz")
                            .doc(this.data.id)
                            .update({
                                data: {
                                    jingli: that.data.jingli,
                                    xingmin: that.data.xingmin,
                                    phone: that.data.phone,
                                    address: that.data.zhuzhi,
                                    xingbie: that.data.xingbie,
                                    jieshao: that.data.jieshao,
                                    hangye: that.data.hangye,
                                    isc: that.data.photo_src
                                },
                                success: res => {
                                    console.log(res);

                                    _my.showToast({
                                        title: "上传成功"
                                    });
                                },
                                fail: err => {
                                    icon: "none",
                                        console.error(
                                            "[数据库] [更新记录] 失败：",
                                            err
                                        ),
                                        _my.showToast({
                                            title: "上传失败",
                                            icon: "error"
                                        });
                                }
                            });
                    }*/
                }
            }
        });
    },

    kk() {
        let that = this;

        /*const DB = _my.cloud.database();

        DB.collection("zhiyuanz")
            .add({
                data: {
                    xingmin: that.data.xingmin,
                    phone: that.data.dianhua,
                    geren: that.data.zhuzhi
                }
            })
            .then(res => {
                console.log(res);
            });*/

        _my.showModal({
            content: "上传成功"
        });
    },

    toNavigate() {
        _my.switchTab({
            url: "/pages/first/first"
        });
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        let that = this;

        let a = _my.getStorageSync("zhi");

        const DB = _my.cloud.database();

        DB.collection("zhiyuanz")
            .where({
                xingmin: a
            })
            .get()
            .then(res => {
                if (res.data.length != 0) {
                    that.setData({
                        id: res.data[0]._id,
                        jingli: res.data[0].jingli,
                        xingbie: res.data[0].xingbie,
                        jieshao: res.data[0].jieshao,
                        phone: res.data[0].phone,
                        zhuzhi: res.data[0].address,
                        hangye: res.data[0].hangye
                    });
                }
            });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {},

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
        let that = this;

        let a = _my.getStorageSync("Name");

        that.setData({
            xingmin: a
        });

        const DB = _my.cloud.database();

        DB.collection("zhiyuanz")
            .where({
                xingmin: a
            })
            .get()
            .then(res => {
                if (res.data.length != 0) {
                    that.setData({
                        id: res.data[0]._id,
                        jingli: res.data[0].jingli,
                        xingbie: res.data[0].xingbie,
                        jieshao: res.data[0].jieshao,
                        phone: res.data[0].phone,
                        zhuzhi: res.data[0].address,
                        hangye: res.data[0].hangye
                    });
                }
            });
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
