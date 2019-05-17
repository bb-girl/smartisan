require(['require.config'], () =>{
    require(['url','jquery','template','header','footer'],(url,$,template) =>{

   class List {
        constructor () {
            this.getType();
        }
    getType () {
        // ajax请求数据
        $.get( url.rapBaseUrl + 'list', data => {
          if(data.res_code === 1) {
            this.renderType(data.res_body.list); 
          }
        })
      }
      renderType (list) {
        let html = template("list-monopoly", { list });
        $("#listContainer").html(html);
      }  // 获取分类数据
}
new List ();
})
}) 