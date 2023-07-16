// pages/cloudstorage/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    upFile: '',
    downFile: '',
    tmpLinkName: ""

  },
  upFileTap() {
    wx.chooseMedia({
      count: 9,
      mediaType: ['image', 'video'],
      sourceType: ['album', 'camera'],
      maxDuration: 30,
      camera: 'back',
      success: (res) => {
        const tempFilePath = res.tempFiles[0].tempFilePath
        let updateFileName = tempFilePath.split("/").pop()
        console.log(res.tempFiles[0].size)
        console.log(updateFileName)
        wx.cloud.uploadFile({
          cloudPath: updateFileName, // 上传至云端的路径
          filePath: tempFilePath, // 小程序临时文件路径
          success: res => {
            // 返回文件 ID
            // console.log(res);
            this.setData({
              upFile: res.fileID
            })

          },
          fail: console.error
        })

      }
    })



  },
  downFileTap() {
    wx.cloud.downloadFile({


      fileID: this.data.upFile, // 文件 ID
      success: res => {
        // 返回临时文件路径
        // console.log("download", res)
        this.setData({
          downFile: res.tempFilePath
        })
      },
      fail: console.error



    })
  },
  delFileTap() {
    wx.cloud.deleteFile({


      fileList: [this.data.upFile], // 文件 ID
      success: res => {
        // 返回临时文件路径
        console.log("del success", res)
      },
      fail: console.error



    })
  },
  getTmpFileName() {
    wx.cloud.getTempFileURL({
      fileList: [this.data.upFile],
      success: res => {
        // fileList 是一个有如下结构的对象数组
        // [{
        //    fileID: 'cloud://xxx.png', // 文件 ID
        //    tempFileURL: '', // 临时文件网络链接
        //    maxAge: 120 * 60 * 1000, // 有效期
        // }]
        console.log(res.fileList[0].tempFileURL)
      },
      fail: console.error
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