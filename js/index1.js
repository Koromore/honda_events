
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ajax(setting) {
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: 'http://honda-china.weiyihui.cn/' + setting.url,
      type: setting.type || 'POST',
      data: setting.data || {},
      dataType: 'json',
      success: function (data) {
        resolve(data)
      },
      error: function (err) {
        reject(err)
      }
    });
  });
}


var baseUrl = window.location.href.split('index')[0];
var height = window.innerHeight;
var app = new PageSlider({
  pages: $('.page-wrap .page'),
  dev: 0,
  // musicUrl: 'music/bg.mp3?999',
  baseUrl: baseUrl, //
  // shareUrl:'https://yidian.weiyihui.com.cn/ztwxshare/index.php',
  // shareUrl:'http://h5.weiyihui.cn/ghac_weixinshare/index.php',
  shareUrl: 'http://h5.weiyihui.cn/ztwxshare/index.php',
  onchange: function () {
    if (this.index == 8) {
      //分享页面 请求接口
      app.wxShare('分享标题', '分享描述', app.baseUrl + 'index.php', app.baseUrl + 'images/share.jpg', function () {
        ajax({
          url: 'home/user/share',
          data: {
            nid: app.articleID
          }
        }).then(function (res) {
          console.log(res);
        })
      });
    } else {
      // 正常分享
      app.wxShare('分享标题', '分享描述', app.baseUrl + 'index.php', app.baseUrl + 'images/share.jpg');
    }
  }
});
app.wxShare('分享标题', '分享描述', app.baseUrl + 'index.php', app.baseUrl + 'images/share.jpg');

var pre_resource = [
  '/static/images/orient.png',
];

app._loadimg(pre_resource, function (process) {
  $(".load-tet").html('加载' + Math.floor(process) + "%");
}, function () {
  $('.loading').fadeOut(100);
  $('.wrap').removeClass('none');
});


//首页顶部轮播
var bannerSwiper = new Swiper('#index-banner', {
  pagination: '.swiper-pagination',
  paginationClickable: true,
  loop: true,
});


//首页赛事报道
var reportSwiper = new Swiper('#report-swiper', {
  initialSlide: 0,
  // autoplay:3000,
  pagination: '.report-pagination',
  slidesPerView: 2.4,
  paginationClickable: true,
  spaceBetween: 60,
  centeredSlides: true,
  loopedSlides: 4,
  loop: true,
  loopAdditionalSlides: 100, //swiper中同时开启loop和centeredSlides后向左滑动出现空白的问题,
  observer: true,//修改swiper自己或子元素时，自动初始化swiper
  observeParents: true,//修改swiper的父元素时，自动初始化swiper
});

/**
 * [首页赛事报道]
 * @param  {[type]}) 
 * @return {[type]}  
 */
ajax({
  url: 'home/info/home',
  page: 1
}).then(function (res) {
  if (res.result && res.data.length != 0) {
    var html = '';
    for (var i = 0; i < res.data.length; i++) {
      html += '<div class="swiper-slide" data-id="' + res.data[i].id + '">';
      html += '   <div class="report-item">';
      html += '       <div class="report-img">';
      html += '           <img src="/static/images/banner1.jpg">';
      html += '        </div>';
      html += '        <div class="report-text">';
      html += '            <p class="report-p">' + res.data[i].title + '</p>';
      html += '            <p class="report-time">';
      html += '                <span class="report-line"></span>' + res.data[i].create_time + '';
      html += '            </p>';
      html += '        </div>';
      html += '    </div>';
      html += '</div>';
    }
    reportSwiper.params.loopedSlides = res.data.length;
    $('#report-swiper .swiper-wrapper').html(html);
    setTimeout(function () {
      reportSwiper.update(); // 重新计算高度;
      reportSwiper.reLoop(); //重新计算需要循环的slider
    }, 100)
  } else {
    //无数据...
    $('#report-swiper .swiper-wrapper').html('<p class="nodata">暂无数据...</p>');
  }
})



//首页精彩世界
var worldSwiper = new Swiper('#world-swiper', {
  pagination: '.world-pagination',
  paginationClickable: true,
  loop: !0,
});


//首页用户点击去用户页面
$('.index-user').on('click', function (e) {
  e.preventDefault();
  app.moveTo(1, true);
});




//赛车手介绍轮播
var driverSwiper1 = new Swiper('#driver-banner1', {
  loop: !0,
  nextButton: '.driver-next',
  prevButton: '.driver-prev',
});
var driverSwiper2 = new Swiper('#driver-banner2', {
  loop: !0,
  nextButton: '.driver-next',
  prevButton: '.driver-prev',
});


