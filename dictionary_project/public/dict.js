$(document).ready(function(){
    
    $("#submit").on("click", buildContent)
    //$("#search").on("keydown", buildContent)
})
var myHeaders = new Headers();
myHeaders.append('pragma', 'no-cache');
myHeaders.append('cache-control', 'no-cache');

var myInit = {
  method: 'GET',
  headers: myHeaders,
};

function buildContent () {
    fetch("/getData?word=" + $("#search").val(), myInit)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        var str = "";
        var c = 1;
        for(var item of data){
            str += "<p><b>" + c + "(" + item.wordtype + ") :: </b>" + item.definition + "</p><hr>"
            c++
        }
        if(str.length > 0){
            $("#result").html(str)
        }else{
            $("#result").html("<h3>Not found...</h3>")
        }
    });
};