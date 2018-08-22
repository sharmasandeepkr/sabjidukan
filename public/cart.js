/* global $ */
function openCart() {
	$.post('/loadCart',function (response,status) {
		$('.mobileFront')[0].innerHTML=response;
		if(status=="success"){
			//console.log(added_mm);
			ShowOrEditAddress();
			for(var mmcount=0;mmcount<added_mm.length;mmcount++){
				var multiplyBy=addedqty[mmcount]/array_qty[added_mm[mmcount]-1];
				//console.log(added_mm[mmcount]+ array_name[added_mm[mmcount]-1]+array_aprice[added_mm[mmcount]-1]*multiplyBy+'aprice'+array_oprice[added_mm[mmcount]-1]*multiplyBy);
				//console.log(addedqty[mmcount]);
				$('.personalShoppingColName')[mmcount].innerHTML= '<h1>'+ array_name[added_mm[mmcount]-1] +'</h1>';
				$('.personalShoppingColAmt')[mmcount].innerHTML= '<h1>'+ addedqty[mmcount]+'gm'+'</h1>';
				$('.personalShoppingColAprice')[mmcount].innerHTML='<h1><strike>'+'Rs.'+array_aprice[added_mm[mmcount]-1]*multiplyBy+'</strike></h1>';
				$('.personalShoppingColOprice')[mmcount].innerHTML= '<h1>' +'Rs.'+array_oprice[added_mm[mmcount]-1]*multiplyBy+'</h1>';
        $('.personalShoppingColEdit')[mmcount].innerHTML='<h1>'+' Remove'+'</h1>';
			}
			
		}
	});
}

var userName;
var userMail;
 function onSignIn(googleUser) {
   console.log('abhi aya hu bhai');
        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
		userName=profile.getName();
		userMail=profile.getEmail();
        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());

        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
      };
	  
function editAddress(){
	signupPage();
};

	  
function ShowOrEditAddress(){
		$.post('/checkExisitingAdd',{mail:userMail},function (res) {
        if(res==""){
          console.log('hii');
          if(userMail)console.log('ha bhai mail to aarha hai');
          else {
          editAddress();
          }
        }else{
          console.log(res);
		  $.post('/contentForSignedin',function (response,status) {
			  //document.getElementsByClassName('contentForAddress')[0].innerHTML=response;
			  if(status=='success'){
				  document.getElementsByClassName('showName')[0].innerHTML=userName;
		       	  document.getElementsByClassName('showEmail')[0].innerHTML=userMail;
				  $('.selectedCity')[0].innerHTML='Your City :' +res.address[2].city;
				  $('.mobile')[0].innerHTML='Mobile No. :'+res.mobile;
				  $('.line1')[0].innerHTML='Address Line1 :'+res.address[0].line1;
				  $('.line2')[0].innerHTML='Address Line2 :'+res.address[1].line2;
				  $('.landmark')[0].innerHTML='Landmark :'+res.address[3].landmark;
				  $('.pincode')[0].innerHTML='Pincode :'+res.pincode;
			  }
		  });		  
          //display user info
        }
      });
}