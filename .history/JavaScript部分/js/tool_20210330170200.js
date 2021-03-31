function move(derection) {
    //默认为右边
    var newValue = 0;
    var derectionInt = 1;
    var broundary = 800;
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
    if (derection == "left") {
        derectionInt = -1
        broundary = 0;
    } else {
        derectionInt = 1;
        broundary = 800;
    }
    timer = setInterval(() => {
        newValue = parseInt(getStyle(box1, "left"));
        if (derection == "left" ? newValue > broundary : newValue < broundary) {
            box1.style.left = parseInt(getStyle(box1, "left")) + derectionInt;
        } else {
            clearInterval(timer);
        }
    }, 5);
}
var timer;
function move(obj,direction,) {
    //默认为右边
    var newValue = 0;
    var derectionInt = 1;
    var broundary = 800;
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
    if (derection == "left") {
        derectionInt = -1
        broundary = 0;
    } else {
        derectionInt = 1;
        broundary = 800;
    }
    timer = setInterval(() => {
        newValue = parseInt(getStyle(box1, "left"));
        if (derection == "left" ? newValue > broundary : newValue < broundary) {
            box1.style.left = parseInt(getStyle(box1, "left")) + derectionInt;
        } else {
            clearInterval(timer);
        }
    }, 5);
}

/**
 * 定义一个函数，用来获取指定元素的当前的样式
 *  参数：
 *    1.要获取样式的元素
 *    2.要获取的样式名
 */
function getStyle(obj, name) {
    if (window.getComputedStyle) {
        return getComputedStyle(obj, null)[name];
    } else {
        return obj.currentStyle[name];
    }
}