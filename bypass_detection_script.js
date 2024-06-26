// 找到保存按钮并点击
var saveButton = document.getElementById('btn_xspj_bc');
if (saveButton) {
    // 创建一个随机延迟函数
    function randomDelay(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // 模拟鼠标移动到按钮上
    function simulateMouseMove(element) {
        var boundingRect = element.getBoundingClientRect();
        var mouseMoveEvent = new MouseEvent('mousemove', {
            view: window,
            bubbles: true,
            cancelable: true,
            clientX: boundingRect.left + (boundingRect.width / 2) + randomDelay(-10, 10),
            clientY: boundingRect.top + (boundingRect.height / 2) + randomDelay(-10, 10)
        });

        document.dispatchEvent(mouseMoveEvent);
    }

    // 创建一个鼠标点击事件
    function simulateClick(element) {
        var boundingRect = element.getBoundingClientRect();
        var mouseDownEvent = new MouseEvent('mousedown', {
            view: window,
            bubbles: true,
            cancelable: true,
            clientX: boundingRect.left + (boundingRect.width / 2) + randomDelay(-10, 10),
            clientY: boundingRect.top + (boundingRect.height / 2) + randomDelay(-10, 10)
        });
        var mouseUpEvent = new MouseEvent('mouseup', {
            view: window,
            bubbles: true,
            cancelable: true,
            clientX: boundingRect.left + (boundingRect.width / 2) + randomDelay(-10, 10),
            clientY: boundingRect.top + (boundingRect.height / 2) + randomDelay(-10, 10)
        });
        var clickEvent = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true,
            clientX: boundingRect.left + (boundingRect.width / 2) + randomDelay(-10, 10),
            clientY: boundingRect.top + (boundingRect.height / 2) + randomDelay(-10, 10)
        });

        // 分发鼠标按下事件
        element.dispatchEvent(mouseDownEvent);
        
        // 设置随机延迟再分发鼠标抬起和点击事件
        setTimeout(function() {
            element.dispatchEvent(mouseUpEvent);
            element.dispatchEvent(clickEvent);
        }, randomDelay(100, 500)); // 延迟时间范围为100到500毫秒
    }

    // 设置随机延迟再执行鼠标移动和点击模拟
    setTimeout(function() {
        simulateMouseMove(saveButton);
        setTimeout(function() {
            simulateClick(saveButton);
        }, randomDelay(100, 500)); // 再次延迟100到500毫秒
    }, randomDelay(500, 1500)); // 初始延迟时间范围为500到1500毫秒
}
