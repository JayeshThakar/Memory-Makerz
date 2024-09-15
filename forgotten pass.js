function forgot() 
{
	var ausername=document.getElementById("ausername").value;
	var DOBa=document.getElementById("DOBa").value;
	var aquestiona=document.getElementById("aquestiona").value;
	var aanswera=document.getElementById("aanswera").value;

	let user_records=new Array();
	user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

	if(ausername=="")
	{
		alert("please enter Email-ID");
	}
	else if(DOBa=="")
	{
		alert("please enter your Date Of Birth");
	}
	else if(aquestiona=="Security Question")
	{
		alert("please Select your security question");
	}
	else if(aanswera=="")
	{
		alert("please enter your answer");
	}
	else
	{
		let result=user_records.findIndex((v)=>{return v.usernamea==ausername});
		let result1=user_records.findIndex((v)=>{return v.number==ausername});

		if(result==-1 && result1==-1)
		{
			alert("user not found");
		}
		else if(result!=-1)
		{
			if(user_records[result].usernamea==ausername && user_records[result].DOB==DOBa && user_records[result].questiona==aquestiona && user_records[result].answera==aanswera)
			{
				let auserna=new Array();
				auserna=JSON.parse(localStorage.getItem("auser"))?JSON.parse(localStorage.getItem("auser")):[]
				auserna={"ausername":ausername,
						 "result":result};
		
				localStorage.setItem("auser",JSON.stringify(auserna))
				window.location.href='reset.html'
			}
			else if(user_records.some((v)=>{return v.usernamea==ausername}))
			{
				alert("authentication failed");
			}
		}
		else if(result1!=-1)
		{
			if(user_records[result1].number==ausername && user_records[result1].DOB==DOBa && user_records[result1].questiona==aquestiona && user_records[result1].answera==aanswera)
			{
				let auserna=new Array();
				auserna=JSON.parse(localStorage.getItem("auser"))?JSON.parse(localStorage.getItem("auser")):[]
				auserna={"ausername":ausername,
						 "result":result1};
		
				localStorage.setItem("auser",JSON.stringify(auserna))
				window.location.href='reset.html'
			}
			else if(user_records.some((v)=>{return v.number==ausername}))
			{
				alert("authentication failed");
			}
		}
		else
		{
			alert("user not found");
		}
	}	
}