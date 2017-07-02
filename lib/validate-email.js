(function ($) {
	$.fn.emailValidator = function () {

		// your code here
		$("#validate").keyup(function(){
			var email = $("#validate").val();
			if(email != 0) {
				if(cekValidEmailAddress(email)){
					$("#validate").css({"border" : "5px solid green"});
					$("#validateEmail").text("Email address is Valid")
				} else {
					$("#validate").css({"border" : "5px solid red"});
					$("#validateEmail").text("Email address is Not Valid")
				}
			} else {
				$("#validate").css({"background-image" : "none"})
				$("#validateEmail").text("Input Email Address Fisrt")
			}
		})
	}
})(jQuery)

function cekValidEmailAddress(emailAddress) {
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(emailAddress)
}
