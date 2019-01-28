/**
 * Created by Administrator on 2017/5/15.
 */
$(function(){
    /*平台左侧导航*/
    $(".pnav_item ul li").on("click",function () {
        $(".pnav_item ul li").removeClass("on");
        /*$(this).parents(".pnav_item").siblings().find("ul").slideUp();*/
        $(this).addClass("on");
    });
     $(".qnav_item ul li").on("click",function(){
         $(".qnav_item ul li").removeClass("on");
         $(this).addClass("on");
     });
    /*tab切换*/
    $(".pcon_tab ul li").on("click",function(){
        $(this).addClass("on").siblings().removeClass("on");
    });
    /*添加规格*/
    $(".etalonLabel").on("click",function(){
        var value1 = $(".etalonT1").val();
        var value2 = $(".etalonT2").val();
        var value3 = $(".etalonT3").val();
        if((value1 != "") && (value2 != "") && ($(".etalonAppendBox").length<10)){
            var goodsSpec=value1;
            var specCount=value2;
            var priceCount=value3;
            var str = '<span class="etalonAppendBox">'+
                '<input class="fl etalonAppend1" type="text" name="goodsSpec" value="'+value1+'">'+
                '<input class="fl etalonAppend2" type="text" name="specCount" value="'+value2+'">'+
                '<input class="fl etalonAppend3" type="text" name="priceCount" value="'+value3+'">'+
                '<i class="fl"></i>'+
                '</span>';
            $(".etalonAppendBox2").append(str);
            $(".etalonT1").val("");
            $(".etalonT2").val("");
            $(".etalonT3").val("");
        }
    });
    //商品规格的删除
    $("body").on("click",".etalonAppendBox i",function(){
        $(this).parent().remove();
    });
    
    //商品展示图删除
    $(".upfileTip2").on("click",function(){
        $(this).parent().find("img").attr("src","");
        $(this).parent().attr("style","");
        $(this).parent().find("input").val("");
        if($(this).parent().find("img").attr("src") == ""){
            $(this).parent().css("background","#f6f6f6 url(../../images/static/icons/icon_upload.png) no-repeat center");
            $(this).parent().find("img").css({"width":"0px","height":"0px"});
        }
    });

    /*头部tab切换*/
    $(".indexNav li").on("click",function(){
        $(this).addClass("on").addClass("first").siblings().removeClass("on").removeClass("first");
    })
    
    /*会员中心下拉*/
    $(".indexStatus").on("mouseover",function(){
        $(".indexStatus ul").stop().slideDown(300);
    });
    $(".indexStatus").on("mouseleave",function(){
        $(".indexStatus ul").stop().slideUp(300);
    });


});





