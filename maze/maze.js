(function maze(){

    $(document).ready(function() {
        $(".boundary").mouseover(boundarycross);
        $("#end").mouseover(winner);
        $("#start").click(reset);
    });

    var crossWithBorder = false;
    var  boundarycross = () => {
        $(".boundary").addClass("youlose");
        crossWithBorder = true;
    };

    var winner = () => {
            if(crossWithBorder) {
                $("#status").text("you lose"); 
            }else{
                $("#status").text("you win");
            }
    };

    var reset = () => {
        $(".boundary").removeClass("youlose");
        $("#status").text("");
        crossWithBorder = false;
    };
})();