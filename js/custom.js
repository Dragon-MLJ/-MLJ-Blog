//检查是否开启FPS
if (localStorage.getItem('FPSToggle') == 'true') {
    bieyinan_FPS = true;
    document.querySelector("#fps-group").classList.add("show");
    document.querySelector("#consoleFPS").classList.add("on");
} else {
    bieyinan_FPS = false;
    document.querySelector("#fps-group").classList.remove("show");
    document.querySelector("#consoleFPS").classList.remove("on");
}
var showFPS = (function () {
    var requestAnimationFrame =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
    var e, pe, pid, fps, last, offset, step, appendFps;

    fps = 0;
    last = Date.now();
    step = function () {
        offset = Date.now() - last;
        fps += 1;
        if (offset >= 1000) {
            last += offset;
            appendFps(fps);
            fps = 0;
        }
        requestAnimationFrame(step);
    };
    appendFps = function (fps) {
        document.querySelector("#fps").innerHTML=fps
    };
    step();
})();