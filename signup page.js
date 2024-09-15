function create()
{
	
	var fname=document.getElementById("fname").value;
	var lname=document.getElementById("lname").value;
	var usernamea=document.getElementById("usernamea").value;
	var passworda=document.getElementById("passworda").value;
	var apassworda=document.getElementById("apassworda").value;
	var number=document.getElementById("number").value;
	var DOB=document.getElementById("DOB").value;
	var questiona=document.getElementById("questiona").value;
	var answera=document.getElementById("answera").value;
	var gender=document.getElementById("gender").value;
	var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

	let user_records=new Array();
	user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
	if(user_records.some((v)=>{return v.usernamea==usernamea}))
	{
		alert("User with same email address already exists");
	}
	else if(user_records.some((v)=>{return v.number==number}))
	{
		alert("User with same phone number already exists");
	}
	else if (passworda!=apassworda)
	{
		alert("password does not match");
	}
	else if(fname=="")
	{
		alert("please enter your First Name");
	}
	else if(lname=="")
	{
		alert("please enter your Surname");
	}
	else if(usernamea=="" && usernamea!=reg)
	{
		alert("please enter your Email-ID");
	}
	else if(passworda=="")
	{
		alert("please enter Password");
	}

	else if(passworda.length<8)
	{
		alert("please enter 8 charecter alpha-numeric password with special charecters and uppercase aplhabets");
	}

	else if(number=="")
	{
		alert("please enter your Mobile number");
	}

	else if(number.length<10 || number.length>10)
	{
		alert("please enter 10 digit mobile number");
	}

	else if(number.charAt(0)!=9 && number.charAt(0)!=8 && number.charAt(0)!=7)
	{
		alert("please enter a valid phone number");
	}

	else if(DOB=="")
	{
		alert("please enter your Date Of Birth");
	}
	else if(questiona=="Security Question")
	{
		alert("please Select a Security Question");
	}
	else if(answera=="")
	{
		alert("please enter your Security Answer");
	}
	else if(gender=="")
	{
		alert("please Select Your Gender");
	}
	else if(usernamea.match(pattern))
	{
		user_records.push(
			{
				"fname":fname,
				"lname":lname,
				"usernamea":usernamea,
				"passworda":passworda,
				"apassworda":apassworda,
				"number":number,
				"DOB":DOB,
				"questiona":questiona,
				"answera":answera,
				"gender":gender,
			}
		)
	
		localStorage.setItem("users",JSON.stringify(user_records))
		window.location.href='login page.html'
	}
	else
	{
		alert("please enter a valid Email-ID");
	}
}
