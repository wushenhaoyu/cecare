const cloud = require("@alipay/faas-server-sdk");
exports.main = async (event, context) => {
  const db = cloud.database();
  let user_name = event.user_name
  let data =  await db.collection('user').where({
    user_name:user_name
  }).get();
  if(data.length){
    if(data[0].phoneNumber)
    {
      return {status:1}
    }
    else{
      return {status:0}
    }
  }
  else{
    return {status:0};
  }
};