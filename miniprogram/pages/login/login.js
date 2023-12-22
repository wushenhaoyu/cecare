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
        noneCarton: ""
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
        let phone = _my.getStorageSync("phone");

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
            avatar:""
        });
    },

    toclient() {
        _my.navigateTo({
            url: "/pages/client/client"
        });
    },
    getOpenUserInfo() {
      _my.getOpenUserInfo({
          success: (res) => {
              let userInfo = JSON.parse(res.response).response
              console.log(userInfo.nickName)
              
           let s = _my.setStorageSync({
              data: {
                Name:userInfo.nickName,
                avatar:userInfo.nickName
              },
              key: 'user',
            });
            let a = _my.getStorageSync({key:"user"})
           console.log(a)
            this.setData({
              avatar:userInfo.avatar,
              name:userInfo.nickName
            })
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

        let pp = _my.getStorageSync("phone");

        let that = this;



        if (!that.data.guo) {
         
        }
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
      let data = _my.getStorageSync({ key: 'user' });
      console.log(data);
      if (data.success) {
          console.log("执行成功");
      }

      this.setData({
        avatar: data.data.avatar,
        name:data.data.name
      })
      console.log(data.data.name)
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
      let data = _my.getStorageSync({key:'user'});
      console.log(data)
      this.setData({
        avatar: data.avatar,
        name:data.name
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
