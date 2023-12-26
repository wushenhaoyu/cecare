const cloud = require("@alipay/faas-server-sdk");
exports.main = async (event, context) => {
  const db = cloud.database();
  let LocationId = event.LocationId
  let res = await db.collection('user').where({
    LocationId:LocationId
  }).get()
  if(res.length)
  {
    return {
      status:1,
      lat:res[0].lat,
      lon:res[0].lon
    }
  }
  else{
    return {
      status:0,
      lat:"",
      lon:""
    }
  }
  
};