console.log("hi bro");
$(".taskbar").click(function(e){
    if($(".startmenu").css("bottom")=="-655px"){
        $(".startmenu").css("bottom","50px");
    }
    else{
        $(".startmenu").css("bottom","-655px");

    }
})