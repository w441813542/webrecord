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