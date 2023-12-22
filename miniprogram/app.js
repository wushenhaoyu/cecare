import "./__antmove/component/componentClass.js";
const _my = require("./__antmove/api/index.js")(my);
// app.js
App({
  onLaunch(options) {
    const context = my.cloud.createCloudContext({
    // env是直接云开发环境对应的ID,关联什么环境填写什么环境的ID，填写错误会报错
    env: 'env-00jx4xbq2toc'
  });
  // 下面这一行意思是初始化云环境
  context.init();
  // 设置context的调用方法,my.后面的名称可以自定义
  my.yunkaifa = context;
  // 第一次打开
  // options.query == {number:1}
  },

    onShow: function() {
            this.getTopBarInfo();
            console.log(this.globalData)
    },

    getTopBarInfo() {
        // 获取基础设备信息
        let menuInfo = _my.getMenuButtonBoundingClientRect();

        let sysInfo = _my.getSystemInfoSync(); // 有关头部导航栏

        let barTop = menuInfo.top;
        let barBtnH = menuInfo.height;
        let statusH = sysInfo.statusBarHeight;
        let barH = statusH + barBtnH + (barTop - statusH) * 2;
        let margin = sysInfo.screenWidth - menuInfo.right;
        console.log('执行')

        if (sysInfo.safeArea) {
            margin = sysInfo.safeArea.width - menuInfo.right;
        }
        this.globalData.barInfo = {
            barTop,
            barBtnH,
            barH,
            margin
        };
    },

    globalData: {
        openid: ""
    }
});
