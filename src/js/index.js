require(['require.config'], () =>{
    require(['url','jquery','template','swiper','header','footer'],(url,$,template,Swiper) =>{
        class Index {
            constructor () {
                this.li = $("item-hot-items");
                this.price = $(".item-price");
                this.button = $(".item-price-button");
                this.getType();
                this.priceshow();
                this.banner();
            }
            banner () {
               // 首页轮播图
        var mySwiper = new Swiper ('.swiper-container', {
         
          autoplay: true,
          
          loop: true, // 循环模式选项
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          
          // 如果需要前进后退按钮
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            
          }

        }) 
            }

            priceshow(){              
                $("#lists").on("mouseenter",".item-four",function(event){
                    var target = $(event.target);
                  target.find(".item-price").addClass("xiaoshi");
                  target.find(".item-price-button").addClass("chuxian");
                  $("#lists").on("mouseleave",".item-four",function(event){
                    var target = $(event.target);
                  target.find(".item-price").removeClass("xiaoshi");
                  target.find(".item-price-button").removeClass("chuxian");
                })
                })
               
                          
            }
            getType () {
                // ajax请求数据
                $.get( url.rapBaseUrl + 'indexlist', data => {
                  if(data.res_code === 1) {
                    this.renderType(data.res_body.list);
                    
                  }
                })
               
              }
              
              renderType (list) {
                let html = template("list-monopoly", { list });
                $("#list-container").html(html);
              }  // 获取分类数据
        }
        new Index();
    })
})