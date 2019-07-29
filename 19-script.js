function resize() {
	document.getElementById('size').style.fontSize= '60px';
	setTimeout(function() {
		document.getElementById('size').style.fontSize= '16px';
		alert('Time out, size will return to default');
	}, 5000);
}

function changeColor() {
	document.getElementById('color').style.color='orange';
}

function changeBackground() {
	document.getElementById('background').style.backgroundColor='orange';
}

function show() {
	document.getElementById('show').innerHTML = 'Content show';
}