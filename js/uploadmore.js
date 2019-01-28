//定义上传方法函数
var id="1";
function PreviewImage(imgFile) {
    var pattern = /(\.*.jpg$)|(\.*.png$)|(\.*.jpeg$)|(\.*.gif$)|(\.*.bmp$)/; //正则判断图片格式
    if(!pattern.test(imgFile.value)) { //不支持此图片格式
      alert("系统仅支持jpg/jpeg/png/gif/bmp格式的照片！");
      imgFile.focus();
    }
    else{//支持此图片格式
       //定义图片路径
       var path;
       //添加显示图片的HTML元素
       id += 1;
        $(".img-cont").append("<div class='imgDisplay'><div id='"+id+"'><img src='' /><input value=''></div><a></a></div>");
       //判断浏览器类型
       if(document.all){
       //兼容IE
        if ((navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/8./i)=="8.") || (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/9./i)=="9.")){
        	//IE下，使用滤镜
            imgFile.select();
            window.parent.document.body.focus();//用于弹窗上传图片
            imgFile.blur();
            path = document.selection.createRange().text;
            var localImagId = document.getElementById(id);//img外的div
            //必须设置初始大小
            localImagId.style.display = "inline-block";
            //图片异常的捕捉，防止用户修改后缀来伪造图片
            try{
                localImagId.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
                localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = path;
            }
            catch(e)
            {
                alert("您上传的图片格式不正确，请重新选择!");
                return false;
            }
            document.selection.empty();
        }
        else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/10./i)=="10."){
            path = URL.createObjectURL(imgFile.files[0]);
        	document.getElementById(id).innerHTML = "<img src='"+path+"' width='290'/><input value='"+path+"'>";
        }
       }
       else{
        //兼容其他浏览器
        path = URL.createObjectURL(imgFile.files[0]);
        document.getElementById(id).innerHTML = "<img src='"+path+"' width='290'/><input class='oinp' type='hidden' name='image"+id+"' value='"+path+"'>";
       }
       //重置表单
      /* resetForm(imgFile);*/
    }
}

//重置表单,允许用户连续添加相同的图片
/*function resetForm(imgFile){
  $(imgFile).parent()[0].reset();
}*/

//控制"按钮"显示与隐藏
$(".img-cont").off("mouseenter","div").on("mouseenter","div",function(){
    var that=this;
    var dom=$(that).children("a");
    //为点击事件解绑，防止重复执行
    dom.off("click");
    dom.on("click",function(){
    	//删除当前图片
     	dom.parent().remove();
     });
}).off("mouseleave","div").on("mouseleave","div",function(){
    var that=this;
})




