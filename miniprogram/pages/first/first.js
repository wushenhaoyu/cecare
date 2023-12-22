const _my = require("../../__antmove/api/index.js")(my);
const app = getApp();
const util = require("/utils/util");
app.getTopBarInfo();

/*const DB = _my.cloud.database();*/

/*var QQMapWX = require("../../js/qqmap-wx-jssdk.js");*/

/*var util = require("../../utils/util.js");*/

/*var qqmapsdk = new QQMapWX({
    key: "DLRBZ-GKNW6-BEHSQ-MOHAV-QQNJJ-BCB3K" // 必填
});*/
Page({
    /**
     * 页面的初始数据
     */
    data: {
        minz: "",
        ab: "/image/1.png",
        s: "3",
        //存储计时器
        name: "",
        setInter: "",
        num: 1,
        barInfo: app.globalData.barInfo,
        lian: [],
        lians: [],
        dizhi: "",
        jinji: [],
        bing: "",
        guo: false,
        shifou: true,
        xianc: "无法获取地址",
        shij: "",
        duanxin: false,
        flagFalse: false,
        flagTrue: false,
        //初始化我们的指导的数据
        toShowStruct:[{name:'急救指导',address:'../../image/firstaid.png',secondName:'first aid',url:'/pages/firstaidNavigate/firstaidNavigate',},
        {name:'求救人导航',address:'../../image/firstLocation.png',secondName:'location',url:'/pages/location/location',},
        {name:'求救人信息',address:'../../image/massage.png',secondName:'message',url:'/pages/location/location',}],
    },

    toNavigate1() {
      my.showModal({
        'title':'提示',
        content:"正在开发中"
      })
      return
        _my.navigateTo({
            url: "/pages/location1/location1"
        });
    },
   
    

    navigatetoZhucei() {
     _my.getOpenUserInfo({
              success: (res) => {
                  let userInfo = JSON.parse(res.response).response
                  console.log(userInfo)
              },
              fail: (err) => {
                  console.log(err)
              }
          });
     
        /*_my.showTabBar({
            animation: true
        }),
            this.setData({
                flagFalse: true
            }),
            _my.navigateTo({
                url: "/pages/zhuche/zhuche"
            });*/
    },

    toVisitHomepage() {
      console.log('zhuce')
        _my.showTabBar({
            animation: true
        }),
            this.setData({
                flagFalse: true
            });
    },

    toNavigateto() {
        _my.navigateTo({
            url: "/pages/article/article"
        });
    },

    toNavigate() {
      my.showModal({
        'title':'提示',
        content:"正在开发中"
      })
      return
        _my.navigateTo({
            url: "/pages/location/location"
        });
    },

    toclient() {
        _my.navigateTo({
            url: "/pages/client/client"
        });
    },

    getLocation: function() {
        var that = this;
        my.getLocation({
          type: 2, // 获取经纬度和省市区县数据
          success: (res) => {
            console.log(res)
            var lo = res.province + res.city + res.district + res.streetNumber.street + res.streetNumber.number
            that.setData({
              lat: res.latitude,
              lon: res.longitude,
              speed: res.speed,
              accuracy: res.accuracy,
              xianc: lo
          });
          },
          fail: (res) => {
            _my.showModal({
              title: "授权提示",
              content:
                  "小程序需要您的微信授权才能使用哦~ 错过授权页面的处理方法：删除小程序->重新搜索进入->点击授权按钮"
          });
          },
          complete: () => {},
        });

    },

    ceshi() {
        let phone = _my.getStorageSync("phone");

        let i = 0;
        let that = this;
        that.setData({
            shifou: true
        });

        _my.showModal({
            title: "提示",
            content:
                "我们正在为您联系周边志愿者\n正在向您的紧急联系人发送求救\n我们即将跳转120界面\n请及时拨打120",
            success: function(res) {
                if (res.confirm) {
                    //这里是点击了确定以后
                    console.log("用户点击确定");
                    let time = new Date().getTime();
                    let myTime = util.formatTime(new Date(time));

                    if (that.data.guo) {
                        for (i = 1; i <= that.data.lian.length; i++) {
                            _my.cloud.callFunction({
                                name: "sendsms",
                                data: {
                                    mobile: that.data.lian[i - 1].phone,
                                    nationcode: "86"
                                },
                                success: res => {
                                    console.log("[云函数] [sendsms] 调用成功");
                                    console.log(res);
                                },
                                fail: err => {
                                    console.error(
                                        "[云函数] [sendsms] 调用失败",
                                        err
                                    );
                                }
                            });
                        }
                    }

                    _my.getLocation({
                        success: function(res) {
                          var lo =res.province+ res.city + res.district
                          console.log(lo)
                            that.setData({
                                lat: res.latitude,
                                lon: res.longitude,
                                speed: res.speed,
                                accuracy: res.accuracy,
                                xianc: lo
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
                                        name: data.name,
                                        dizhi: data.geren.dizhi,
                                        jinji: data.lian,
                                        bing: data.geren.msg
                                    });
                                    let jj = [];

                                    for (
                                        i = 1;
                                        i <= that.data.jinji.length;
                                        i++
                                    ) {
                                        jj[i - 1] =
                                            that.data.jinji[i - 1].phone;
                                    }

                                    DB.collection("qz").add({
                                        data: {
                                            time: time,
                                            mytime: myTime,
                                            lat: that.data.lat,
                                            lon: that.data.lon,
                                            dizhi: that.data.dizhi,
                                            name: that.data.name,
                                            phone: phone,
                                            bing: that.data.bing,
                                            jinji1: jj[0],
                                            jinji2: jj[1],
                                            jinji3: jj[2],
                                            jinji4: jj[3],
                                            jinji5: jj[4]
                                        },

                                        success(res) {
                                            console.log(res);

                                            _my.makePhoneCall({
                                                phoneNumber: "120",
                                                success: function() {
                                                    console.log(
                                                        "拨打电话成功！"
                                                    );
                                                },
                                                fail: function() {
                                                    console.log(
                                                        "拨打电话失败！"
                                                    );
                                                }
                                            });
                                        }
                                    });
                                    that.setData({
                                        duanxin: true
                                    });
                                });
                        },
                        fail: function(res) {
                            const DB = _my.cloud.database();

                            DB.collection("user")
                                .where({
                                    number: phone
                                })
                                .get()
                                .then(res => {
                                    let data = res.data[0];
                                    that.setData({
                                        name: data.name,
                                        dizhi: data.geren.dizhi,
                                        jinji: data.lian,
                                        bing: data.geren.msg
                                    });
                                    let jj = [];

                                    for (
                                        i = 1;
                                        i <= that.data.jinji.length;
                                        i++
                                    ) {
                                        jj[i - 1] =
                                            that.data.jinji[i - 1].phone;
                                    }

                                    DB.collection("qz").add({
                                        data: {
                                            time: time,
                                            mytime: myTime,
                                            lat: that.data.lat,
                                            lon: that.data.lon,
                                            dizhi: that.data.dizhi,
                                            name: that.data.name,
                                            phone: phone,
                                            bing: that.data.bing,
                                            jinji1: jj[0],
                                            jinji2: jj[1],
                                            jinji3: jj[2],
                                            jinji4: jj[3],
                                            jinji5: jj[4]
                                        },

                                        success(res) {
                                            console.log(res);

                                            _my.makePhoneCall({
                                                phoneNumber: "120",
                                                success: function() {
                                                    console.log(
                                                        "拨打电话成功！"
                                                    );
                                                },
                                                fail: function() {
                                                    console.log(
                                                        "拨打电话失败！"
                                                    );
                                                }
                                            });
                                        }
                                    });
                                });
                        }
                    }); //fdfsf

                    that.setData({
                        shifou: false
                    });
                } else {
                    //这里是点击了取消以后
                    that.setData({
                        shifou: false
                    });
                }
            }
        });
    },


    ti1() {
        _my.navigateTo({
            url: "/pages/firstaidNavigate/firstaidNavigate"
        });
    },

    calling: function() {
        let that = this;
        that.setData({
            shifou: true
        });

        _my.showModal({
            title: "提示",
            content:
                "我们正在为您联系周边志愿者\n正在向您的紧急联系人发送求救\n我们即将跳转120界面\n请及时拨打120",
            success: function(res) {
                if (res.confirm) {
                    //这里是点击了确定以后
                    console.log("用户点击确定");

                    _my.makePhoneCall({
                        phoneNumber: "120",
                        success: function() {
                            console.log("拨打电话成功！");
                        },
                        fail: function() {
                            console.log("拨打电话失败！");
                        }
                    });

                    that.setData({
                        shifou: false
                    });
                } else {
                    //这里是点击了取消以后
                    that.setData({
                        shifou: false
                    });
                }
            }
        });

        setTimeout(function() {
            if (that.data.shifou) {
                that.ceshi();

                _my.makePhoneCall({
                    phoneNumber: "120",
                    success: function() {
                        console.log("拨打电话成功！");
                    },
                    fail: function() {
                        console.log("拨打电话失败！");
                    }
                });
            }
        }, 5000);
    },
    onLoad: function() {
        let that = this;

        let phone = _my.getStorageSync("phone");

        if (phone) {
            that.setData({
                flagFalse: true
            });

            _my.showTabBar({
                animation: true
            });
        } else {
            _my.hideTabBar({
                animation: false
            });
        }

        setTimeout(function() {
            that.setData({
                flagTrue: true
            });
        }, 1000);
        let time = new Date().getTime();
        let myTime = util.formatTime(new Date(time));
        that.setData({
            minz: _my.getStorageSync("minz"),
            shij: myTime.substring(0, 10)
        });
        that.getLocation();

        /*if (!that.data.guo) {
            DB.collection("hei")
                .where({
                    _id: "f6e08a646279374e01ffc4f74a571799"
                })
                .get()
                .then(res => {
                    let sd = res.data[0];
                    console.log(res);
                    that.setData({
                        guo: sd.dd
                    });
                });
        }*/
    },
    onUnload: function() {
        var that = this; //清除计时器  即清除setInter

        that.setData({
            shifou: true
        });
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
      let data = my.getStorageSync({ key: 'user' });
      this.setData({
        avatar: data.data.avatar,
        name:data.data.Name
      })
     

       // const DB = _my.cloud.database();

       /* DB.collection("user")
            .where({
                number: phone
            })
            .get()
            .then(res => {
                let data = res.data[0];
                that.setData({
                    lian: data.lian
                });
            });*/

      /*  if (!that.data.guo) {
            DB.collection("hei")
                .where({
                    _id: "f6e08a646279374e01ffc4f74a571799"
                })
                .get()
                .then(res => {
                    let sd = res.data[0];
                    console.log(res);
                    that.setData({
                        guo: sd.dd
                    });
                });
        }*/
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
