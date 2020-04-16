$(function () {
  var page4Tab1 = $('.smile-page4').find('.tab1')
  var page4Tab2 = $('.smile-page4').find('.tab2')
  var page4tabContent1 = $('.smile-page4').find('.tabContent1')
  var page4tabContent2 = $('.smile-page4').find('.tabContent2')
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


  var page5ChangeBut = $('.smile-page5').find('.changeBut')
  var page5Content1 = $('.smile-page5').find('.content1')
  var page5Content2 = $('.smile-page5').find('.content2')
  // page5ChangeBut.on('click', function () {
  //   console.log(3)
  // })

  page5ChangeBut.toggle(
    function () {
      console.log(1)
      page5Content1.css({'display': 'none'})
      page5Content2.css({'display': 'block'})
    },
    function () {
      console.log(2)
      page5Content1.css({'display': 'block'})
      page5Content2.css({'display': 'block'})
    }
  );


// 弹窗滑动组件积分列表
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


// 弹窗滑动组件产品列表
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

// 弹窗滑动组件记录列表
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


})