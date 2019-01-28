/**
 * Created by Administrator on 2017/5/15.
 */
$(function(){
    //仿select标签
    $('.select').each(function () {
        var obj = $(this);
        if (obj.find('.svalue').length == 0) {
            obj.append('<p class="svalue"></p><i></i>');
            //obj.find('li').eq(0).addClass("on cur");
            obj.find('.svalue').html(obj.find('li.cur').length > 0 ? obj.find('li.cur').html() : obj.find('li').eq(0).html());
        }

        obj.on("click", function (ev) {
            var _this = $(this);
            _this.toggleClass("active");
            var obj_other = $(".select").not(_this);//获取同页面其他下拉列表
            obj_other.removeClass("active");
            obj_other.children("ul").slideUp();//点击该下拉列表时隐藏其他下拉列表
            _this.children("ul").slideToggle();
            //阻止冒泡
            var ev = ev || window.event;
            if(ev.stopPropagation){
                ev.stopPropagation();
            }
            else if(window.event){
                window.event.cancelBubble = true;//兼容IE
            }

            //点击空白区域隐藏下拉列表
            $(document).on("click", function () {
                obj.removeClass("active");
                _this.children("ul").slideUp();
            });
        });

        obj.on('mouseover', 'li', function () {
            $(this).siblings().removeClass("on");
        });
        obj.on('click', 'li', function () {
            $(this).siblings().removeClass("cur");
            $(this).addClass("on cur");
            $(this).parent().siblings(".svalue").html($(this).html());
        });
    });



    /*全选*/
    $(".checkAllIcon").on("click",function(){
        $(this).toggleClass("active");
    });
    $(".checkAll .checkAllIcon").on("click",function(){
        for(var i = 0;i < $(".pconInfoTime .checkAllIcon").length;i++){
            if($(".checkAll .checkAllIcon").hasClass("active")){
                $(".pconInfoTime .checkAllIcon").addClass("active");
            }else{
                $(".pconInfoTime .checkAllIcon").removeClass("active");
            }
        }
    });
    $(".pconInfoTime .checkAllIcon").on("click",function(){
        for(var i = 0;i < $(".pconInfoTime .checkAllIcon").length;i++){
            if($(".pconInfoTime .checkAllIcon.active").length == $(".pconInfoTime .checkAllIcon").length){
                $(".checkAll .checkAllIcon").addClass("active");
            }else{
                $(".checkAll .checkAllIcon").removeClass("active");
            }
        }
    });
    $(".checkAllIcon_normal").on("click",function(){
        for(var i = 0;i < $(".checkAllIcon_first").length;i++){
            if($(".checkAllIcon_normal").hasClass("active")){
                $(".checkAllIcon_first").addClass("active");
            }else{
                $(".checkAllIcon_first").removeClass("active");
            }
        }
    });
    $(".checkAllIcon_first").on("click",function(){
        for(var i = 0;i < $(".checkAllIcon_first").length;i++){
            if( $(".checkAllIcon_first.active").length == $(".checkAllIcon_first").length){
                $(".checkAllIcon_normal").addClass("active");
            }else{
                $(".checkAllIcon_normal").removeClass("active");
            }
        }
    });
});
