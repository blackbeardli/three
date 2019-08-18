var json = [];
var $txt = $("#txt");
var $tat = $("#tat");

$("#save").on("click",function(){
    json.push({
       username:$txt.val(),
        fenshu:$tat.val()

    });
    $txt.val("");
    $tat.val("");
});
$("#show").on("click",function(){
    $.each(json,function(i){
        $("ul").append("<li>"+json[i].username+"</li>");
        $("ul").append("<li>"+json[i].fenshu+"</li>");

    });
});