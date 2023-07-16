// 云函数入口文件
const cloud = require('wx-server-sdk')


cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
}) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
  const db = cloud.database()
  const clothCol = db.collection("clothes")
  const wxContext = cloud.getWXContext()
  console.log(event);

  const clothData = await clothCol.get()
  console.log(clothData)
  return {
    clothData
  }
}