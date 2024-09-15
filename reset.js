function reset() 
{
	
	var pass=document.getElementById("pass").value;
	var passa=document.getElementById("passa").value;

	let user_records=new Array();
	user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

	let auserna=new Array();
	auserna=JSON.parse(localStorage.getItem("auser"))?JSON.parse(localStorage.getItem("auser")):[]
	let ausername = auserna.ausername;
	let result3 = auserna.result

	if(pass=="")
	{
		alert("please enter your new password");
	}
	else if(pass!=passa)
	{
		alert("password does not match");
	}
	else
	{
		alert("password changed successfully");
		user_records[result3].passworda=pass;
		user_records[result3].apassworda=passa;
		localStorage.setItem("users",JSON.stringify(user_records))
		window.location.href='login page.html'
	}	
}