//your JS code here. If required.
let angle = 0;
function rotatingLine(params) {
	angle += 2;
	document.getElementById("line").style.transform = `rotate(${angle}deg)`;
}

setInterval(rotatingLine, 20);