/**
 * Created by MrGao on 2017/3/1.
 */

var global = global||{};
$(function () {
//   banner 部分

    (function(){
        var oBannerW = $(".model-banner");
        var arrBo = oBannerW.find(".banner-one");
        var oNext = oBannerW.find(".next");
        var oPrev = oBannerW.find(".prev");
        var index = 0;
        var time = 2000;
        var isRunning = false;
        oNext.click(function(){
            if(isRunning){
                return;
            }
            isRunning = true;
            run();
            index = ++index%arrBo.length
            arrBo.fadeOut().eq(index).stop().fadeIn();
        });

        oPrev.click(function(){
            if(isRunning){
                return;
            }
            isRunning = true;
            run();
            index = --index%arrBo.length
            arrBo.fadeOut().eq(index).stop().fadeIn();
        });
    //    开发开关

        function run(){
            setTimeout(function(){
                isRunning = false;
            },time);
        }



    })();


//    焦点部分

    (function(){
       var oJdw = $(".model-jiaodian");
        //左侧盒子
        (function(){

            var oLw = oJdw.find(".left-box");
            var arrA = oLw.find("a");
            var arrLi = oLw.find("li");
            arrLi.click(function () {
                var index = $(this).index();
                arrLi.removeClass("active").eq(index).addClass("active");
                arrA.hide().eq(index).show();
            });
        })();
        //中间盒子

        (function(){

            var oLw = oJdw.find(".center-box");
            var arrA = oLw.find(".tab-one");
            var arrLi = oLw.find(".tab-content-one");
            arrA.click(function () {
                var index = $(this).index();
                arrA.removeClass("active").eq(index).addClass("active");
                arrLi.hide().eq(index).show();
            });
        })();






    })();


});