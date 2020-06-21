$(() => {
    $("#topLeft").on('input', function(){
        let tl = `${$("#topLeft").val()}px`;
        $(".br-top-left").css({'border-top-left-radius' : tl});
        let value = $("#style-me").css("border-top-left-radius");
    });
    $("#topRight").on('input', () =>{
        let tr = `${$("#topRight").val()}px`;
        $(".br-top-right").css({'border-top-right-radius' : tr});
        let value = $("#style-me").css("border-top-left-radius");
    });
    $("#bottomRight").on('input', () =>{
        let br = `${$("#bottomRight").val()}px`;
        $(".br-bottom-right").css({'border-bottom-right-radius' : br});
        let value = $("#style-me").css("border-top-left-radius");
    });
    $("#bottomLeft").on('input', () =>{
        let bl = `${$("#bottomLeft").val()}px`;
        $(".br-bottom-left").css({'border-bottom-left-radius' : bl});
        let value = $("#style-me").css("border-top-left-radius");
    });
});