//步骤形组件
function Step(obj) {
    var arr = [];
    if (typeof obj != Array) {
        Array.prototype.slice.call(obj)
    }
    for (var i = 0; i < obj.length; i++) {
        if ($(obj[i]).is("input") || $(obj[i]).is("select")) {
            arr.push(obj[i])
        }
    }
    for (var i = 0; i < arr.length; i++) {
        (function () {  //这是一个闭包
            var index = i; //keep住变量i
            if(index!=0){
                $(arr[index]).attr("disabled",true)
            }
            if ($(arr[index]).is("input")) {
                $(arr[i]).unbind().bind("blur", function () {
                    var val = $(this).val();
                    if (val && index < arr.length - 1) {
                        $(arr[index + 1]).attr("disabled", false)
                    }
                })
            } else if ($(arr[index]).is("select")) {
                $(arr[i]).unbind().bind("change", function () {
                    var val = $(this).val();
                    if (val && index < arr.length - 1) {
                        $(arr[index + 1]).attr("disabled", false)
                    }
                })
            }
            
        })(i)
    }
}