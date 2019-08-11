//1.nodejs实现图形输出,根据输入的参数来决定打印出来的1.图案,2.填充内容以及3.图案的长宽4.是否为空心
// 正方形、三角形、菱形、回字、梯形
// 2.在任务一过程中会用到的所有官方定义函数需要自己通过流程控制以及循环来自定义不允许出现使用官方自带的字符串函数或者数组函数等
// 同时得完成固定的自定义函数，1.字符串长度，2.分割字符串，3.通过指定字符合并数组为字符串，4.字符串搜索，5,截取字符串

//1.字符串长度
function strlength(str) {
    var n;
    var i;
    var ii = 0;
    for (i = 0; ; i++) {
        if (str[i]) {
            ii++;
        } else {
            return ii;
        }
    }

}
//console.log(strlength("abc"));

//2.分割字符串 返回为一个数组
function spstr(str, str1) {
    var arr = new Array();
    var s = '';
    var start = 0;
    for (var i = 0; i <= strlength(str) - strlength(str1); i++) {
        for (var j = 0; j < strlength(str1); j++) {
            s += str[i + j];
        }
        if (s == str1) {
            s = substr(str, start, i);
            start = i + strlength(str1);
            // if (strlength(s) > 0) {
            arr[arr.length] = s;
            s = '';
        } else if (i == strlength(str) - strlength(str1)) {
            s = substr(str, start, strlength(str));
            arr[arr.length] = s;  //-1
            s = '';
        } else {
            s = '';
            continue;
        }
    }
    return arr;
}

console.log(spstr("abcdefg", 'a'));
//var str = "abcdefg";
//console.log(str.split('a'));

//3通过指定字符合并数组为字符串
function jstr(arr, str1) {
    var str2 = "";
    for (var i = 0; i < strlength(arr); i++) {
        if (i == strlength(arr) - 1) {
            str2 += arr[i];
            return str2;
        }
        str2 += arr[i] + str1;
    }

}

//console.log(jstr([1],'.'));

//4字符串搜索
function fstr(str, str1) {
    if (strlength(str1) > strlength(str)) return -1;
    for (var i = 0; i < strlength(str); i++) {
        if (str[i] == str1[0]) {
            if (strlength(str1) == 1) return i;
            for (var j = 1; j < strlength(str); j++) {
                if (str[i + j] != str1[j]) {
                    break;
                }


                return i;
            }
        }
    }
    return -1;
}

//console.log(fstr('abcdefg','a'));

//5.截取字符串
function substr(str, n, m) {
    var str3 = "";
    if (m >=n) {
        for (var i = 0; i < strlength(str); i++) {
            if (i >= n && i < m) {
                str3 += str[i];
            }
        }
        return str3;
    } else {
       return -1;
    }

}

//console.log(substr('qwertyasd',4,7));






