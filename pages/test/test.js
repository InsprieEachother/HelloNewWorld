Page({
  data: {
    username: "付老师",
    number: 15,
    arr: [1, 3, 5, 7, 9]
  },
  changename() {
    this.setData({
      username:this.data.username === "付老师"?"廖老师":"付老师"
    })
  },
  increasenumber() {
    this.setData({
      number: this.data.number + 1
    })
  }
}
)