define(['jquery'], $ => {
    function Footer () {
        this.container = $('#footer_container');
        this.load().then(() => {
            
        });
    }
    $.extend(Footer.prototype,{
        load () {
            return new Promise(resolve =>{
                this.container.load('/html/module/footer.html',() =>{
                    resolve();
                });
            })
        }
    })
    return new Footer();
}
    
)