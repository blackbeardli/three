$(function () {

    $("#div1").ajaxStart(function () {
        console.log(11);
        $(this).html("tst");
    });
    $("#div1").ajaxStop(function () {
        console.log(22);
        alert("sss");
    });
    $("#btnok").click(function () {
        $.ajax({
            url: "ajaxstart1.html",
            dataType: "text",
            success: function (data) {
                $("ul").html(data);
                // console.log(data);
            }
        });
    });
});