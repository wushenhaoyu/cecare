const _my = require("../../__antmove/api/index.js")(my);

const app = getApp();
Page({
    data: {
      lat:"0",
      lon:"0",
        barInfo: app.globalData.barInfo,
        modes: [
            {
                text: "驾车",
                value: "driving"
            },
            {
                text: "公交",
                value: "transit"
            },
            {
                text: "步行",
                value: "walking"
            }
        ],
        themeColors: [
            {
                text: "",
                value: "#427CFF"
            },
            {
                text: "",
                value: "#85d5c8"
            }
        ],
        keyIndex: 0,
        chooseType: "",
        //搜索的功能如下变量来控制
        toSearchData: ""
    },

    //为了搜索的函数
    searchData() {
        let that = this;

        let phone = _my.getStorageSync("phone");

        let time = new Date().getTime();

        const DB = _my.cloud.database();

        const _ = DB.command;
        DB.collection("qz")
            .orderBy("time", "desc")
            .where(
                _.or([
                    {
                        jinji1: phone,
                        name: that.data.toSearchData
                    },
                    {
                        jinji2: phone,
                        name: that.data.toSearchData
                    },
                    {
                        jinji3: phone,
                        name: that.data.toSearchData
                    },
                    {
                        jinji4: phone,
                        name: that.data.toSearchData
                    },
                    {
                        jinji5: phone,
                        name: that.data.toSearchData
                    }
                ])
            )
            .get()
            .then(res => {
                let ss = res.data.length;
                let ppp = res.data;

                for (var i in ppp) {
                    ppp[i].jb = {
                        name: "求救者位置",
                        latitude: ppp[i].lat,
                        longitude: ppp[i].lon
                    };
                }

                that.setData({
                    ppp: ppp
                });
            });
    },

    //得到输入的函数
    searchDataInput(e) {
        //console.log(e)
        this.setData({
            toSearchData: e.detail.value
        });

        if (e.detail.value.length == 0) {
            this.onLoad();
        }
    },

    geren(e) {
        let value = e.currentTarget.dataset.jb;

        _my.setStorageSync("jb", value);

        let that = this;

        _my.navigateTo({
            url: "../personality/personality?jb=" + value
        });
    },

    //确定后删除
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
        iconPath: "https://gw.alipayobjects.com/mdn/rms_dfc0fe/afts/img/A*EGCiTYQhBDkAAAAAAAAAAAAAARQnAQ",
        iconWidth:10,
        routeWidth:10
       });
    },

    toNavigate() {
        _my.switchTab({
            url: "/pages/first/first"
        });
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

    onSelectMode(event) {
        const { index } = event.currentTarget.dataset;

        if (index === this.data.modeIndex) {
            return;
        }

        this.setData({
            modeIndex: index
        });
    },

    onTriggerActionsheet() {
        this.setData({
            showCustomActionsheet: true
        });
    },

    onSelectCustom(event) {
        const { index } = event.detail;
        this.setData({
            keyIndex: index,
            showCustomActionsheet: false
        });
    },

    onWatchDemo(e) {
        let value = e.currentTarget.dataset.jb;
        let that = this;
        const key = this.data.customStyles[this.data.keyIndex].value;
        const referer = REFERER;
        const endPoint = JSON.stringify(value);
        const startPoint = this.data.startPoint
            ? JSON.stringify(this.data.startPoint)
            : "";
        const mode = this.data.modes[this.data.modeIndex].value;
        const navigation = this.data.isNavigate ? 1 : 0;
        let url =
            "plugin://routePlan/index?key=" +
            "32VBZ-S53WJ-ZOTFK-X4U37-DMU7S-NPB4I" +
            "&referer=" +
            "iYILIAO" +
            "&endPoint=" +
            endPoint +
            "&mode=" +
            mode +
            "&navigation=" +
            navigation +
            "&themeColor=" +
            this.data.themeColor;

        _my.navigateTo({
            url
        });
    }
});
