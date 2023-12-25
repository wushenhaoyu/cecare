const _my = require("../../__antmove/api/index.js")(my);
// pages/login/login.js
const app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        barInfo: app.globalData.barInfo,
        x: 400,
        guo: false,
        y: 250
    },

    onLoad() {
        _my.showTabBar({
            animation: false
        });

    },

    onShow() {
      var that = this
      my.yunkaifa.getTempFileURL({
        fileList: [
          {  fileID: 'cloud://env-00jx4xbq2toc/haimulike.png', maxAge: 3600 },
          {  fileID: 'cloud://env-00jx4xbq2toc/ertongwushi.png', maxAge: 3600 },
          {  fileID: 'cloud://env-00jx4xbq2toc/futong.png', maxAge: 3600 },
          {  fileID: 'cloud://env-00jx4xbq2toc/图片2(1).png', maxAge: 3600 },
          {  fileID: 'cloud://env-00jx4xbq2toc/图片3(1).png', maxAge: 3600 },
        ],
        success: (res) => {
          let data = res.fileList
          console.log(data)
         this.setData({
          img1:data[0].tempFileURL,
          img2:data[1].tempFileURL,
          img3:data[2].tempFileURL,
          img4:data[3].tempFileURL,
          img5:data[4].tempFileURL,
         })
        }
      })
      my.yunkaifa.getTempFileURL({
        fileList: [
          {  fileID: 'cloud://env-00jx4xbq2toc/图片4(1).png', maxAge: 3600 },
          {  fileID: 'cloud://env-00jx4xbq2toc/zhixue.jpg', maxAge: 3600 },
          {  fileID: 'cloud://env-00jx4xbq2toc/哮喘.jpg', maxAge: 3600 },
          {  fileID: 'cloud://env-00jx4xbq2toc/蛇咬伤.jpg', maxAge: 3600 },
          {  fileID: 'cloud://env-00jx4xbq2toc/小孩烫伤.jpg', maxAge: 3600 },
        ],
        success: (res) => {
          let data = res.fileList
          console.log(data)
         this.setData({
          img6:data[0].tempFileURL,
          img7:data[1].tempFileURL,
          img8:data[2].tempFileURL,
          img9:data[3].tempFileURL,
          img10:data[4].tempFileURL,
         })
        }
      })
      my.yunkaifa.getTempFileURL({
        fileList: [
          {  fileID: 'cloud://env-00jx4xbq2toc/摔倒.jpg', maxAge: 3600 },
          {  fileID: 'cloud://env-00jx4xbq2toc/中风.jpg', maxAge: 3600 },
        ],
        success: (res) => {
          let data = res.fileList
          console.log(data)
         this.setData({
          img11:data[0].tempFileURL,
          img12:data[1].tempFileURL,
         })
        }
      })


    },

    toNavigate1(e) {
        _my.navigateTo({
            url: "/kepu/kepu1/kepu1"
        });
    },

    toNavigate2(e) {
        _my.navigateTo({
            url: "/kepu/kepu2/kepu2"
        });
    },

    toNavigate3(e) {
        _my.navigateTo({
            url: "/kepu/kepu3/kepu3"
        });
    },
    aboutvolunte() {
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
            _my.navigateTo({
                url: "/pages/volunteer/volunteer"
            });
        }
    },

    aboutvolunte1() {
        _my.showModal({
            title: "联系我们",
            content: "如有想申请志愿者，请联系邮箱1192511920@qq.com"
        });
    },

    aboutvolunte3() {
      _my.showToast({
        icon: "error",
        title: "尚未开放，尽请期待"
    });
    return;
        let phone = my.getStorageSync({key:"user"});

        if (!phone) {
            _my.showToast({
                icon: "error",
                title: "请先登陆"
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
            my.setStorageSync("haoyou1", "12345678900");

            _my.navigateTo({
                url: "/pages/client/client"
            });
        }
    },

    toNavigate4(e) {
        _my.navigateTo({
            url: "/kepu/kepu8/kepu8"
        });
    },

    toNavigate5(e) {
        _my.navigateTo({
            url: "/kepu/kepu6/kepu6"
        });
    },

    toNavigate6(e) {
        _my.navigateTo({
            url: "/kepu/kepu4/kepu4"
        });
    },

    toNavigate7(e) {
        _my.navigateTo({
            url: "/kepu/kepu5/kepu5"
        });
    },

    toNavigate8(e) {
        _my.navigateTo({
            url: "/kepu/kepu7/kepu7"
        });
    },

    toNavigate9(e) {
        _my.navigateTo({
            url: "/kepu/kepu9/kepu9"
        });
    }
});
