//1.nodejs实现图形输出,根据输入的参数来决定打印出来的1.图案,2.填充内容以及3.图案的长宽4.是否为空心
// 正方形、三角形、菱形、回字、梯形 

//正方形
//shi1
//kong2
function square (t,h,c) {
    var t;//形状
    var h;//宽
    var c;//填充物
    var str = "";
    if (t == 1) {
        for (var i = 0; i < h; i++) {
            for (var j = 0; j < h; j++) {
                str += c + "";
            }
            str += '\n';
        }
        console.log(str);

    } else {
        for (var i = 0; i < h; i++) {
            for (var j = 0; j < h; j++) {
                if (i == 1 || i == 4 || j == 1 || j == 4) {
                    str += c + "";
                }
                    else str += " ";
            }
            str += "\n";
        }
        console.log(str);
    }
}
//square(1,4,'#');
square(0,4,'#');
console.log("-----------------------------------");
