require(['require.config'], () => {
    require(['url','jquery'],(url,$) => {
        class Register {
            constructor () {
                this.usernameInput = $("#username");
                this.guojiaInput = $("#guojia");
                this.passwordInput = $("#password");
                this.btn = $("#regiester-btn1");
                this.bindEvent();

            }
            bindEvent(){
                this.btn.on("click",() =>{
                    let guojia = this.guojiaInput.val(),
                        username = this.usernameInput.val(),
                        password = this.passwordInput.val();
                    $.ajax({
                        type : "post",
                        url: url.phpBaseUrl + "user/register.php",
                        data:{guojia,username,password},
                        success: data => {
                            if(data.res_code === 1){
                                alert(data.res_message+",即将跳转页面");
                                location.href='login.html';
                            }
                        },
                        dataType: 'json'
                    })    

                })
            }
        }
        new Register ();
    })
})