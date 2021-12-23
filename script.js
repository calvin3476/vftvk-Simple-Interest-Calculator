function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function compute()
{
	var principal = document.getElementById("principal").value;
	var rate = document.getElementById("rate").value;

	var years = document.getElementById("years").value;
  
	var interest = principal * years * rate /100;

	var year = new Date().getFullYear()+parseInt(years);
	
	var amount=interest;
	
		
	if (principal <= 0) {
		alert("Enter a positive number")
		
		//document.getElementById("result").innerHTML="Enter a positive number";
		document.getElementById("result").innerHTML="";
		//document.getElementById("principal").focus();
	} 
	else
	{
    	
	//document.getElementById("result").innerHTML="test";
	    //document.getElementById("result").innerHTML=principal;
	  
		document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;at an interest rate of <mark>"+rate+"%</mark>\<br\>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You will receive an amount of <mark>"+amount+"</mark>,\<br\>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;in the year <mark>"+year+"</mark>\<br\>"
		document.getElementById("principal").focus();
	
	}
	document.getElementById("principal").focus();
}