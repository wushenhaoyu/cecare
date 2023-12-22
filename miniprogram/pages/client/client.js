const _my = require("../../__antmove/api/index.js")(my);
// pages/client/client.js
const app = getApp(); // pages/third/third.js

const recorderManager = _my.getRecorderManager();

const backgroundAudio = _my.getBackgroundAudioManager();

var util = require("../../utils/util.js");

Page({
    /**
     * 页面的初始数据
     */
    data: {
        barInfo: app.globalData.barInfo,
        flag: false,
        key: "",
        //输入输出框的内容
        time: "",
        //输入输出框的时间
        img1: "/image/shipintu.png",
        img2: "/image/fasongkuang.png",
        count: "",
        openRecordingdis: "block",
        //显示录机图标
        shutRecordingdis: "none",
        //隐藏停止图标
        recordingTimeqwe: 0,
        //录音计时
        setInter: "",
        //录音名称
        soundUrl: "",
        data: [],
        InputBottom: 0,
        flag1: false,
        all: []
    },

    InputFocus(e) {
        this.setData({
            InputBottom: e.detail.height
        });
    },

    InputBlur(e) {
        this.setData({
            InputBottom: 0
        });
    },

    recordingTimer: function() {
        var that = this; //将计时器赋值给setInter

        that.data.setInter = setInterval(function() {
            var time = that.data.recordingTimeqwe + 1;
            that.setData({
                recordingTimeqwe: time
            });
        }, 1000);
    },
    //开始录音
    openRecording: function() {
        console.log("yes");
        this.setData({
            flag1: !this.data.flag1
        });

        let that = this;


        let phone = my.getStorage({key:"user"});
        console.log(phone)
        if(phone.success)
        {
          phone = phone.data
        }
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
        }


        _my.getSystemInfo({
            success: function(res) {
                that.setData({
                    shutRecordingdis: "block",
                    openRecordingdis: "none"
                });
            }
        });

        const options = {
            duration: 60000,
            //指定录音的时长，单位 ms，最大为10分钟（600000），默认为1分钟（60000）
            sampleRate: 16000,
            //采样率
            numberOfChannels: 1,
            //录音通道数
            encodeBitRate: 96000,
            //编码码率
            format: "mp3",
            //音频格式，有效值 aac/mp3
            frameSize: 50 //指定帧大小，单位 KB
        }; //开始录音计时

        that.recordingTimer(); //开始录音

        recorderManager.start(options);
        recorderManager.onStart(() => {
            console.log("开始录音");
        }); //错误回调

        recorderManager.onError(res => {
            console.log(res);
        });
    },
    //结束录音
    shutRecording: function() {
        console.log("success");
        this.setData({
            flag1: !this.data.flag1
        });

        let phone = _my.getStorageSync("phone");

        const DB = _my.cloud.database();

        let time = new Date().getTime();
        var that = this;

        _my.getSystemInfo({
            success: function(res) {
                that.setData({
                    shutRecordingdis: "none",
                    openRecordingdis: "block"
                });
            }
        });

        recorderManager.stop();
        recorderManager.onStop(res => {
            let timestamp = util.formatTime(new Date());
            console.log("停止录音", res.tempFilePath);
            const { tempFilePath } = res; //结束录音计时

            clearInterval(that.data.setInter);

            _my.cloud.uploadFile({
                cloudPath:
                    "录音/sounds/" +
                    timestamp +
                    "-" +
                    this.randomNum(10000, 99999) +
                    ".mp3",
                filePath: tempFilePath,
                // 成功回调
                success: res => {
                    console.log("上传成功", res);
                    that.setData({
                        soundUrl: res.fileID // time: util.formatTime1(new Date())
                    });
                    this.shangco();
                }
            });
        }); //上传fileid至数据库
    },

    toNavigate() {
        _my.navigateBack({
            delta: 1
        });
    },

    shangco() {
        let haoyou = _my.getStorageSync("haoyou1");

        let phone = _my.getStorageSync("phone");

        const DB = _my.cloud.database();

        let time = new Date().getTime();
        var that = this;
        DB.collection("chat")
            .add({
                data: {
                    flag: true,
                    msg: that.data.soundUrl,
                    time: time,
                    yuyin: true,
                    phone1: phone,
                    phone2: haoyou
                }
            })
            .then(res => {
                console.log(res);
                that.getChat();
            });
    },

    //录音播放
    bofang: function(event) {
        let that = this;
        let url = event.currentTarget.dataset.soundid;

        _my.playBackgroundAudio({
            dataUrl:
                "https://636c-cloud1-1ggve6rwd2654275-1309155985.tcb.qcloud.la/%E5%BD%95%E9%9F%B3/" +
                that.midstr(url)
        });
    },

    //生成从minNum到maxNum的随机数
    randomNum(minNum, maxNum) {
        switch (arguments.length) {
            case 1:
                return parseInt(Math.random() * minNum + 1, 10);
                break;

            case 2:
                return parseInt(
                    Math.random() * (maxNum - minNum + 1) + minNum,
                    10
                );
                break;

            default:
                return 0;
                break;
        }
    },

    midstr(str) {
        var strnum = str.lastIndexOf("sounds/");
        var ministr = str.substr(strnum);
        return ministr;
    },

    keyInput: function(e) {
        this.setData({
            key: e.detail.value
        });
    },

    toback() {
        _my.navigateBack({
            delta: 1
        });
    },

    /**
     * 生命周期函数--监听页面加载
     */
    //出现新消息就立即出现
    onLoad: function(options) {
        let phone = _my.getStorageSync("phone");

        var that = this;
        that.getChat();

        let haoyou1 = _my.getStorageSync("haoyou1");

        console.log(haoyou1);

        const DB = _my.cloud.database();

        DB.collection("chat")
            .where({
                phone2: phone
            }) // 发起监听
            .watch({
                onChange: function(snapshot) {
                    console.log("yes");
                    that.getChat();
                },
                onError: err => {
                    console.error(err);
                }
            });

        _my.pageScrollTo({
            scrollTop: 10000,
            duration: 100 // 滑动速度
        });
    },

    //获取信息
    async getChat() {
        let haoyou1 = _my.getStorageSync("haoyou1");

        let phone = _my.getStorageSync("phone");

        let that = this;

        const DB = _my.cloud.database();

        const _ = _my.cloud.database().command;

        let count = await DB.collection("chat")
            .where({
                phone1: _.or(_.eq(phone), _.eq(haoyou1)),
                phone2: _.or(_.eq(phone), _.eq(haoyou1))
            })
            .count();
        that.setData({
            count: count
        });
        count = count.total;
        let all = [];

        for (let i = 0; i < count; i += 20) {
            DB.collection("chat")
                .orderBy("time", "desc")
                .skip(i)
                .where({
                    phone1: _.or(_.eq(phone), _.eq(haoyou1)),
                    phone2: _.or(_.eq(phone), _.eq(haoyou1))
                })
                .get()
                .then(res => {
                    let data = res.data;

                    for (var i in data) {
                        data[i].myTime = util.formatTime(
                            new Date(data[i].time)
                        );

                        if (data[i].phone2 == phone) {
                            data[i].flag = false;
                        }
                    }

                    that.setData({
                        data: data.reverse()
                    });
                    all = all.concat(data);
                    that.setData({
                        all: all
                    });
                });
        }

        _my.pageScrollTo({
            scrollTop: 10000,
            duration: 100 // 滑动速度
        });
    },

    //跳转
    jer() {
        _my.navigateTo({
            url: "../denglu/denglu"
        });
    },

    //发送信息
    sendMsg() {
        let haoyou = _my.getStorageSync("haoyou1");

        let phone = _my.getStorageSync("phone");

        let that = this; //判断是否是空的字符

        if (this.data.key.trim().length === 0) {
            // 输入的全部是空格
            _my.showToast({
                title: "请输入内容",
                icon: "error"
            });

            return;
        }

        if (!phone) {
            _my.showToast({
                title: "请先登录"
            }); // setTimeout(function () {
            //     that.jer()
            // }, 1000)

            return;
        }

        const DB = _my.cloud.database();

        let time = new Date().getTime();
        DB.collection("chat")
            .add({
                data: {
                    flag: true,
                    msg: that.data.key,
                    time: time,
                    yuyin: false,
                    phone1: phone,
                    phone2: haoyou
                }
            })
            .then(res => {
                console.log(res);
                that.getChat();
            });
        this.qingchu();
    },

    qingchu() {
        let that = this;
        that.setData({
            key: ""
        });
    },

    //点击时会接受语音
    vedioTouch(e) {
        console.log(e),
            _my.showToast({
                title: "right"
            });
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {},

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {
        _my.removeStorageSync("haoyou1");
    }
});
