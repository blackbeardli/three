'use strict';
var greet=require('./hello');
// var cc = require("./hello");
var s='Micheal';
// console.log(s)
// greet(s);
// // var cc=greet.variable
// console.log(cc)
console.log(greet);
var cc=greet.s
console.log(cc)

if (typeof(global) === 'undefined') {
    console.log('node.js');
} else {
    console.log('browser');
}