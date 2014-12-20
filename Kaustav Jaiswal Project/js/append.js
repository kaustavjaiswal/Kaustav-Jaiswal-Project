$(document).ready(function(){

$('#signUpBtn').on('click',function()
{
	var username = $('#inputUserName').val();
	var password = $('#inputPassword').val();
	alert(username +'--'+ password);
	$('#signUpBtn').spin('small','red');
	CheckValid(username,password);
});

function CheckValid(a,b)
{
	var flag=0;
	var usersRef = new Firebase('https://luminous-inferno-228.firebaseio.com/');
	usersRef.once('value', function(nameSnapshot) {
  	var val = nameSnapshot.val();
  	console.log(val);
  	$.each(val,function(index,currentValue) 
		{
		  	if(currentValue.firstName==a)
		  	{
		  		flag=1;
		  		$('#signUpBtn').spin(false);
		  		alert('This username is already taken');
		  		$(".space1 p").removeClass("wrong-password")
		  		return false;
		  	}
		  	
		});
  			if (flag==0) 
  		{
  			UploadData(a,b);
  			$('#signUpBtn').spin(false);
  			alert('Sign Up Successfully Done');
  		}

});
}
function UploadData(username,password)
{	
	var usersRef = new Firebase('https://luminous-inferno-228.firebaseio.com/');
	usersRef.push({ 'firstName': username, 'passWord': password });
}

});