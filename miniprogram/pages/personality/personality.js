const _my = require("../../__antmove/api/index.js")(my);
// pages/personality/personality.js
const app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        id: "",
        name: "姓名：",
        phonenumber: "",
        adress: "",
        bornth: "",
        xig: "",
        age: "",
        barInfo: app.globalData.barInfo,
        flag: false,
        count: 0,
        msg: "",
        flag1: false,
        count1: 0,
        msg1: "",
        flag2: false,
        count2: 0,
        msg2: "",
        flag3: false,
        count3: 0,
        msg3: "",
        height: 100,
        geren: {},
        dizhi: "",
        flagList: true
    },

    tofriendList() {
        let that = this;

        _my.setStorageSync("er", that.data.phonenumber);

        _my.navigateTo({
            url: "/pages/friendslist/friendslist"
        });
    },

    guowangBinghsi() {
        _my.showTabBar({
            animation: true
        });
    },

    keyInput1: function(res) {
        this.setData({
            age: res.detail.value
        });
    },
    keyInput2: function(res) {
        this.setData({
            xig: res.detail.value
        });
    },
    keyInput3: function(res) {
        this.setData({
            dizhi: res.detail.value
        });
    },
    remarkInputAction: function(options) {
        //获取输入框输入的内容
        this.setData({
            msg: options.detail.value
        });
    },

    theCartorn(e) {
        console.log(e._userTap);
        this.setData({
            count: this.data.count + 1
        });

        if (this.data.count % 2 == 0) {
            this.setData({
                flag: false
            });
            this.setData({
                height: this.data.height - 20
            });
        }

        if (
            this.data.count % 2 == 1 &&
            this.data.flag1 == 0 &&
            this.data.flag2 == 0 &&
            this.data.flag3 == 0
        ) {
            this.setData({
                flag: true
            });
            this.setData({
                height: this.data.height + 20
            });
        }
    },

    theCartorn11(e) {
        _my.showToast({
            title: "填写成功"
        });

        console.log(e._userTap);
        this.setData({
            count: this.data.count + 1
        });

        if (this.data.count % 2 == 0) {
            this.setData({
                flag: false
            });
            this.setData({
                height: this.data.height - 20
            });
        }

        if (
            this.data.count % 2 == 1 &&
            this.data.flag1 == 0 &&
            this.data.flag2 == 0 &&
            this.data.flag3 == 0
        ) {
            this.setData({
                flag: true
            });
            this.setData({
                height: this.data.height + 20
            });
        }
    },

    theCartorn1(e) {
        console.log(e._userTap);
        this.setData({
            count1: this.data.count1 + 1
        });

        if (this.data.count1 % 2 == 0) {
            this.setData({
                flag1: false
            });
            this.setData({
                height: this.data.height - 20
            });
        }

        if (
            this.data.count1 % 2 == 1 &&
            this.data.flag % 2 == 0 &&
            this.data.flag2 % 2 == 0 &&
            this.data.flag3 % 2 == 0
        ) {
            this.setData({
                flag1: true
            });
            this.setData({
                height: this.data.height + 20
            });
        }
    },

    remarkInputAction1: function(options) {
        //获取输入框输入的内容
        this.setData({
            msg1: options.detail.value
        });
    },

    theCartorn2() {
        this.setData({
            count2: this.data.count2 + 1
        });

        if (this.data.count2 % 2 == 0) {
            this.setData({
                flag2: false
            });
            this.setData({
                height: this.data.height - 20
            });
        }

        if (
            this.data.count2 % 2 == 1 &&
            this.data.flag1 == 0 &&
            this.data.flag == 0 &&
            this.data.flag3 == 0
        ) {
            this.setData({
                flag2: true
            });
            this.setData({
                height: this.data.height + 20
            });
        }
    },

    remarkInputAction2: function(options) {
        //获取输入框输入的内容
        this.setData({
            msg2: options.detail.value
        });
    },

    theCartorn3() {
        this.setData({
            count3: this.data.count3 + 1
        });

        if (this.data.count3 % 2 == 0) {
            this.setData({
                flag3: false
            });
            this.setData({
                height: this.data.height - 20
            });
        }

        if (
            this.data.count % 2 == 1 &&
            this.data.flag1 == 0 &&
            this.data.flag2 == 0 &&
            this.data.flag3 == 0
        ) {
            this.setData({
                flag: true
            });
            this.setData({
                height: this.data.height + 20
            });
        }
    },

    theCartorn11(e) {
        _my.showToast({
            title: "填写成功"
        });

        console.log(e._userTap);
        this.setData({
            count: this.data.count + 1
        });

        if (this.data.count % 2 == 0) {
            this.setData({
                flag: false
            });
            this.setData({
                height: this.data.height - 20
            });
        }

        if (
            this.data.count % 2 == 1 &&
            this.data.flag1 == 0 &&
            this.data.flag2 == 0 &&
            this.data.flag3 == 0
        ) {
            this.setData({
                flag: true
            });
            this.setData({
                height: this.data.height + 20
            });
        }
    },

    theCartorn1(e) {
        console.log(e._userTap);
        this.setData({
            count1: this.data.count1 + 1
        });

        if (this.data.count1 % 2 == 0) {
            this.setData({
                flag1: false
            });
            this.setData({
                height: this.data.height - 20
            });
        }

        if (
            this.data.count1 % 2 == 1 &&
            this.data.flag % 2 == 0 &&
            this.data.flag2 % 2 == 0 &&
            this.data.flag3 % 2 == 0
        ) {
            this.setData({
                flag1: true
            });
            this.setData({
                height: this.data.height + 20
            });
        }
    },

    remarkInputAction1: function(options) {
        //获取输入框输入的内容
        this.setData({
            msg1: options.detail.value
        });
    },

    theCartorn2() {
        this.setData({
            count2: this.data.count2 + 1
        });

        if (this.data.count2 % 2 == 0) {
            this.setData({
                flag2: false
            });
            this.setData({
                height: this.data.height - 20
            });
        }

        if (
            this.data.count2 % 2 == 1 &&
            this.data.flag1 == 0 &&
            this.data.flag == 0 &&
            this.data.flag3 == 0
        ) {
            this.setData({
                flag2: true
            });
            this.setData({
                height: this.data.height + 20
            });
        }
    },

    remarkInputAction2: function(options) {
        //获取输入框输入的内容
        this.setData({
            msg2: options.detail.value
        });
    },

    theCartorn3() {
        this.setData({
            count3: this.data.count3 + 1
        });

        if (this.data.count3 % 2 == 0) {
            this.setData({
                flag3: false
            });
            this.setData({
                height: this.data.height - 20
            });
        }

        if (
            this.data.count3 % 2 == 1 &&
            this.data.flag1 % 2 == 0 &&
            this.data.flag2 % 2 == 0 &&
            this.data.flag % 2 == 0
        ) {
            this.setData({
                flag3: true
            });
            this.setData({
                height: this.data.height + 20
            });
        }
    },

    theCartorn31() {
        _my.showToast({
            title: "填写成功"
        });

        this.setData({
            count3: this.data.count3 + 1
        });

        if (this.data.count3 % 2 == 0) {
            this.setData({
                flag3: false
            });
            this.setData({
                height: this.data.height - 20
            });
        }

        if (
            this.data.count3 % 2 == 1 &&
            this.data.flag1 % 2 == 0 &&
            this.data.flag2 % 2 == 0 &&
            this.data.flag % 2 == 0
        ) {
            this.setData({
                flag3: true
            });
            this.setData({
                height: this.data.height + 20
            });
        }
    },

    remarkInputAction3: function(options) {
        //获取输入框输入的内容
        this.setData({
            msg3: options.detail.value
        });
    },

    toNavigate() {
        _my.navigateBack({
            url: "/pages/index/index"
        });
    },

    saveImage() {},

    to() {
        _my.navigateTo({
            url: "/pages/illness/illness"
        });
    },

    //confirm确认传送数据
    confirmButton() {
        let that = this;

        _my.showModal({
            content: "确认上传信息",
            complete: res => {
                if (res.cancel) {
                    return;
                }

                if (res.confirm) {
                    that.shangc();
                }
            }
        });
    },

    shangc() {
        let that = this;


        let phone = my.getStorage({key:"user"});
        console.log(phone)

        if (!phone) {
            _my.showToast({
                icon: "error",
                title: "请先登录"
            });

            setTimeout(function() {
                _my.navigateTo({
                    url: "/pages/login/login"
                });
            }, 1000); // setTimeout(function () {
            //     that.jer()
            // }, 1000)

            return;
        } else {
            let geren = {
                age: that.data.age,
                dizhi: that.data.dizhi,
                bingshi: that.data.msg,
                xiguan: that.data.msg1,
                jianshu: that.data.msg3
            };
            console.log(that.data.msg.length);
            console.log(that.data.msg1.length);
            console.log(that.data.msg3.length);
            console.log(that.data.age.length);
            console.log(that.data.dizhi);

            if (
                that.data.msg.length != 0 &&
                that.data.msg1.length != 0 &&
                that.data.msg3.length != 0 &&
                that.data.age.length != 0 &&
                that.data.dizhi.length != 0
            ) {
                console.log("success");
                my.setStorageSync({data:geren,key:"geren"})
                

                _my.showToast({
                    title: "添加成功"
                }); 
            }
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {},

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
      var that =this
      let data = my.getStorageSync({ key: 'geren' });

      console.log(data)
      if(data)
      {
        data = data.data
      }
      console.log(data)
     
     /* let jb = my.getStorage({key:"user"});
      console.log(jb)
      if(jb)
      {
        jb = jb.data
        that.setData({
          phonenumber: jb.Name
      });
      }
*/

    

          that.setData({
            geren:data,
            flagList: false,
            age: data.age,
            dizhi: data.dizhi,
            msg: data.bingshi,
            msg1: data.xiguan,
            msg3: data.jianshu
        });
        console.log(data.bingshi);
     
      

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {
        my.removeStorageSync("jb");
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {
        my.removeStorageSync("jb");
    },

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
