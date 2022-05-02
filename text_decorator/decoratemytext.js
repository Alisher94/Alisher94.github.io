
var timer = null;


window.onload = function()
{
    document.getElementById('bigger_btn').onclick = decorate;
    document.getElementById('checkbox_bling').onchange = addBling;

	document.getElementById('igpay').onclick = igpay;
	document.getElementById('malkovich').onclick = malkovich;
};



function decorate() {
	alert("Hello, world!");
    var textOfArea = document.getElementById("text_area");
	var fontSizeOfArea = parseInt(textOfArea.style.fontSize);

	if (isNaN(fontSizeOfArea)){
		fontSizeOfArea = 12;
	}
	textOfArea.style.fontSize = (fontSizeOfArea +2) +"pt";
}

function addBling() {
    if (timer == null) {
        timer = setInterval(decorate, 500);
    } else {
        clearInterval(timer);
        timer = null;
    }

    var checkbox_bling = document.getElementById('checkbox_bling');
	var textOfArea = document.getElementById('text_area');

	if (checkbox_bling.checked = true)
	{
		textOfArea.style.color =  "green";
		textOfArea.style.textDecoration = "underline";
		document.body.style.backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
	} else {
	    document.getElementById('checkbox_bling').checked = false;
	    textOfArea.style.color = "#000";
	    textOfArea.style.textDecoration = "none";
	    document.body.style.backgroundImage = "";
	}
}

function igpay(){
	var str = document.getElementById('text_area').innerHTML;
	str = str.replace(/\b(\w)(\w+)\b/g, function(a,b,c) {
        if (/[A-Z]/.test(b)) { 
            c = c.replace(/^\w/, function(x) { return x.toUpperCase() });
        }
        return c + b.toLowerCase() + 'ay';        
    })
	document.getElementById('text_area').innerHTML = str;
   
}

function malkovich(){
	var str = document.getElementById('text_area').innerHTML;
    arr = str.split(' ');
    
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].length >= 5) {
			arr[i] = 'Malkovitch';
		}
	}
	document.getElementById('text_area').innerHTML = arr.join(' ');

}
