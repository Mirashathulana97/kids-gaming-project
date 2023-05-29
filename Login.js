
const lngbtn = document.getElementById('loginMain');
const snbtn = document.getElementById('signMain')
const divB = document.getElementById('divBoth');

const divlog = document.getElementById("divLogin");
const divSig = document.getElementById("divSignUp");

const backbtn = document.getElementById("backbutton");



lngbtn.addEventListener('click',()=>{
    if(divB.style.display === 'none'){
        divB.style.display = 'block';
    }
    else{
        divB.style.display = 'none';
        divlog.style.display = 'block';
    

    }
})
snbtn.addEventListener('click',()=>{
    if(divB.style.display === 'none'){
        divB.style.display = 'block';
    }
    else{
        divB.style.display = 'none';
        divSig.style.display = 'block';

    }
})
backbtn.addEventListener('click',()=>{
    divB.style.display = 'block';
    divlog.style.display = 'none';
    divSig.style.display = 'none';

})









  // Your web app's Firebase configuration
  
/*function gettingMail() {
	if(validate() && emailValidate() && passwordValidate())
	{
		var correctMail= document.getElementById('mail').value;
		var password = document.getElementById('password').value;

		
}
function validate()
{
	if(document.getElementById("Uname").value == "")
		{
			alert("Enter your name please..!")
			return false;
		}
	if(document.getElementById("mail").value == "")
		{
			alert("Enter your email please..!")
			return false;
		}
		if(document.getElementById("password").value == "")
		{
			alert("Enter your password please..!")
			return false;
		}
		return (true);
}

function emailValidate() 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myform.Email.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

function passwordValidate() {
    var p = document.getElementById('password').value;
        
    if (p.length < 8) {
        alert("Your password must be at least 8 characters");
        return false; 
    }
    if (p.search(/[a-z]/i) < 0) {
        alert("Your password must contain at least one letter.");
        return false;
    }
    if (p.search(/[0-9]/) < 0) {
        alert("Your password must contain at least one digit.");
        return false; 
    }
    if (p.length > 12) {
        alert("Your password must contain less than 12 characters.");
        return false;
    }
    return true;
}*/

