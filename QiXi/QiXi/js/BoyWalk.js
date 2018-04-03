/**
 * 小孩走路
 *
 */

function BoyWalk() {
    var mainW = parseFloat($('.content-wrap').css('width'));
    var boyW = parseFloat($('.boyStyle').css('width'));
    var setTime;
    var actionW = function (step, t) {
        // clearT(setTime);
        setTime = setTimeout(function () {
            var left = parseFloat($('.boyStyle').css('left'));
            var boyL = Math.round(left);
            var L0 = Math.round(mainW / 3 * 0.75 - boyW / 2);
            var L1 = Math.round(mainW / 3 * 0.44);
            var L2;
            if (boyL == L0 && step == '1') {
                swipe('1');
            } else if (boyL == L1 && step == '2') {
                swipe('2');
            } else if (boyL == L2 && step == '3') {
                //
                // actionW(step, t);
            } else {
                $('.boyStyle').css('left', left + 1 + 'px');
                actionW(step, t);
            }
            // console.log(setTime)
        }, t);

    };

    var clearT = function () {
        clearInterval(setTime);
        // console.log(name + '===end');
    };

    var boyWalk = function (step, t, c) {
        /*if (!stop) {
            $('.boyStyle').addClass('slowWalk');
        } else {
            $('.boyStyle').removeClass('slowWalk');
        }*/
        $('.boyStyle').addClass('slowWalk');
        actionW(step, t);
    };

    var initBoyT = function () {
        /*   初始化男孩位置   */
        var boyH = parseFloat($('.boyStyle').css('height'));
        var middleH = parseFloat($('.screen-1-middle').css('height'));
        // var middleT = $('.screen-1-middle').outerHeight();
        var middleT = $('.screen-1-middle').position().top;
        var initT = middleT + middleH * 2 / 3 - boyH;
        $('.boyStyle').css('top', initT + 'px');
    };

    return {
        initBoyT: function () {
            initBoyT();
        },
        boyWalk: function (step, t) {
            boyWalk(step, t);
        },
        actionW: function (step, t) {
            actionW(step, t);
        },
        clearT: function (name) {
            clearT(name);
        }
    }

}

/*
function BoyWalk() {

    var container = $("#content");
    // 页面可视区域
    var visualWidth = container.width();
    var visualHeight = container.height();

    // 获取数据
    var getValue = function(className) {
        var $elem = $('' + className + '');
        // 走路的路线坐标
        return {
            height: $elem.height(),
            top: $elem.position().top
        };
    };
    // 路的Y轴
    var pathY = function() {
        var data = getValue('.a-background-middle');
        return data.top + data.height / 2;
    }();

    var $boy = $("#boy");
    var boyWidth = $boy.width();
    var boyHeight = $boy.height();

    // 设置下高度
    $boy.css({
        top: pathY - boyHeight + 25
    })

    // 暂停走路
    function pauseWalk() {
        $boy.addClass('pauseWalk');
    }

    // 恢复走路
    function restoreWalk() {
        $boy.removeClass('pauseWalk');
    }

    // css3的动作变化
    function slowWalk() {
        $boy.addClass('slowWalk');
    }

    // 用transition做运动
    function stratRun(options, runTime) {
        var dfdPlay = $.Deferred();
        // 恢复走路
        restoreWalk();
        // 运动的属性
        $boy.transition(
                options,
                runTime,
                'linear',
                function() {
                    dfdPlay.resolve(); // 动画完成
                });
        return dfdPlay;
    }

    // 开始走路
    function walkRun(time, dist, disY) {
        time = time || 3000;
        // 脚动作
        slowWalk();
        // 开始走路
        var d1 = stratRun({
            'left': dist + 'px',
            'top': disY ? disY : undefined
        }, time);
        return d1;
    }

    // 计算移动距离
    function calculateDist(direction, proportion) {
        return (direction == "x" ?
                visualWidth : visualHeight) * proportion;
    }

    return {
        // 开始走路
        walkTo: function(time, proportionX, proportionY) {
            var distX = calculateDist('x', proportionX)
            var distY = calculateDist('y', proportionY)
            return walkRun(time, distX, distY);
        },
        // 停止走路
        stopWalk: function() {
            pauseWalk();
        },
        setColoer:function(value){
            $boy.css('background-color',value)
        }
    }
}*/
