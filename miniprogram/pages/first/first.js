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
      var that = this
      that.getLocation()
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
      my.hideTabBar({
        animation: true,
      })
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
          my.setStorageSync({key:"location",data:{
            lat:this.data.lat,
            lon:this.data.lon
          }})
          my.showTabBar({
            animation: true,
          })
          that.setData({
            flagFalse:true
          })
          },
          fail: (res) => {
            _my.showModal({
              title: "授权提示",
              content:
                  "小程序需要您的授权才能使用哦"
          });
          },
          complete: () => {},
        });

    },

    ceshi() {
        let data = _my.getStorageSync({key:"phone"});
        if(data.success)
        {
          phone =data.data.phone
        }

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
                      const uniqueId = 'id-' + new Date().getTime().toString(36) + '-' + Math.random().toString(36).substr(2, 9);
                      console.log(uniqueId)
                      

                      my.yunkaifa.callFunction({
                        name:"updateLocation",
                        data:{
                          user_name:that.data.name,
                          lat:that.data.lat,
                          lon:that.data.lon,
                          locationId:uniqueId
                        },
                        success(res)
                        {
                          console.log(res)
                          my.makePhoneCall({
                            number: '120',
                            success: function(res) {
                              console.log(res);  //{"success": true}
                            },
                            fail: function(err) {
                              console.log(err);
                            }
                          });
                          //写发送信息的
                          
                        }
                      })
                      my.setStorageSync({key:"location",data:{
                        lat:that.data.lat,
                        lon:that.data.lon
                      }})
                      },
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
