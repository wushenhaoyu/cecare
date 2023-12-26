const _my = require("../../__antmove/api/index.js")(my);
// pages/login/login.js
const app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        x: 400,
        y: 250,
        barInfo: app.globalData.barInfo,
        phone: "",
        data: {},
        guo: false,
        sg: "f6e08a646279374e01ffc4f74a571799",
        //动画
        toggleDelay: false,
        showNotice: false,
        animation: "",
        noneCarton: "",
        isShowPhone:false
    },
    phoneIntput:function(e)
    {
      let that = this;
      this.setData({
        phone: e.detail.value,
      });
    },
    confirmPhone:function(e){
      let that = this
      console.log(that.data.phone,that.data.phone.length)
      if(that.data.phone.length != 11)
      {
        my.showToast({
          content:"不正确的手机号"
        })
        return;
      }
      else{
        console.log(that.data.name)
        my.yunkaifa.callFunction({
          name:"addPhoneNumber",
          data:{
            phoneNumber:that.data.phone,
            user_name:that.data.name
          },
          success(res){
            if(res.result.status)
            {
              my.setStorageSync({key:'phone',data:{
                phone:that.data.phone
              }})
              that.setData({
                isShowPhone:false
            });
            my.showTabBar({
              animation:true
            })
            my.showToast({
              content:"绑定成功"
            })
            }
            else{
              my.showToast({
                content:"提交失败，请重试"
              })
              return
            }
          }

        })
        
      }
    }
    ,
    getPhoneNumber() {
      my.getPhoneNumber({
        success: (res) => {
          let encryptedData = res.response;
          this.confirmPhone()
        },
        fail: (res) => {
          console.log(res);
        },
      });
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
        setTimeout(function() {
            that.setData({
                noneCarton: "animation-reverse",
                showNotice: false
            });
        }, 400);
    },

    changeStats(e) {
        this.setData({
            animation: e.currentTarget.dataset.class,
            showNotice: true,
            noneCarton: ""
        });
        let that = this;
    },

    aboutOur() {
        _my.showModal({
            title: "工作团队",
            content: "Elite团队致力于做出一款高效的急救小程序"
        });
    },

    aboutMe() {
        _my.showModal({
            title: "联系我们",
            content: "如有问题请向邮箱2067068392@qq.com反馈"
        });
    },

    aboutvolunte() {
        let phone = my.getStorageSync({key:'user'});
        if(phone.success)
        {
          phone = phone.data
        }

        if (!phone) {
            _my.showToast({
                icon: "error",
                title: "正在开发中"
            });
          
           /*setTimeout(function() {
                _my.navigateTo({
                    url: "/pages/zhuche/zhuche"
                });
            }, 1000);*/ // setTimeout(function () {
            //     that.jer()
            // }, 1000)

            return;
        } else {
            _my.navigateTo({
                url: "/pages/volunteer/volunteer"
            });
        }
    },

    tuichu() {
        let that = this;

        _my.removeStorageSync({key:"user"});


        that.setData({
            name:"",
            avatar:"",
            isShowPhone:false
        });
        my.showTabBar({
          animation:true
        })
    },

    toclient() {
        _my.navigateTo({
            url: "/pages/client/client"
        });
    },
    getOpenUserInfo() {
      var that = this
      _my.getOpenUserInfo({
          success: (res) => {
              let userInfo = JSON.parse(res.response).response
              console.log(userInfo.nickName)
              
           let s = my.setStorage({
              data: {
                Name:userInfo.nickName,
                avatar:userInfo.avatar
              },
              key: "user",
              success(res){
                
                that.setData({
                  avatar:userInfo.avatar,
                  name:userInfo.nickName,
                })
                my.yunkaifa.callFunction({
                  name:"register",
                  data:{
                    user_name:userInfo.nickName
                  },
                  success(res)
                  {
                    console.log("注册成功")
                    console.log(res.result)
                    my.yunkaifa.callFunction({
                      name:"checkUser",
                      data:
                      {
                        user_name:userInfo.nickName,
                      },
                      success(res)
                      {
                        console.log(res,"checkUser")
                        if(res.result.status)
                        {
                          my.yunkaifa.callFunction({
                            name:"getUserInfo",
                            data:{
                              user_name:userInfo.nickName,
                            },
                            success(res){
                              my.setStorageSync({key:'phone',data:{
                                phone:res.result.phoneNumber
                              }})
                            }
                          })
                        }
                        else{
                          that.setData({
                            isShowPhone:true
                          })
                          my.hideTabBar({
                            animation:true
                          })
                        }
                      },
                      fail:function(res){
                        console.log(res)
                      }
                    })
                  }
                })
               
              }
            });
           
            
          },
          fail: (err) => {
              console.log(err)
          }
      });
    
  },
  feedback:function(e){
    _my.showModal({
      title:'详细问题请咨询电话',
      content:"15941624117"
    })
  },
    touch2() {
      _my.getOpenUserInfo({
        success: (res) => {
            let userInfo = JSON.parse(res.response).response
            console.log(userInfo)
        },
        fail: (err) => {
            console.log(err)
        }
    });
    
     /* setTimeout(function() {
        _my.navigateTo({
            url: "/pages/zhuche/zhuche"
        });
    }, 1000);*/
    
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        _my.showTabBar({
            animation: false
        });

        }
    ,

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
