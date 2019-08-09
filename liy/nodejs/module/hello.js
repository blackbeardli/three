
function greet(name) {
    var s = 'hello';
    console.log(s+','+name+'!');
}
module.exports = {
    greet:greet,
};


function num(a,b){
    console.log(a+b);
}
module.exports = num;
function Num(a,b){
    console.log(a-b);
}
module.exports = Num;