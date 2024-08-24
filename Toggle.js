var toggled = false;

var circle = $("#circle");

$("#toggle").click(function () {

    $("h2").toggleClass("color-white");
    $("body").toggleClass("bck-color-black");
   
    if (!toggled) {
        circle.css("margin-left", "70px");
        toggled = true;
    } else {
        circle.css("margin-left", "8px");
        toggled = false;
    }

})