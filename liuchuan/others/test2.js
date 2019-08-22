'use strict'
json = {
    Name: $('#test-form>p>label>input[name=name]')[0].value,
    Email: $('#test-form>p>label>input[name=email]')[0].value,
    Password: $('#test-form input[type=password]')[0].value,
    Gender: $('#test-form input[name=gender]:checked')[0].value,
    City: $('#test-form option:selected')[0].value
};
json = JSON.stringify(json, null, '  ');

console.log(json); 
/*
{
    "Name": "",
    "Email": "",
    "Password": "",
    "Gender": "m",
    "City": "BJ"
}
*/
