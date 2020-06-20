$(() => {
    $("#topLeft").on('input', () =>{
        console.log($("#topLeft").val());
    });
    $("#topRight").on('input', () =>{
        console.log($("#topRight").val());
    });
    $("#bottomRight").on('input', () =>{
        console.log($("#bottomRight").val());
    });
    $("#bottomLeft").on('input', () =>{
        console.log($("#bottomLeft").val());
    });
});