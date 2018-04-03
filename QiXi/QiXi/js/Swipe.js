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
            BoyWalk.boyWalk('2',10);
        },3000);
    } else if (page == '2') {
        /*$('.content-wrap').animate({'left':contentWrapW},3000,'linear');
        $('.boyStyle').animate({'left':'5%'},3000,'linear');
        setTimeout(function () {
            BoyWalk.boyWalk('2',10);
        },3000);*/
        intoShop();
    }
};

var setTime1;
var boy = document.getElementById('boyStyle');
//商店部分
var fn1 = function () {
    boy.style.opacity = '1';
    boy.style.transform = 'scale(1)';
    boy.style.transitionTimingFunction = 'linear';
    boy.style.transitionDuration = '1s';
    boy.style.transitionDelay = '2s';
    $('.boyStyle').addClass('slowWalkFlowers');
    // BoyWalk.actionW('3', 10);
    closeDoor();
    /*var setTime2 = setTimeout(function () {

    }, 1000);*/
};

var intoShop = function () {
    openDoor();
    boy.style.opacity = '0';
    boy.style.transform = 'scale(0.5,0.5)';
    boy.style.transitionTimingFunction = 'linear';
    boy.style.transitionDuration = '1s';
    boy.style.transitionDelay = '1s';
    fn1();
    // setTime1 = setTimeout(fn1, 1000)
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
