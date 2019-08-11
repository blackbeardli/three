function prepareGallery(){
	if(!document.getElementById){
		return false;
	}
	if(!document.getElementsByTagName){
         return false;
	}
	if(!document.getElementById("imagegallery")){
	     return false;
	}
	   var gallery = document.getElementById("imagegallery");
	   var links = gallery.getElementsByTagName("a");
	   for(var i=0;i<links.length;i++){
            links[i].onclick=function(){
                  return showPic(this)?false:true;
            }
           // links[i].onkeypress = links[i].onclick;
	   }
}

function showPic(whichpic){
	if(!document.getElementById("kong")){
               return false;
	}
      var source = whichpic.getAttribute("href");
        var kong = document.getElementById("kong");
        if(kong.nodeName != "IMG"){
               return false;
        }
            kong.setAttribute("src",source);
        
     if(document.getElementById("description")){
            var text = whichpic.getAttribute("title");
            var description = document.getElementById("description");
            if(description.firstChild.nodeType == 3){
                  description.firstChild.nodeValue = text;
            }
            
        }
        	return true;
        
}

function countBodyChildren(){
	var body_element = document.getElementsByTagName("body")[0];
	alert(body_element.childNodes.length);
	//alert(body_element.nodeType);
	//alert(body_element);
	//idkeyizhijie diaoyong fangfa
	//alert(description.nodeValue);
	alert(description.firstChild.nodeValue);
     //console.log(body_element.childNodes);
}

function addLoadEvent(func){
       var oldonload = window.onload;
       if( typeof oldonload !="function"){
                 window.onload = func;
       }else{
           window.onload = function(){
           	     oldonload();
           	     func();
           }
       }
}
window.onload = countBodyChildren;
window.onload = prepareLinks;
