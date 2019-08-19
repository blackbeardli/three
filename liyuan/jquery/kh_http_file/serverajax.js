$(function(){
// var json =[];
// var $username = $('#username');
// var $coment1 = $('#coment1');
// $('#button1').on('click',function(){
//    json.push({
//         username:$username.val(),
//          coment:$coment1.val()
//    });
//    $username.val("");
//    $coment1.val("");
//    $.each(json,function(i){
//         $('ul').append("<li>"+json[i].username+"</li>")
//         $('ul').append("<li>"+json[i].coment+"</li>")
// });
   $.ajax({
       url: "http://localhost:8080/",
       success: function () {
           var json = [];
           var $username = $('#username');
           var $coment1 = $('#coment1');
           $('#button1').on('click', function () {
               json.push({
                   username: $username.val(),
                   coment: $coment1.val()
               });
               $username.val("");
               $coment1.val("");

           $.each(json, function (i) {
               $('ul').append("<li>" + json[i].username + "</li>");
               $('ul').append("<li>" + json[i].coment + "</li>");
           });
           });
       }
   });
});