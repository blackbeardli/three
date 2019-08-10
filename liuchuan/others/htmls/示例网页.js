var index=0;
var tupianqu=document.getElementById("tupianqu");
var source=document.getElementsByTagName("img");
alert(source.length)

var timer=setInterval
(
    function(){
        index++;
        if (index>source.length) {
            index=0;}
        
        changeimg()
    },1000
)

function changeimg(){
    
    tupianqu.setAttribute("src",source[index].src);
}
