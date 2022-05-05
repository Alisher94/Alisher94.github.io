(function () {
    "use strict";

    var runner = null;
    var animation;
    var animationType;
    var interval = 250;

    window.onload = function () {
        animation = document.getElementById("animation");
        animationType = document.getElementById("animation_type");
        var turboCheckbox = document.getElementById("turbo_checkbox");
        var animationSize = document.getElementById("animation_size");
        

        var btnStart = document.getElementById("start");
        var btnStop = document.getElementById("stop");
    

        animationType.onchange = function () {
            //startAnimation();
        };


        btnStart.onclick = function () {
            startAnimation();
        };

        btnStop.onclick = function () {
            clearInterval(runner);
            
        };

        turboCheckbox.onchange = function () {
            if (turboCheckbox.checked) {
                interval = 50;
            } else {
                interval = 250;
            }
            restartAnimation();
        };

        animationSize.onchange = function () {
            animation.style.fontSize = this.options[this.selectedIndex].value + "px";
            restartAnimation();
        };

       
    };

    function restartAnimation() {
        clearInterval(runner);
        startAnimation();
    }

    function startAnimation() {
        var btnStart = document.getElementById("start");
        var btnStop = document.getElementById("stop"); 
        runner = setInterval(animate, interval);
        
        btnStart.display = "none";
        btnStop.display = "block";
    }
    var i=0;
    function animate() {
        var animationArray = ANIMATIONS[animationType.value].split("=====\n");
        var len = animationArray.length;
        
        if (i < len) {
            animation.value = animationArray[i];
            i++;
        }else {
            i=0;
            animation.value = animationArray[0];

        }
    }

})();