/////////
//页面滑动 //
/////////
// var contentWrapW = '-' + $('.content-wrap').position().width + 'px';
var contentWrapW = '-' + parseFloat($('.content-wrap').css('width'))/3 + 'px';
var mainL = $('.content-wrap').position().left;
// $('.content-wrap').css('left',mainL);
var BoyWalk = BoyWalk();
var swipe = function (page) {
    if (page == '1') {
        $('.content-wrap').animate({'left':contentWrapW},3000,'linear');
        $('.boyStyle').animate({'left':'5%'},3000,'linear');
        setTimeout(function () {
            BoyWalk.boyWalk('2');
        },3000);
    }
};

// BoyWalk.initBoyT();




/**
 * [Swipe description]
 * @param {[type]} container [页面容器节点]
 * @param {[type]} options   [参数]
 */
/*
function Swipe(container) {
    // 获取第一个子节点
    var element = container.find(":first");
    var swipe = {};

    // li页面数量
    var slides = element.find(">");

    // 获取容器尺寸
    var width = container.width();
    var height = container.height();

    // 设置li页面总宽度
    element.css({
        width: (slides.length * width) + 'px',
        height: height + 'px'
    });

    // 设置每一个页面li的宽度
    $.each(slides, function(index) {
        var slide = slides.eq(index); // 获取到每一个li元素
        slide.css({
            width: width + 'px',
            height: height + 'px'
        });
    });

    // 监控完成与移动
    swipe.scrollTo = function(x, speed) {
        // 执行动画移动
        element.css({
            'transition-timing-function' : 'linear',
            'transition-duration'        : speed + 'ms',
            'transform'                  : 'translate3d(-' + x + 'px,0px,0px)'
        });
        return this;
    };

    return swipe;
}*/
