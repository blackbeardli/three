function $getJSON(comAjax, f) {
    
}

$getJSON('http://example.com/ajax',function
    (data) {
    console.log("Io结果返回后执行");
    }
);
console.log("io结果直接执行后续代码");