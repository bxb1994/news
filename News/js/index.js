window.onload=function(){
    function resize(originSize,type){
        var type=type||"x";
        var widths=document.documentElement.clientWidth;
        var heights=document.documentElement.clientHeight;
        if(type=="x"){
            var scale=widths/originSize*100;
        }else if(type=="y"){
            var scale=heights/originSize*100;
        }
        document.getElementsByTagName("html")[0].style.fontSize=scale+"px";
    }
    resize(1334,"y");
    var swiper=new Swiper('.swiper-container',{
        pagination: '.swiper-pagination',
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    })
}