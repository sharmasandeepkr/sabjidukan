/* global $ */

	if($(window).width()<991){
		$.post('/mobileFront',function (res) {
			
			document.getElementsByClassName('mobileFront')[0].innerHTML=res;
		});
	}else{
		$.post('/deskItemContent',function(res,status){
			document.getElementsByClassName('deskItemContent')[0].innerHTML=res;
			if(status=='success'){
			
			setTimeout(function() {
				setnow();
			}, 420);
		}
		});
		$.post('/default_side_nav',function (res) {
		document.getElementsByClassName('desk-side-nav')[0].innerHTML=res;
				
		});		
	}
	
	function signupPage() {
		//var btn='<button class="glyphicon glyphicon-arrow-left hidden-lg hidden-md" style="margin-left:15px;color:red;position:fixed;z-index:2;top:240px;font-size:45px;" onclick="open_home()"></button>';
		var toBeLoad='<iframe style="margin-top:9px;margin-bottom:9px;" src="/signin_g.html" width="900px" height="810px"><p>Please Try Chrome !!</p></iframe>';
		
		//document.getElementsByClassName('backButton')[0].innerHTML=btn;
		
		//console.log('inSignup');
		//$.post('/signupPageNow' ,function (res) {
			document.getElementsByClassName('mobileFront')[0].innerHTML=toBeLoad;
		//});
	}
	
	