// 找到所有的单选按钮和复选框
var elements = document.querySelectorAll('input[type="radio"], input[type="checkbox"]');

// 遍历每一个元素
elements.forEach(function(element) {
    // 找到单选按钮或复选框的父节点（通常是td或label）
    var parent = element.parentNode;
    
    // 如果父节点包含“完全同意”文字，就点击该单选按钮或复选框
    if (parent.textContent.trim().includes("完全同意")) {
        element.click();
    }
});
// 找到评价与建议的文本框并输入指定的文字
var textBox = document.querySelector('textarea');
if (textBox) {
    textBox.value = "老师人很不错,教学认真,对学生很好,耐心解答学生的疑问";
}
