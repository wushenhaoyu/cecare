const _my = require("../../__antmove/api/index.js")(my);
// pages/conversation/conversation.js
const app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        array: ["亲属", "邻居", "朋友", "其它"],
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
    
    },

    kk1() {
        let that = this;
        let data = my.getStorageSync({key:'jinji'})
        var jinji = data.data
        jinji.splice(that.data.shuz,1);
       let res = my.setStorageSync({
          data:jinji,
          key:'jinji'
        })
        if(res.success)
        {
          _my.showToast({
            title: "删除成功"
        });

        setTimeout(function() {
            _my.redirectTo({
                url: "/pages/friendslist/friendslist"
            });
        }, 3000);
      }
            
    },

    kk2() {
        let that = this;
        let data = my.getStorageSync({key:'jinji'})
        var jinji = data.data
        if (that.data.jinji2.length != 11) {
          _my.showToast({
              icon: "none",
              title: "请输入正确的手机号"
          });

          return;
      }
      console.log((that.data.jinji1 == ''),that.data.jinji1)
      if((that.data.jinji1 == ''))
      {
        _my.showToast({
          icon: "none",
          title: "姓名不能为空"
          
      });
      return;
      }
      if((that.data.jinji3 == ''))
      {
        _my.showToast({
          icon: "none",
          title: "请填写与本人的关系"
          
      });
      return;
      }
      console.log(!(jinji),jinji)
      if(!(jinji))
      {
       let res = my.setStorageSync({data:[{jinji1:that.data.jinji1,jinji2:that.data.jinji2,jinji3:that.data.jinji3}],key:'jinji'})
        console.log(res)
      }
      else{
        for(var i =0; i<jinji.length;i++)
        {
          if(jinji[i].jinji2 == that.data.jinji2 && jinji[i].jinji2 != jinji[that.data.shuz].jinji2)
          {
            
              _my.showToast({
                icon: "none",
                title: "联系人重复"
                
            });
            return;
          
        }}
        var newdata = {jinji1:that.data.jinji1,jinji2:that.data.jinji2,jinji3:that.data.jinji3}
        jinji.splice(that.data.shuz,1,newdata);
        console.log(jinji)
        
       let res =  my.setStorageSync({data:jinji,key:"jinji"})
       if(res.success)
       {
        _my.showToast({
          title: "修改成功"
      });

       }
      }
      setTimeout(function() {
        _my.redirectTo({
            url: "/pages/friendslist/friendslist"
        });
    }, 3000);
        
               
            
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {},

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function(options) {
      var that = this;
      that.setData({
        lian: options.lian //articleID问pageB页面变量
    });
      console.log(that.data.lian)
      let data = my.getStorageSync({key:"jinji"});
      let jinji =data.data
      let tar = jinji[lian]
      this.setData({
        shuz: lian,
        jinji1: tar.jinji1,
        jinji2: tar.jinji2,
        jinji3: tar.jinji3
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
