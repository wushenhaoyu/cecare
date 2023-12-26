const cloud = require("@alipay/faas-server-sdk");
exports.main = async (event, context) => {
  const db = cloud.database();
  let user_name = event.user_name
  let res = await db.collection('user').where({
    user_name:user_name
  }).get()
  if(res.length)
  {
    return res
  }
  else{
    db.collection('user').add({
      data: {
        user_name:user_name
      },
    });
    return res
  }
  
};