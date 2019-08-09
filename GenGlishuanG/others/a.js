'use strict';
var print=function(mark,aaa){
    let dd="";
    for (let i = 0; i < aaa; i++) {     
        dd+=mark;        
    };
    // console.log(dd)
    return dd;};
var kongxin=function(str1,mark){
    var a=str1.indexOf(mark);
    var b=str1.lastIndexOf(mark);
    var space=print(" ",b-a);
    return str1.slice(0,a+1)+space.substring(0,space.length-1)+str1.slice(b,str1.length);
}
// var h=10;
// var l=10;
// // for (let i = 0; i < h; i++) {
// //     var cc=print(" *",l);
// //     if (i!=0 && i!=h-1) {
// //         console.log(kongxin(cc,"*"));
// //     };   
    
// // };
// for (let i = 0; i < h; i++) {
//     if (i==0||i==h-1) {
//         console.log(print(" *",l)) ;
//     } else {
//         console.log(kongxin(print(" *",l),"*"));
//     };  
// };

//梯形
// var a=1;
// var h=3;



// for (let i = 0; i < h; i++) {
//     var spc=print(" ",h-i)
//     // console.log(spc+print(" *",a+i))
//     if (i==0||i==h-1) {
//         console.log(spc+print(" *",a+i)) ;
//     } else {
//         console.log(spc+kongxin(print(" *",a+i),"*"));
//     };  
// };

//三角形

// 回字Row, column行，列
// var h=40;
// var l=30;
// var str="";
// var n=5;

for (let row = 0; row < h; row++) {
    for (let col = 0; col < l; col++) {
        // if (row==0||col==0) {
        //     str+=" *";
        // if (row==0) {
        //     str+=" *";
        // }else if(col==0){ 
        //     str+=" *";
        // }else if(col==l-1){
        //     str+=" *\n";
        // }else if(row==h-1){
        //     str+=" *"
        // }else{
        //     str+="  "
        if (row==0||col==0||row==h-1||col==l-1) {
            str+=" *";
            // if (row>=2&&row<=h-2 && col>=2&&col<=l-2) {
            //     str=" *";
            // } else {
            //     str="  ";
            // }
        }else if(row>n && row<h-1-n && col>n && col<l-1-n) {    
            // str+=" *";
            if (row>n+1 && row<h-1-n-1 && col>n+1 && col<l-1-n-1) {
                str+="  ";
            } else {
                str+=" *";
            }
        } else {
            str+="  ";
        }   
    }
    str+="\n";    
};
// console.log(str);


var h=4;
var l=1;
for (let i = 0; i < h; i++) {
    var spc=print(" ",h-i)
    // console.log(spc+print(" *",l+i))
    // if (i==0||i==h-1) {
    if (i==0) {
        console.log(spc+print(" *",l+i)) ;
    } else {
        console.log(spc+kongxin(print(" *",l+i),"*"));
    };  
};
for (let i = h; i >=0; i--) {
    var spc=print(" ",h-i)
    // console.log(spc+print(" *",l+i))
    if (i==0) {
        console.log(spc+print(" *",l+i)) ;
    } else {
        console.log(spc+kongxin(print(" *",l+i),"*"));
    };  
};


for (let i = 0; i < h; i++) {
    var spc=print(" ",h-i)
    // console.log(spc+print(" *",l+i))
    // if (i==0||i==h-1) {
        console.log(spc+print(" *",l+i)) ; 
};
for (let i = h; i >=0; i--) {
    var spc=print(" ",h-i)
    // console.log(spc+print(" *",l+i))
        console.log(spc+print(" *",l+i)) ; 
};

