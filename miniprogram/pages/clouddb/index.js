// pages/index/index.js
const db = wx.cloud.database()
const clothesCol = db.collection("clothes")
const douyuCol = db.collection("douyu")
const studentsCol = db.collection("students")
const _ = db.command
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  async onHandelGetdoc() {
    const {
      total
    } = await clothesCol.count()
    console.log(total);
    clothesCol.doc("51ff80cd64af9960004e365a3f072e20").get().then(res => {
      console.log(res);
    })

  },
  onHandelwhere() {
    // clothesCol.skip(1).where({
    //   formattedPrice: _.gte(10000)
    // }).get().then(res => {
    //   console.log(res);
    // })


    clothesCol.skip(1).where({
      //可以写原生的正值表达式
      formattedPrice: /^[1-5]\d{1,3}$/i
    }).get().then(res => {
      console.log(res);
    })

  },
  onHandelexp() {
    console.log("----");
    clothesCol.skip(1).where({
      //使用db.regExp的函数
      formattedPrice: db.RegExp({
        regexp: "^[0-7][0-9]{1,3}$",
        options: "i"
      })
    }).get().then(res => {
      console.log(res)
    })



  },
  onHandelInsert() {

    // for (let i = 0; i < (300 / 20); i++) {
    //   wx.request({
    //     url: `https://m.douyu.com/hgapi/live/cate/newRecList?offset=${i*20}&cate2=hpjy&limit=20`,
    //     success(res) {
    //       const list = res.data.data.list
    //       for (const item of list) {
    //         douyuCol.add({
    //           data: item
    //         })
    //       }
    //     }
    //   })
    // }



  },
  onHandelModify() {

    // update是多个或一个数据进行局部更新
    // set是对一个数据（ 不能多个） 进行完全替代

    // clothesCol.where({
    //   formattedPrice: _.gte(10001)
    // }).update({
    //   data: {
    //     formattedPrice: 10001
    //   }
    // }).then(res => {
    //   console.log(res)
    // })

    //set这能全量更新一条数据
    studentsCol.doc("4a6be13e64b000c70017673d34e2e00e").set({
      data: {
        name: "hongyan"
      }
    })
  },
  onHandeldel() {
    studentsCol.doc("6bbbb51464affe4400d2531f53d0ef1e").remove().then(res => {
      console.log("删除数据成功：", res);
    }).catch(err => {
      console.log("删除数据失败：", err);
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})