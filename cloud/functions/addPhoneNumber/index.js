const cloud = require("@alipay/faas-server-sdk");
exports.main = async (event, context) => {
  const db = cloud.database();
  let user_name = event.user_name
  let phoneNumber = event.phoneNumber
  let res = await db.collection('user').where({
    phoneNumber:phoneNumber
  }).get()
  if(res.length)
  {
    return {status:0};
  }
  let data =  await db.collection('user').where({
    user_name:user_name
  }).update({
    data: {
      phoneNumber:phoneNumber,
    },
  });
  if(data.count){
    return {status:1}
  }
  else{
    return {status:0};
  }
};