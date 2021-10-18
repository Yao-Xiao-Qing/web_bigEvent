//注意每次调用$.post() $.get() $.ajax()函数的时候 会先调用ajax.prefilter这个函数
//在这个函数中，可以拿到我们给Ajax提供的配置对象
$.ajaxPrefilter(function (options) {
    console.log(options.url);///api/login
    // 我们把数据做一次拼接
    // 再发起真正的ajax请求之前，统一拼接请求的根路径
    options.url = 'http://api-breakingnews-web.itheima.net' + options.url;
})