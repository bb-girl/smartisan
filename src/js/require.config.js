require.config({
    // 设置绝对路径
    baseUrl:"/",
    paths:{
        "jquery": "libs/jquery/jquery-3.2.1",
        "header": "js/module/header",
        "footer": "js/module/footer",
        "url": "js/module/url",
        "cookie" : "libs/jquery-plugins/jquery.cookie",
        "template" : "libs/art-template/template-web",
        "swiper": "libs/swiper/js/swiper",
        "zoom":"libs/jquery-plugins/jquery.elevateZoom-3.0.8.min"
        
        
    },
    shim:{
        "cookie":{
            deps:["jquery"]
        },
        "zoom" : {
            deps: ['jquery']
          },
    }
})