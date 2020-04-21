$(function () {
  ///////// 页面弹框列表 start /////////
  function showModel(html) {
    $('.el-content').html(html);
    $('.el-model').show();
  }
  $('.el-success').on("click", function (e) {
    $('.el-model').hide();
    // $('.el-model').find('.el-contaoner').hide()
  });
  // showModel()
  var el_contaoner_show = function el_contaoner_show(page, data) {
    $('.el-model').show()
    $('.el-model').css('background-color', 'rgba(0, 0, 0, 0)')
  }
  ///////// 页面弹框列表 end /////////

  ///////// 登录页面page1 start /////////
  var smilePage1 = $('.smile-page1')
  var smilePage1NickName = smilePage1.find('.nickName')
  var smilePage1PhoneNum = smilePage1.find('.phoneNum')
  var smilePage1AuthCode = smilePage1.find('.authCode')
  var smilePage1SignInBut = smilePage1.find('.signInBut')
  var smilePage1GetCode = smilePage1.find('.getCode')
  // 判断手机号正则
  var regMobile = /^0{0,1}(13[0-9]|14[0-9]|15[0-9]|18[0-9])[0-9]{8}$/
  smilePage1GetCode.on('click', function () {
    // console.log(phoneNum.val())
    var data = {
      phone: smilePage1PhoneNum.val()
    }
    // console.log(regMobile.test(data.phone))
    if (!regMobile.test(data.phone)) {
      // console.log('请检查手机号')
      alert('请检查手机号')
    } else {
      // 获取手机验证码
      ajax({
        url: 'home/user/send',
        data: data
      }).then(function (res) {
        if (res.result) {
          alert('短信发送成功！')
        } else {
          alert('短信发送失败！')
        }
      }).catch(function (err) {
        console.log(err)
      })
    }
  })
  smilePage1SignInBut.on('click', function () {
    let data = {
      nickname: smilePage1NickName.val(),
      phone: smilePage1PhoneNum.val(),
      code: smilePage1AuthCode.val()
    }
    if (data.nickname == '' || data.code == '') {
      alert('信息不能为空！')
    } else {
      // console.log('发送请求')
      // 注册登录
      ajax({
        url: 'home/user/register',
        data: data
      }).then(function (res) {
        console.log(res)
        if (res.result) {
          // 注册登录成功
          alert(res.message)
        } else {
          // 注册登录失败
          alert(res.message)
        }
      }).catch(function (err) {
        console.log(err)
      })
    }


    // console.log(data)
  })
  // ajax({
  //   url: 'home/user/register',
  //   data: {
  //     id: ''
  //   }
  // }).then(function (res) {
  //   if (res.result && res.data) {
  //     app.emit
  //   }
  // }).catch(function (err) {
  //   console.log(err)
  // })
  ///////// 登录页面page1 end /////////

  ///////// 个人中心page2 start /////////
  var smilePage3 = $('.smile-page3')
  var smilePage3NickName = smilePage3.find('.nickName')
  var smilePage3PhoneNum = smilePage3.find('.phoneNum')
  var smilePage3SaveBut = smilePage3.find('.saveBut')
  // var smilePage1SignInBut = smilePage1.find('.signInBut')
  // var smilePage1GetCode = smilePage1.find('.getCode')
  smilePage3SaveBut.on('click', function () {
    var data = {
      nickname: smilePage3NickName,
      phone: smilePage3PhoneNum
    }
    if (data.nickname == '' || regMobile.test(data.phone) == false) {
      alert('请正确填写信息！')
    } else {
      ajax({
        url: 'home/user/editinfo',
        data: {}
      }).then(function (res) {
        // console.log()
        if (res.result && res.data) {
          app.emit
        }
      }).catch(function (err) {
        console.log(err)
      })
    }
  })


  ///////// 个人中心page2 end /////////

  ///////// 修改信息page3 start /////////
  var smilePage3 = $('.smile-page1')
  var nickName = smilePage1.find('.nickName')
  var phoneNum = smilePage1.find('.phoneNum')
  var authCode = smilePage1.find('.authCode')
  var signInBut = smilePage1.find('.signInBut')
  var getCode = smilePage1.find('.getCode')
  ajax({
    url: 'home/shop',
    data: {}
  }).then(function (res) {
    console.log()
    if (res.result && res.data) {
      app.emit
    }
  }).catch(function (err) {
    console.log(err)
  })

  ///////// 修改信息page3 end /////////

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
    el_contaoner_show()
    setTimeout(function () { $('.el-model').hide(); }, 1000);
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