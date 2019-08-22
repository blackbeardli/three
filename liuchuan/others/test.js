'use strict';
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

console.log(json);
//{"name":"","email":"","password":"","gender":"m","city":"BJ"}
