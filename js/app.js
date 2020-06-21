$(() => {
    // set for top left radius
    setBorderRadius("#topLeft", ".br-style", "#style-me", "border-top-left-radius", "#btl-value");
    // set for top right radius
    setBorderRadius("#topRight", ".br-style", "#style-me", "border-top-right-radius", "#btr-value");
    // set for bottom right radius
    setBorderRadius("#bottomRight", ".br-style", "#style-me", "border-bottom-right-radius", "#bbr-value");
    // set for bottom left radius
    setBorderRadius("#bottomLeft", ".br-style", "#style-me", "border-bottom-left-radius", "#bbl-value");

    $("#copy-text").click(() =>{
        copyToClipboard("#br-details");
    });
});

setBorderRadius = (selector, styleClassName, styledDiv, cssProperty, textOuptut) => {
    $(selector).on('input', () =>{
        let inputValue = `${$(selector).val()}px`;
        $(styleClassName).css(`${cssProperty}`, inputValue);
        let value = $(styledDiv).css(`${cssProperty}`);
        $(textOuptut).text(`${value}`);
    });
}

copyToClipboard = (element) => {
    let $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}