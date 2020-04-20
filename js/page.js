$(function () {
  ///////// 积分明细page4 start /////////
  var page4Tab1 = $('.smile-page4').find('.tab1')
  var page4Tab2 = $('.smile-page4').find('.tab2')
  var page4tabContent1 = $('.smile-page4').find('.tabContent1')
  var page4tabContent2 = $('.smile-page4').find('.tabContent2')
  // tab切换
  page4Tab1.on('click', function () {
    page4Tab1.css({ 'opacity': 1 })
    page4Tab2.css({ 'opacity': 0.5 })
    page4tabContent1.css({ 'display': 'block' })
    page4tabContent2.css({ 'display': 'none' })
  })
  page4Tab2.on('click', function () {
    page4Tab1.css({ 'opacity': 0.5 })
    page4Tab2.css({ 'opacity': 1 })
    page4tabContent1.css({ 'display': 'none' })
    page4tabContent2.css({ 'display': 'block' })
  })

  // 滑动组件积分列表
  var homeSwiper = new Swiper('#integralList', {
    direction: 'vertical',
    slidesPerView: 'auto',
    mousewheelControl: true,
    freeMode: true,
    onTouchMove: function (swiper) {  //手动滑动中触发
      homeSwiper.update(); // 重新计算高度;
    },
    onTouchEnd: function (swiper) {
    }
  });
  ///////// 积分明细page4 end /////////

  ///////// 兑换中心page5 start /////////
  var page5ChangeBut = $('.smile-page5').find('.changeBut')
  var page5Content1 = $('.smile-page5').find('.content1')
  var page5Content2 = $('.smile-page5').find('.content2')
  var page5Copy = $('.smile-page5').find('.copy')
  // page5ChangeBut.on('click', function () {
  //   console.log(3)
  // })
  // 兑换中心/兑换记录切换
  page5ChangeBut.toggle(
    function () {
      page5Content1Show()
    },
    function () {
      page5Content2Show()
    }
  )
  var page5Content1Show = function page5Content1Show() {
    // console.log(1)
    page5Content1.css({ 'display': 'none' })
    page5Content2.css({ 'display': 'block' })
  }
  var page5Content2Show = function page5Content2Show() {
    // console.log(2)
    page5Content1.css({ 'display': 'block' })
    page5Content2.css({ 'display': 'none' })
  }

  page5Content1Show()
  // 滑动组件产品列表
  var homeSwiper = new Swiper('#productList', {
    direction: 'vertical',
    slidesPerView: 'auto',
    mousewheelControl: true,
    freeMode: true,
    onTouchMove: function (swiper) {  //手动滑动中触发
      homeSwiper.update(); // 重新计算高度;
    },
    onTouchEnd: function (swiper) {
    }
  });

  // 滑动组件兑换记录
  var homeSwiper = new Swiper('#recordList', {
    direction: 'vertical',
    slidesPerView: 'auto',
    mousewheelControl: true,
    freeMode: true,
    onTouchMove: function (swiper) {  //手动滑动中触发
      homeSwiper.update(); // 重新计算高度;
    },
    onTouchEnd: function (swiper) {
    }
  });

  // 复制单号
  function copyArticle(name) {
    const range = document.createRange()
    range.selectNode(document.getElementById(name))
    const selection = window.getSelection()
    if (selection.rangeCount > 0) selection.removeAllRanges()
    selection.addRange(range)
    document.execCommand('copy')
    alert("复制成功！")
  }
  page5Copy.on("click", function () {
    var index = this.getAttribute("data-index")
    var name = 'expressNum' + index
    this.addEventListener('click', copyArticle(name), false)
  })
  // document.getElementById('codeBtn').addEventListener('click', copyArticle(name), false)
  ///////// 兑换中心page5 end /////////

  ///////// 答题页面psge6 start /////////
  var smilePage6 = $('.smile-page6')
  var smilePage6List = smilePage6.find('.list')
  var smilePage6Affirm = smilePage6.find('.affirm')
  var dataResult = ''
  smilePage6List.on('click', function () {
    // console.log(this.style.background)
    smilePage6List.css({
      background: "url(./images/list22.png) center center no-repeat",
      color: "white"
    })
    this.style.background = "url(./images/list23.png) center center no-repeat"
    this.style.color = "black"
    console.log(this.getAttribute("data-result"))
    dataResult = this.getAttribute("data-result")
  })
  smilePage6Affirm.on("click", function () {
    console.log(dataResult)
  })
  ///////// 答题页面psge6 end /////////

})