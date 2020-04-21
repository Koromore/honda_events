
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
  dev: 2,
  // musicUrl: 'music/bg.mp3?999',
  baseUrl: baseUrl, //
  // shareUrl:'https://yidian.weiyihui.com.cn/ztwxshare/index.php',
  // shareUrl:'http://h5.weiyihui.cn/ghac_weixinshare/index.php',
  shareUrl: 'http://h5.weiyihui.cn/ztwxshare/index.php',
  onchange: function () {

  }
});
app.wxShare('分享标题', '分享描述', app.baseUrl + 'index.php', app.baseUrl + 'images/share.jpg');

var pre_resource = [
  'images/orient.png',
];

app._loadimg(pre_resource, function (process) {
  $(".load-tet").html('加载' + Math.floor(process) + "%");
}, function () {
  $('.loading').fadeOut(100);
  $('.wrap').removeClass('none');
});
