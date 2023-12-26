const cloud = require("@alipay/faas-server-sdk");
exports.main = async (event, context) => {
  const db = cloud.database();
  let user_name = event.user_name
  let data =  await db.collection('user').where({
    user_name:user_name
  }).get();
  if(data.length){
    return data[0];
  }
  else{
    return {};
  }
};