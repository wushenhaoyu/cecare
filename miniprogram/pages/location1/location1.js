const _my = require("../../__antmove/api/index.js")(my);
const app = getApp();
Page({
    data: {
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
        modeIndex: 0,
        endPoint: {},
        isNavigate: false,
        themeColor: "#427CFF",
        showCustomActionsheet: false,
        showThemeColorActionsheet: false
    },

    toNavigate() {
        _my.switchTab({
            url: "/pages/first/first"
        });
    },

    onShow() {
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
                        jinji1: phone
                    },
                    {
                        jinji2: phone
                    },
                    {
                        jinji3: phone
                    },
                    {
                        jinji4: phone
                    },
                    {
                        jinji5: phone
                    }
                ])
            )
            .get()
            .then(res => {
                let ss = res.data.length;
                let ppp = res.data.reverse();

                for (var i in ppp) {
                    ppp[i].jb = {
                        name: "求救者位置",
                        latitude: ppp[i].lat,
                        longitude: ppp[i].lon
                    };
                }

                that.setData({
                    ppp: ppp.reverse()
                });
            });
    },

    onLoad(options) {
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
                        jinji1: phone
                    },
                    {
                        jinji2: phone
                    },
                    {
                        jinji3: phone
                    },
                    {
                        jinji4: phone
                    },
                    {
                        jinji5: phone
                    }
                ])
            )
            .get()
            .then(res => {
                let ss = res.data.length;
                let ppp = res.data.reverse();

                for (var i in ppp) {
                    ppp[i].jb = {
                        name: "求救者位置",
                        latitude: ppp[i].lat,
                        longitude: ppp[i].lon,
                        minz: ppp[i].name,
                        phone: ppp[i].phone
                    };
                }

                that.setData({
                    ppp: ppp.reverse()
                }); //   let data = res.data[ss - 1]
                //   let time2 =data.time
                //   let lon=data.lon
                //   let lat=data.lat
                // let jb = {
                //     name: '求救者位置',
                //     latitude: lat,
                //     longitude: lon
                // }
                // that.setData({
                //     endPoint: jb
                // })
            });
    },

    onWatchDemo(e) {
        let value = e.currentTarget.dataset.jb;

        _my.setStorageSync("jb", value);

        let that = this;

        _my.navigateTo({
            url: "../personality/personality?jb=" + value
        });
    }
});
