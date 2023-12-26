const _my = require("../../__antmove/api/index.js")(my);

const app = getApp();
Page({
    data: {
      input:"",
      lat:"0",
      lon:"0",
        barInfo: app.globalData.barInfo,
       
        keyIndex: 0,
        chooseType: "",
        //搜索的功能如下变量来控制
        toSearchData: "",
        markers : {
          id: 0,
          latitude: 30.266786,
          longitude: 120.10675,
          width: 19,
          height: 31,
          iconPath: '/image/2.png',
          callout: {
            content: 'callout',
          },
        }
    },

    //为了搜索的函数
   
    demoShowRoute() {
      console.log(this.mapCtx)
      my.createMapContext('map').showRoute({
        searchType:"walk",
        startLat:30.257839, 
        startLng:120.062726,
        endLat:30.256718,
        endLng:120.059985,
        zIndex:4,
        routeColor:'#FFB90F',
        iconPath: "/image/2.png",
        iconWidth:100,
        routeWidth:100
       });
    },
    input:function(e)
    { 
      this.setData({
        input:e.detail.value,
      })
    },
    search:function(){
      let that = this;
      my.yunkaifa.callFunction({
        name:"checkLoaction",
        data:{
          LocationId:that.data.input
        },
        success(res){
          let data = res.result
          if(data.status)
          {
            
          }else{
            my.showToast({
              content:"无效的查询"
            })
            return;
          }
        }
      })
    },
    onShow() {
        let data = my.getStorageSync({key:'location'})
        if(data.success)
        {
          data = data.data
        }
        console.log(data)
        this.setData({
          lat:data.lat,
          lon:data.lon
        })
        this.demoShowRoute()
    },

    onLoad(options) {
      this.mapCtx = my.createMapContext('map');
    },

});
