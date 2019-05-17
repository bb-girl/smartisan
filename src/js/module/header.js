define(['jquery'], $ => {
    function Header () {
        this.container = $('#header_container');
        this.load().then(() => {
            this.search();
            this.bindEvents();
        });
       
    }
    $.extend(Header.prototype,{
        load () {
            return new Promise(resolve =>{
                this.container.load('/html/module/header.html',() =>{
                    resolve();
                });
            })
        },
        bindEvents () {
            $('#shouye').mouseenter(() => {
                if ($("#nav_goods_warp").is(":hidden")) {
                $("#nav_goods_warp").slideDown("slow");
                $("#nav_goods_warp").css("display","block");
                } 
                    $('#header_list_f1_goods').mouseleave(() => {
                     $("#nav_goods_warp").slideUp();

                        })
                    
                });
        },
        search () {
            $("#search-btn-f1").on('keyup',function(){
                let keyWords = $(this).val();
                $.getJSON('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=?&wd='+keyWords, data => {
                    $.each(data.s, (i,item) => {
                        
                    })
                  })
            })

        }
    })
   
    return new Header();
}
    
)

