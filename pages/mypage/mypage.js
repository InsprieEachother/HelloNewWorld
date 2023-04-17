// pages/mypage/mypage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ad_img:[
      'https://p0.pipi.cn/adAdmin/fb73860271f51b71f721f0ec8a2de06162a03.jpg?imageMogr2/quality/85',
      'https://p0.pipi.cn/adAdmin/fb73860271f7e1f2aa5015b6c33531487624b.jpg?imageMogr2/quality/85',
      'https://p0.pipi.cn/adAdmin/fb738602d7cc698d338077eba816ed0c07968.jpg?imageMogr2/quality/85',
      'https://p0.pipi.cn/adAdmin/fb738602d7c8073ba3230f15e47f93d7808fc.jpg?imageMogr2/quality/85',
      'https://p0.pipi.cn/adAdmin/fb73860251bddd230f8ea359e105853f584fe.jpg?imageMogr2/quality/85',
      'https://p0.pipi.cn/adAdmin/fb73860271f7e17e12030c798d726e875e1db.jpg?imageMogr2/quality/85',
      'https://p0.pipi.cn/adAdmin/fb73860271f7e187a97e1215e47f93d76236b.jpg?imageMogr2/quality/85',
      'https://p0.pipi.cn/adAdmin/fb73869a11e5bf87a992574c3779dcae50631.jpg?imageMogr2/quality/85',
      'https://p0.pipi.cn/adAdmin/fb73860271f51b300b338f54ab73e57ec7ac9.jpg?imageMogr2/quality/85',
      'https://p0.pipi.cn/adAdmin/fb738602d7cb12e19bd7c3ad68bba73ef2bb7.png?imageMogr2/quality/85'
    ],
    ad_img2:[
      {
        name: '电影/影院',
        img: 'https://p0.pipi.cn/adAdmin/25bfd62f11e51b9ab457e2c0a6662fc8f6e84.png_webp',
      },
      {
        name: '演出/玩乐',
        img: 'https://p0.pipi.cn/adAdmin/fb73869a8077e139dd02ff28feefc37b73791.png?imageMogr2/quality/85',
      },
      {
        name: '演唱会',
        img: 'https://p0.pipi.cn/adAdmin/fb73869a8077e139dd02ff28feefc37b73791.png?imageMogr2/quality/85',
      },
      {
        name: '脱口秀',
        img: 'https://p0.pipi.cn/adAdmin/25bfd62f11e51b339e300bc4e737367fdc9df.png_webp',
      },
      {
        name: '密室',
        img: 'https://p0.pipi.cn/adAdmin/25bfd62f11e51bddd2300b119c151dd4e3f4a.png_webp',
      },
      {
        name: '景点门票',
        img: 'https://p0.pipi.cn/adAdmin/25bfd62f2c90fa178921f0a274f4ba096e674.png_webp',
      },
      {
        name: '放映厅',
        img: 'https://p0.pipi.cn/adAdmin/fb73868d0fa923cf3ee5bce8d6e0590c82acf.png?imageMogr2/quality/85'
      }
    ],
    hot_total: 0,
    hot_movieIds: [],
    hot_movieList: [],
    holding_movieIds: [],
    holding_movieList: [],
    holding_total: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let that = this;
    wx.request({
      url: 'https://m.maoyan.com/ajax/movieOnInfoList',
      data: {
        ci: 59
      },
      success (res) {
        that.setData({
          hot_movieIds: res.data.movieIds,
          hot_movieList: res.data.movieList,
          hot_total: res.data.total
        });
      }
    });
    // 待映推荐
    wx.request({
      url: 'https://api.maoyan.com/mmdb/movie/v1/list/wish/order/coming.json',
      data: {
        ci: 59
      },
      success (res) {
        that.setData({
          holding_movieIds: res.data.data.movieIds,
          holding_movieList: res.data.data.coming,
          holding_total: res.data.data.total
        });
      }
    });
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

  },
  onTapMovieNowItem: function(event) {
    wx.navigateTo({
      url: '/pages/movieinfo/movieinfo'
    })
  },
  onTapListSwitch : function(event) {
    // 即将上映
    let that = this;
    wx.request({
      url: 'https://api.maoyan.com/mmdb/movie/home/list/rt/order/coming.json',
      data: {
        ci: 59
      },
      success (res) {
        that.setData({
          holding_movieIds: res.data.data.movieIds,
          holding_movieList: res.data.data.coming,
          holding_total: res.data.data.total
        });
      }
    });
    let title = document.getElementById('movieList2_title');
    console.log(title.innerHTML);
  }
})