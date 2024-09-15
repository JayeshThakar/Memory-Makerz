function validate() 
{
	var username=document.getElementById("username").value;
	var password=document.getElementById("password").value;

	let user_records=new Array();
	user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
	if(username=="")
	{
		alert("please enter Email-ID");
	}
	else if(password=="")
	{
		alert("please enter password");
	}
	else
	{
		let result=user_records.findIndex((v)=>{return v.usernamea==username});
		let result1=user_records.findIndex((v)=>{return v.number==username});

		if(result==-1 && result1==-1)
		{
			alert("user not found");
		}
		else if(result!=-1)
		{
			if(user_records[result].usernamea==username && user_records[result].passworda==password)
			{
				alert("loged in");
			}
			else if(user_records.some((v)=>{return v.usernamea==username}))
			{
				alert("wrong password");
			}
		}
		else if(result1!=-1)
		{
			if(user_records[result1].number==username && user_records[result1].passworda==password)
			{
				alert("loged in");
			}
			else if(user_records.some((v)=>{return v.number==username}))
			{
				alert("wrong password");
			}
		}
	}
}