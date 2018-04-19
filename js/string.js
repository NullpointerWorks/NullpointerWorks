
var String = new StringClass();

/*
 * String manipulation
 */
function StringClass(){}

/*
 * 
 */
StringClass.prototype.split = function(str, sep)
{
	return str.split(sep);
}

/*
 * 
 */
StringClass.prototype.compile = function(strarray,sep,index)
{
	// negative check
	if (index < 0)
		return "";
	
	// recursion check
	if (index >= strarray.length) 
		return "";
	
	// last element will not add a seperator string
	if (strarray.length == (index+1) )
		return strarray[index];
	
	// return the array
	return strarray[index] + sep + this.compile(strarray, sep, index+1);
}
