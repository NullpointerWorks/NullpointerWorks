function resetRollOutAll()
{
	resetRollOut("btn");
}
function resetRollOut(id)
{
	var element = document.getElementById( id );
	element.style.height = "80px";
}
function setRollOut(id)
{
	var element = document.getElementById( id );
	element.style.height = "400px"; // causes a 0.1s transition to the new height due to css style
}
