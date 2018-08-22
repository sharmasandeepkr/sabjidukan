/* global $ */
function open_home(){
	$.post('/mobileFront',function(res) {
		//console.log(res);
		var m_body=window.parent.document.getElementsByClassName('mobileFront');
		m_body[0].innerHTML=res;		
		//setnow();		
	});
};

function editAddress(){
	$.post('/editAddress',function (data,status) {
            document.getElementsByClassName('contentForAddress')[0].innerHTML=data;
			if(status=="success"){
				callback(); 
			}
           });
}
//var cityListBool=false;
//var cityList=[];
//var availCity=document.getElementById('availCity');
//cityList=availCity.options.value;
var noResult="No Results Found";

function selectedRegion(){
	var matchedCityLength=0;
	var cval;
	var bool=false;
	var availCity=document.getElementById('availCity');
	/*if(!cityListBool){
		cityList=availCity.options.value;
		cityListBool=true;
		
		}*/
	
	cval+=$('.inputRegion').val();
	console.log(cval.substring(9));
	for(var count=0;count<availCity.options.length;count++){
		if(availCity.options[count].value.substring(1).indexOf(cval.substring(10))!=-1){
			bool=true;
			console.log(cval.substring(9).length+'pahla');
			console.log(availCity.options[count].value.length + 'dusra');
			if(cval.substring(9).length==availCity.options[count].value.length){fixRegion(availCity.options[count].value);
				console.log('kya bhai');
				}
			break;
		}
	}
	if(bool){console.log('Jai Shree Ram');
			
		}
	if(!bool){
		availCity.options[availCity.options.length-1].value="No Results Found";
		$('.inputRegion')[0].value="No Results Found";
		}		
}
var userSelectedCity;
function fixRegion(selectedCity) {
	userSelectedCity=selectedCity;
	$('.selectedCity')[0].innerHTML='Your City :' +selectedCity;
	$('.formClass').hide();
	$('.formClassLabel').hide();
	$('.pvtAddressForm').removeClass("hidden-sm");
	$('.pvtAddressForm').removeClass("hidden-xs");
}

function pvtAddressSubmit() {
	$.post('/pvtAddressSubmit',{city:userSelectedCity,mail:userMail,name:userName,mobile:$('.pvtAddressMobile')[0].value,line1:$('.pvtAddressLine1')[0].value,line2:$('.pvtAddressLine2')[0].value,landmark:$('.pvtAddressLandmark')[0].value,pincode:$('.pvtAddressPincode')[0].value},function (res) {
		console.log(res);
		ShowOrEditAddress();			
	});
	console.log(userName+userMail+'name frv ' +$('.pvtAddressMobile')[0].value);
}
//start of google_sign_in functions
var userMail;
var userName;
function callback() {
        document.getElementsByClassName('showName')[0].innerHTML=userName;
        document.getElementsByClassName('showEmail')[0].innerHTML=userMail;
      }
    function onSuccess(googleUser) {
      //console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
      parent.onSignIn(googleUser);
      userName=googleUser.getBasicProfile().getName();
	  userMail=googleUser.getBasicProfile().getEmail();
      $('.googleSignin-main, .googleSignin-benefits').hide();
      	ShowOrEditAddress();
       
    }
    function onFailure(error) {
      console.log(error);
    }
    function renderButton() {
      gapi.signin2.render('my-signin2', {
        'scope': 'profile email',
        'width': 390,
        'height': 90,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': onSuccess,
        'onfailure': onFailure
      });
    }
	
	
	function ShowOrEditAddress(){
		$.post('/checkExisitingAdd',{mail:userMail},function (res) {
        if(res==""){
          console.log('hii');
           editAddress(callback);
        }else{
          console.log(res);
		  $.post('/contentForSignedin',function (response,status) {
			  document.getElementsByClassName('contentForAddress')[0].innerHTML=response;
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