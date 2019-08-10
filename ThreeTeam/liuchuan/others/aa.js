'use strict';
var print=function(mark2,aaa){
    let dd="";
    for (let i = 0; i < aaa; i++) {     
        dd+=mark2;        
    };
    // console.log(dd)
    return dd;};
var kongxin=function(str1,mark1){
    var a=str1.indexOf(mark1);
    var b=str1.lastIndexOf(mark1);
    var space=print(" ",b-a);
    // var cc=str1.slice(0,a+1)+space.substring(0,space.length-1)+str1.slice(b,str1.length);
    // console.log(cc)
    return str1.slice(0,a+1)+space.substring(0,space.length-1)+str1.slice(b,str1.length);
    };
// var h=10;
// var l=10;
//空心矩形1
var juxing1=function(l,h,mark){
    for (let i = 0; i < h; i++) {
        if (i==0||i==h-1) {
            console.log(print(" "+mark,l)) ;
        } else {
            console.log(kongxin(print(" "+mark,l),mark));
        };};
    };
//实心矩形2
var juxing2=function(l,h,mark){
    for (let i = 0; i < h; i++) {
        console.log(print(" "+mark,l));
        };};
//空心梯形3
var tixing1=function(l,h,mark){
    for (let i = 0; i < h; i++) {
        var spc=print(" ",h-i)
        // console.log(spc+print(" *",a+i))
        if (i==0||i==h-1) {
            console.log(spc+print((" "+mark),l+i)) ;
        } else {
            console.log(spc+kongxin(print(" "+mark,l+i),mark));
        };  
    };}
//实心梯形4
var tixing2=function(l,h,mark){
    for (let i = 0; i < h; i++) {
        var spc=print(" ",h-i)
        // console.log(spc+print(" *",a+i))
        console.log(spc+print(" "+mark,l+i)) ;
          
    };}
//回字型5
var huizi=function(l,h,n,mark){
    var str="";
    for (let row = 0; row < h; row++) {
        for (let col = 0; col < l; col++) {
            if (row==0||col==0||row==h-1||col==l-1) {
                str+=(" "+mark);
                
            }else if(row>n && row<h-1-n && col>n && col<l-1-n) {    
                // str+=" *";
                if (row>n+1 && row<h-1-n-1 && col>n+1 && col<l-1-n-1) {
                    str+="  ";
                } else {
                    str+=(" "+mark);
                }
            } else {
                str+="  ";
            }   
        }
        str+="\n";    
    };
    console.log(str);
};

//空心菱形6
var lingxing1=function(l,h,n,mark){
    for (let i = 0; i < h; i++) {
        var spc=print(" ",h-i)
        // console.log(spc+print(" *",l+i))
        // if (i==0||i==h-1) {
        if (i==0) {
            console.log(spc+print((" "+mark),l+i)) ;
        } else {
            console.log(spc+kongxin(print((" "+mark),l+i),mark));
        };  
    };
    for (let i = h; i >=0; i--) {
        var spc=print(" ",h-i)
        // console.log(spc+print(" *",l+i))
        if (i==0) {
            console.log(spc+print((" "+mark),l+i)) ;
        } else {
            console.log(spc+kongxin(print((" "+mark),l+i),mark));
        };  
    };}

//实心菱形7
var lingxing2=function(l,h,n,mark){
    for (let i = 0; i < h; i++) {
        var spc=print(" ",h-i)
        // console.log(spc+print(" *",l+i))
        // if (i==0||i==h-1) {
            console.log(spc+print((" "+mark),l+i)) ; 
    };
    for (let i = h; i >=0; i--) {
        var spc=print(" ",h-i)
        // console.log(spc+print(" *",l+i))
            console.log(spc+print((" "+mark),l+i)) ; 
    };}


var main=function(xingzhuang,l,h,n,mark){
    if (xingzhuang==1) {//空心矩形1
        juxing1(l,h,mark);
    } else if(xingzhuang==2){//实心矩形2
        juxing2(l,h,mark);
    }else if(xingzhuang==3){//空心梯形3
        tixing1(l,h,mark);
    }else if(xingzhuang==4){//实心梯形4
        tixing2(l,h,mark)
    }else if(xingzhuang==5){//回字型5
        huizi(l,h,n,mark);
    }else if(xingzhuang==6){//空心菱形6
        lingxing1(l,h,n,mark);
    }else if(xingzhuang==7){//实心菱形7
        lingxing2(l,h,n,mark);};
};


//空心矩形1
//实心矩形2
//空心梯形3
//实心梯形4
//回字型5
//空心菱形6
//实心菱形7
var xingzhuang=7,
    l=1,//长，或梯形的上底,三角形将l设置为1
    h=7,//高
    n=1,
    mark="*";//回字形内外圈间隔
main(xingzhuang,l,h,n,mark);