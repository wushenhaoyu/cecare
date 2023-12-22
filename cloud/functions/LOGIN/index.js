const cloud = require("@alipay/faas-server-sdk");


exports.main = async (event, context) => {
  let user_name = event.user_name
  let password = event.password
  const db = cloud.database();
  let data =  await db.collection('user').where({
    user_name:user_name
  }).get();
  data = data[0]
  if(data.password == password)
  {
    let message = {
      "state": 1,
      "id": data.id,
    }
    return message;
  }
  else{
    let message = {
      "state": 0,
      "id": 0,
    }
    return message;
  }
};