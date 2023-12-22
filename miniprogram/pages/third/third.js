const _my = require("../../__antmove/api/index.js")(my);
const app = getApp();
console.log(app.globalData); 

var util = require("../../utils/util.js");

Page({
    /**
     * 页面的初始数据
     */
    data: {
        x: 400,
        y: 250,
        barInfo: app.globalData.barInfo,
        flag: true,
        friend: [],
        id: "",
        ss: "",
        r: "",
        g: "",
        qiuz: [],
        b: "",
        minz: "",
        kefu: "12345678900",
        // 紧急求救确认
        qiujiuflag: false,
        uio: false
    },

    toLocation() {
        _my.navigateTo({
            url: "/pages/location/location"
        });
    },

    onShow() {
      let data = _my.getStorageSync({key:'user'});
  
      this.setData({
        avatar: data.avatar,
        name:data.name
      })
    },

    onLoad() {
        _my.showTabBar({
            animation: false
        });

      
    },

    getxinxi() {
        let phone = _my.getStorageSync("phone");

        let that = this;

        const DB = _my.cloud.database();

        DB.collection("chat")
            .where({
                phone2: phone
            })
            .get()
            .then(res => {
                let tt = res.data.reverse();
                let data = tt.splice(0, 4);
                let k = 0;

                for (var i in data) {
                    k = k + 1;
                    data[i].cx = k;
                }

                that.setData({
                    qiuz: data
                });
            });
    },

    toclient1(e) {
        let phone = _my.getStorageSync("phone");

        if (!phone) {
            _my.showToast({
                icon: "error",
                title: "正在开发"
            });
            _my.getOpenUserInfo({
              success: (res) => {
                  let userInfo = JSON.parse(res.response).response
                  console.log(userInfo)
              },
              fail: (err) => {
                  console.log(err)
              }
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
            let that = this;

            _my.setStorageSync("haoyou1", that.data.kefu);

            _my.navigateTo({
                url: "../client/client?phone=" + e.currentTarget.dataset.haoyou
            });
        }
    },

    toclient(e) {
        _my.setStorageSync("haoyou1", e.currentTarget.dataset.phone1);

        _my.navigateTo({
            url: "../client/client?phone=" + e.currentTarget.dataset.phone1
        });
    },

    keyInput1: function(e) {
        this.setData({
            ss: e.detail.value
        });
    },

    tianjia() {
        let that = this;
        let arr = that.data.friend;
        let xin = that.data.ss;

        if (xin.length != 11) {
            _my.showToast({
                icon: "none",
                title: "请输入正确的手机号"
            });

            return;
        }

        arr.push({
            flag: true,
            haoyou: xin,
            imageaddress: ""
        });

        const DB = _my.cloud.database();

        DB.collection("user")
            .doc(that.data.id)
            .update({
                data: {
                    friend: arr
                }
            })
            .then(res => {
                that.getxinxi();
                console.log(res);
            });
    },

    handTouch() {
        this.setData({
            flag: false
        });
    },

    goBack() {
        this.setData({
            flag: true
        });
    }
});
