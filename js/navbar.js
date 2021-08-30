function resetRollOutAll()
{
	resetRollOut("blue");
}
function resetRollOut(id)
{
	var element = document.getElementById( id );
	element.style.height = "0px";
}
function setRollOut(id)
{
	resetRollOutAll();
	var element = document.getElementById( id );
	element.style.height = "300px"; // uses css transition effect
}
