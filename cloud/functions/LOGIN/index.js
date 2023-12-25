const cloud = require("@alipay/faas-server-sdk");


exports.main = async (event, context) => {
  let user_name = event.user_name
  const db = cloud.database();
  let data =  await db.collection('user').where({
    user_name:user_name
  }).get();
  if(data)
  {

  }
  else{
    db.collection('user').add({
      user_name:user_name
    })
  }
  
  return ;
};

 // let phone = event.phone
 /* const crypto = require('crypto');
  let key = 'TfRQKMk/Vqk1hutk3totuQ==' // 解密的key
  let crypted = phone // 密文
  crypted = Buffer.from(crypted, 'base64').toString('binary');
  key = Buffer.from(key, 'base64');
  const iv = Buffer.alloc(16, 0)
  const decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
  let decoded = decipher.update(crypted, 'binary', 'utf8');
  decoded += decipher.final('utf8');*/
// 打印解密结果