// 云函数入口文件
const cloud = require('wx-server-sdk')
const axios = require('axios')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
}) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
  let res = {}
  try {
    res = await axios.get("http://www.baidu.com")
    console.log(res);

  } catch (err) {
    console.log(res)
    res = err
  }
  return {
    res: res.data
    //由于返回的数据会被云函数放置在result的里面，所以返回的数据必须可以被序列化的数据
  }


}