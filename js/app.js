$(() => {
    $("#topLeft").on('input', function(){
        let tl = `${$("#topLeft").val()}px`;
        $(".br-style").css({'border-top-left-radius' : tl});
        let value = $("#style-me").css("border-top-left-radius");
        $("#btl-value").text(`${value}`);
    });
    $("#topRight").on('input', () =>{
        let tr = `${$("#topRight").val()}px`;
        $(".br-style").css({'border-top-right-radius' : tr});
        let value = $("#style-me").css("border-top-right-radius");
        $("#btr-value").text(`${value}`);
    });
    $("#bottomRight").on('input', () =>{
        let br = `${$("#bottomRight").val()}px`;
        $(".br-style").css({'border-bottom-right-radius' : br});
        let value = $("#style-me").css("border-bottom-right-radius");
        $("#bbr-value").text(`${value}`);
    });
    $("#bottomLeft").on('input', () =>{
        let bl = `${$("#bottomLeft").val()}px`;
        $(".br-style").css({'border-bottom-left-radius' : bl});
        let value = $("#style-me").css("border-bottom-left-radius");
        $("#bbl-value").text(`${value}`);
    });
    
    $("#copy-text").click(() =>{
        copyToClipboard("#br-details");
    });
});

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }