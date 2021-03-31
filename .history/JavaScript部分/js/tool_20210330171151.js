var timer;
function move(obj, direction, target, speed, fun) {

    clearInterval(timer);
    var current = parseInt(getStyle(box1, "left"));

    //速度判断符号
    if (current > target) {
        speed = -speed;
    }
    timer = setInterval(() => {
        var oldValue = parseInt(getStyle(box1, "left"));
        newValue = oldValue + speed;
        if (speed < 0 && newValue < target || (speed > 0 && newValue > target) {
            newValue = 0;
        }

        obj.style.left = newValue + "px";

        if (newValue == target) {
            clearInterval(timer)
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