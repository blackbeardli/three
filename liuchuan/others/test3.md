# 2019年8月22日

## 表单html

<!-- 对于下面的表单： -->

    <form id="test-form" action="#0" onsubmit="return false;">
        <p><label>Name: <input name="name"></label></p>
        <p><label>Email: <input name="email"></label></p>
        <p><label>Password: <input name="password" type="password"></label></p>
        <p>Gender: 
            <label><input name="gender" type="radio" value="m" checked> Male</label>
            <label><input name="gender" type="radio" value="f"> Female</label>
        </p>
        <p><label>City: <select name="city">
            <option value="BJ" selected>Beijing</option>
            <option value="SH">Shanghai</option>
            <option value="CD">Chengdu</option>
            <option value="XM">Xiamen</option>
        </select></label></p>
        <p><button type="submit">Submit</button></p>
    </form>
    <!-- 输入值后，用jQuery获取表单的JSON字符串，key和value分别对应每个输入的name和相应的value，
        例如：{"name":"Michael","email":...} -->


## 直接构造一个JSON

    'use strict'
    json = {
        Name: $('#test-form>p>label>input[name=name]')[0].value,
        Email: $('#test-form>p>label>input[name=email]')[0].value,
        Password: $('#test-form input[type=password]')[0].value,
        Gender: $('#test-form input[name=gender]:checked')[0].value,
        City: $('#test-form option:selected')[0].value
    };
    json = JSON.stringify(json, null, '  ');

    //console.log(json); 
    /*
    {
        "Name": "",
        "Email": "",
        "Password": "",
        "Gender": "m",
        "City": "BJ"
    }
    */

## 遍历生成一个JSON

    var obj = {};
    $("#test-form :input").filter(function () {
        if (this.type == 'submit' || this.type == 'radio' && !this.checked) {
            return false
        } else {
            return true
        }
    }).map(function () {
        return obj[this.name] = this.value
    });
    json = JSON.stringify(obj);

    //console.log(json);
    //{"name":"","email":"","password":"","gender":"m","city":"BJ"}
