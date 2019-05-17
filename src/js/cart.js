
require(['require.config'], () => {
    require(['url','jquery','template', 'header'], (url, $,template) => {
        class Cart{
            constructor () {
                
                this.init();
                
                
                
            }
            // 计算总价
            total(cart){
                let sum = 0;
                let geshu =0 ;
                cart.forEach( item => {                 
                        if(item.checked == true){
                           
                            sum += item.num*item.detailprice
                            geshu += item.num;
                           
                        }
                });   
                $(".fentotalprices").html((sum).toFixed(2));
                $(".number").html(geshu);

            }
        //    默认事件
            init () {
                let cart = localStorage.getItem('cart');
                
                if(cart) {
                  // 渲染列表
                  cart = JSON.parse(cart);
                  
                 
                  cart.forEach( item => {                   
                   
                        item.sumer = item.detailprice*item.num;
                        
                    
                     

            })   
            localStorage.setItem('cart', JSON.stringify(cart));
            this.render(cart);
            this.numberchange(cart);
            this.check(cart);
            this.total(cart);
            this.delete(cart);
            
                  
                  
                }else{
                  // 提示购物车为空
                  alert('购物车为空，你太穷了');
                }
               
             
              }
            //   渲染
              render (cart) {
                // template('cart-template', {list: cart})
                $("#list-containers").html(template('cart-template', {cart}));
                
              }
            //   购物车加减
              numberchange(cart){
                  let _this=this
               
                $(".item-cols-num").on('click' ,e => {
                    
                    var target = e.target;
                    if(target.className == "addright"){
                        // 获取当前CRAT的id
                        let id = $(target).prev().attr("data-id");
                        let num = $(target).prev().html();
                        num++;
                       
                        $(target).prev().html(num);
                         cart.forEach( item => {
                             if(item.id == id){
                                 item.num = num
                                 item.sumer =  (item.detailprice*item.num).toFixed(2);
                                 localStorage.setItem('cart', JSON.stringify(cart));                                  
                                 $(target).parents(".cart-item").find(".zongjia").html(item.sumer);
                             }
                         });   
                         this.total(cart);  
                    }else if(target.className == "addleft"){
                        let id = $(target).next().attr("data-id");
                        let num = $(target).next().html();
                        num--;
                        if(num<=0){
                            num=0;
                            $(target).next().html(0);
                        }else{
                        $(target).next().html(num);}
                        cart.forEach( item => {
                            if(item.id == id){
                                item.num = num;
                                item.sumer = (item.detailprice*item.num).toFixed(2);
                                localStorage.setItem('cart', JSON.stringify(cart));
                                $(target).parents(".cart-item").find(".zongjia").html(item.sumer);
                            }
                        });
                         this.total(cart); 
                    }
    
                })                
            }
            // 单选按按钮
            check(cart){
                let _this=this;
                $("#list-containers").on('change', ".checkbo", function () {                   
                let  checks = $(this).prop("checked");
                let id = $(this).parents(".cart-item").find(".addleft").next().attr("data-id");
                console.log(id);
                cart.forEach( item => {
                    if(item.id == id){
                       item.checked = checks;
                       localStorage.setItem('cart', JSON.stringify(cart));  
                    }
                });
                _this.total(cart);

                })
            
        
        }
        // 删除按钮
        delete(cart){
            let _this = this;
            $("#list-containers").on('click', ".shanchu", function () {
                
                let id = $(this).parents(".cart-item").find(".addleft").next().attr("data-id");
                if(confirm("你确认要删除吗")){
                    $(this).parents(".cart-item").remove();
                    cart.forEach( (item,index) => {
                        if(item.id == id){
                           cart.splice(index,1)
                           localStorage.setItem('cart', JSON.stringify(cart));

                        }
                    });
                }
            })

        }
    }
        new Cart();

    })})