$(document).ready(function () {
    $("#view_button").on("click", getPicture);
});
    
function getPicture () {
    $.get("https://api.nasa.gov/planetary/apod", 
        {
            api_key:  "DEMO_KEY",
            date:  $("#date").val()
        }
    )
    .done(showPicture)
    .fail(noPicture);
};
function showPicture(data) {
    $("#pic").attr("src", data.url);
};
function noPicture(error) {
    alert(error.responseText);
};
    