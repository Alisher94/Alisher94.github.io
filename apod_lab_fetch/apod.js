$(document).ready(function () {
    $("#view_button").on("click", getPicture);
});
    
function getPicture () {
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=" + $("#date").val())
    .then((response) => {
        return response.json();
    })
    .then(showPicture);
};
function showPicture(data) {
    $("#pic").attr("src", data.url);
};
    