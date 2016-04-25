$(document).ready(function () {
    $("#title").hide();
    $("body").on("click","#with_title",function () {        
        $("#title").show();
    });
    $("body").on("click","#without_title",function () {        
        $("#title").hide();
    });
});


