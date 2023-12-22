// 云函数入口文件
const cloud = require("./wx-server-sdk");

cloud.init();
const db = cloud.database();
const _ = db.command; // 云函数入口函数

exports.main = async (event, context) => {
    try {
        return await db
            .collection("user")
            .doc(event.name)
            .update({
                // data 传入需要局部更新的数据
                data: {
                    jinji1: event.jinji1,
                    jinji2: event.jinji2,
                    jinji3: event.jinji3
                }
            });
    } catch (e) {
        console.error(e);
    }
};
