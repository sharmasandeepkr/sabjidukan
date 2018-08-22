/* global $ */

 				var qtycount=1; 
 				var off=document.getElementsByClassName('offid');
				var apriceplace=document.getElementsByClassName('apriceid');
				var qtyplace=document.getElementsByClassName('qty');
				var opriceplace=document.getElementsByClassName('opriceid');
				var nameloc=document.getElementsByClassName('name');
				var addb=document.getElementsByClassName('add');
				
				var array_name=[];
				var array_qty=[];
				var array_aprice=[];
				var array_oprice=[];
				var array_off=[];
				var lcnt=0;
				var totalap=0;
				var totalop=0;
				var added=[];
				var added_mm=[];
				var c_add=0;
				var addedqty=[];
				var sendableAdd;
				var vegImgSrc=[];
				var itmobject =document.getElementsByClassName('itemb');
				var dlistitems=document.getElementsByClassName('dlistitems');
function add(mm){	
					if(added[mm-1]!=1){
						++lcnt;
					if(lcnt>2){
						$('.hiddable').addClass('hidden-lg');
						$('.list-group-item').css({"padding-top":"0px","padding-bottom":"0px"});
						$('.list-group-item').removeClass('hidden-lg');
						}
						if(check(mm)==1){
								qtycount=1;											
							var p;
							added_mm[c_add]=mm;
							addedqty[c_add]=array_qty[mm-1]*qtycount;
							++c_add;
							flyToElement($('.img1')[mm-1], $('.animateCart'));
							//document.getElementById('itemCount').innerHTML=c_add;
							setTimeout(function() {
								$('#itemCount').html(c_add).css({'display': 'block'});
							}, 600);
							totalap+=array_aprice[mm-1]*qtycount;
							totalop+=array_oprice[mm-1]*qtycount;
							addb[mm-1].style.backgroundColor="red";							
							addb[mm-1].innerHTML="Added";
							addb[mm-1].style.textAlign="center";							
							}else{										
							added_mm[c_add]=mm;	
							addedqty[c_add]=array_qty[mm-1]*qtycount;
							++c_add;
							flyToElement($('.img1')[mm-1], $('.animateCart'));
							setTimeout(function() {
								$('#itemCount').html(c_add).css({'display': 'block'});
							}, 300);
							//dlistitems[lcnt-1].innerHTML=array_name[mm-1] +'     '+array_qty[mm-1]*qtycount+'g'+ '   '+'          Rs.'+array_oprice[mm-1]*qtycount+',';			
							//itmobject[lcnt-1].innerHTML=array_name[mm-1] +'     '+array_qty[mm-1]*qtycount+'g'+ '   '+'          Rs.'+array_oprice[mm-1]*qtycount+',';											
							//listg[lcnt-1].innerHTML=array_name[mm-1] +'     '+array_qty[mm-1]*qtycount+'g'+ '   '+'          Rs.'+array_oprice[mm-1]*qtycount+',';
							totalap+=array_aprice[mm-1]*qtycount;
							totalop+=array_oprice[mm-1]*qtycount;
							addb[mm-1].style.backgroundColor ="red";							
							addb[mm-1].innerHTML="Added";
							
							}
							total();
							added[mm-1]=1;
					}
					


};
var itemc=0;
function moreitems() {
	if(itemc==0){
		$('.dlist').removeClass('hidden-lg');
	$('.dlist').removeClass('hidden-md');itemc=1;
	}else{
		$('.dlist').addClass('hidden-lg');
	$('.dlist').addClass('hidden-md');
	itemc=0;
	}
	$('html, body').animate({
    scrollTop: $('#ditem').offset().top
}, 1000);
	
}


var add_line1;
var add_line2;
var add_landmrk;
var add_pincode;
var add_mobile;
var city="Jaipur";
var state="Rajasthan";
function add_input() {
	 add_line1 =$('input[name="line1"]').val();
	 add_line2=$('input[name="line2"]').val();
	 add_landmrk=$('input[name="landmark"]').val();
	 
	 add_pincode=$('input[name="pincode"]').val();
	 add_mobile=$('input[name="mobile"]').val();
	 console.log(add_line1 + ' ' + add_line2 + ' '+add_landmrk + ' '+add_pincode + ' '+add_mobile);
	 remove_focus();
	 
		$.post('/mongoaddr',{mail:g_mail,line1:add_line1,line2:add_line2,pincode:add_pincode,mobile:add_mobile,name:g_name},function (res) {
			console.log(res);
		});
		var editadd=document.getElementsByClassName('editaddr');
		editadd[0].innerHTML=sendableAdd;
		var replace_line1=document.getElementsByClassName('line1');
		var replace_line2=document.getElementsByClassName('line2');
		replace_line1[0].innerHTML=add_line1;
		replace_line2[0].innerHTML=add_line2;		
		$('.line2').removeClass('hidden-lg hidden-md hidden-sm hidden-xs');
}
/*var eyeonadd=0;
function focusme() {
	if(eyeonadd==0 && signed==1){
		var editadd=document.getElementsByClassName('editaddr');
								var replace_line1=document.getElementsByClassName('line1');
								var replace_line2=document.getElementsByClassName('line2');
								var address;
								var milgaya=0;
								var outaddr=[];
								$(".edit_address").removeClass("hidden-lg");
								$(".edit_address").removeClass("hidden-md");
								$(".edit_address").removeClass("hidden-sm");
								$(".edit_address").removeClass("hidden-xs");
								$(".input111").focus();
								eyeonadd=1;
	}								
}
var addr_chk=0;
var signed=0;
var buyed=0;
function buy() {	
	if(signed==0){
		$(".signinbottom").removeClass("hidden-sm");
		$(".signinbottom").removeClass("hidden-xs");
		$(".hide_signin").removeClass("hidden-lg");
		$(".hide_signin").removeClass("hidden-md");
		$(".buyside").addClass("hidden-lg hidden-md");	
		$(".buybottom").addClass("hidden-sm");
		$(".buybottom").addClass("hidden-xs");
		$(".nametop").addClass("hidden-sm");
		$(".nametop").addClass("hidden-xs");
	}
	
	if(eyeonadd==0 &&signed==1){
		focusme();
	}
	
if(buyed==0 && signed==1 && eyeonadd==1){
	$('.ordermore').removeClass('hidden-sm ');
	$('.ordermore').removeClass('hidden-xs ');
	$('.sideordermore').removeClass('hidden-lg');
	$('.sideordermore').removeClass('hidden-md');
	dlistitems[lcnt+2].innerHTML='Your Order Is Cinfirmed';
	dlistitems[lcnt+3].innerHTML='Your Order Will be Delivered To Your Address';
	dlistitems[lcnt+4].innerHTML=add_line1 +',';
	dlistitems[lcnt+5].innerHTML= add_line2 +',';
	dlistitems[lcnt+6].innerHTML=city+' ,'+state+',' ;
	dlistitems[lcnt+7].innerHTML='Pincode :'+ add_pincode;
	
	 
	//opendetails();
	var addedmm=JSON.stringify(added_mm);
	var addedqtya=JSON.stringify(addedqty);
	 $.post('/to',{mail:g_mail,added_mm:addedmm,added_qty:addedqtya},function (res) {
		 console.log(res);
	 });
	buyed=1;
		
		var buyside=document.getElementsByClassName("buyside");
		buyside[0].innerHTML="Oder Is Placed";
		buyside[1].innerHTML="Order Is Placed";
	
	console.log(added_mm);
	console.log(addedqty);
}
};

function ordermore() {
	location.reload();
}

function remove_focus(){
	
	$(".edit_address").addClass("hidden-lg");
	$(".edit_address").addClass("hidden-md");
	$(".edit_address").addClass("hidden-sm");
	$(".edit_address").addClass("hidden-xs");
	
}

function ensure() {
	if(signed==1){
		$(".hide_signin").addClass("hidden-lg");
		$(".hide_signin").addClass("hidden-md");
		$(".buyside").removeClass("hidden-lg hidden-md");
	}
	
}
*/

var ctotal1=document.getElementsByClassName('total1');
var ctotal2=document.getElementsByClassName('total2');
var vImg=document.getElementsByClassName('img1');
function total() {
	

	ctotal1[0].innerHTML='Rs.'+totalap;
	ctotal2[0].innerHTML='RS.'+totalop;
}				
				function setnow() {
					for(var i=0;i<32;i++){
				var off_this=100-((array_oprice[i]/array_aprice[i])*100);
				
					qtyplace[i].innerHTML =array_qty[i]+'gm';
					apriceplace[i].innerHTML = 'Rs.'+array_aprice[i];
					opriceplace[i].innerHTML = 'Rs.'+array_oprice[i];
					off[i].innerHTML=parseInt(off_this)+'% Off';
					nameloc[i].innerHTML=array_name[i];
				}
				for(var sCount=0;sCount<vegImgSrc.length;sCount++){
					vImg[sCount].src=vegImgSrc[sCount].url;
					//console.log('img src change');
						//$('.img1')[sCount].attr('src',vegImgSrc[sCount].url);
					}
				}
var p=0;		
function check(n){
	if(p!=n){
		return 1;
	}
	else {p=n;return 0;}
}
function increament(m){	
		 
		 if(qtycount==1){
		 	p=m;
		 	++qtycount;
		 	
        			
        			qtyplace[m-1].innerHTML=array_qty[m-1]*qtycount +'gm';
        			apriceplace[m-1].innerHTML='Rs.'+array_aprice[m-1]*qtycount;
        			opriceplace[m-1].innerHTML='Rs.'+ array_oprice[m-1]*qtycount;
		 }else {if(check(m)==1){
		 	qtycount=2;
		 	p=m;
        			qtyplace[m-1].innerHTML=array_qty[m-1]*qtycount +'gm';        	
        			apriceplace[m-1].innerHTML='Rs.'+array_aprice[m-1]*qtycount;        	
        			opriceplace[m-1].innerHTML='Rs.'+ array_oprice[m-1]*qtycount;
		 }
		 else {
		 	++qtycount;
		 		
        			qtyplace[m-1].innerHTML=array_qty[m-1]*qtycount +'gm';        	
        			apriceplace[m-1].innerHTML='Rs.'+array_aprice[m-1]*qtycount;        	
        			opriceplace[m-1].innerHTML='Rs.'+ array_oprice[m-1]*qtycount;        	
		 }
		}	 
    
};

		

function decreament(m){
	
		 if(qtycount==1){
		 	p=m;		 	
        	qtyplace[m-1].innerHTML=array_qty[m].base_unit+'gm';
		 }else {if(check(m)==1){		 	
		 			p=m;		 		
        			qtyplace[m-1].innerHTML=array_qty[m-1]+'gm';        		
        			qtycount=1;     
		 }
		 else {
		 	--qtycount;		 		
        			qtyplace[m-1].innerHTML=array_qty[m-1]*qtycount +'gm';        	
        			apriceplace[m-1].innerHTML='Rs.'+array_aprice[m-1]*qtycount;        	
        			opriceplace[m-1].innerHTML='Rs.'+ array_oprice[m-1]*qtycount;        	
		 }
		}		
}
/*
var detailsopen=0;
function opendetails(){
	if(detailsopen==0){
		$(".detailsexpans").removeClass('hidden-sm');
		$(".detailsexpans").removeClass('hidden-xs');
	detailsopen=1;
	}else{
		$(".detailsexpans").addClass('hidden-sm');
		$(".detailsexpans").addClass('hidden-xs');
		detailsopen=0;
	}
	$('html, body').animate({
    scrollTop: $('#firstoflist').offset().top
}, 1000);
	
};
*/
	  //project ID will be sabjidukan-181121

		
$.post('/test_c_addr',function (res11) {	
	for(var b=0;b<44;b++){
		array_name[b]=res11[b].veg_name;
		array_aprice[b]=res11[b].curr_act_base_price;
		array_oprice[b]=res11[b].curr_our_base_price;
		array_qty[b]=res11[b].base_unit;		
		}
		
});	
$.post('/vegImgSrc',function (response,status) {
	if(status=="success"){
		//console.log(response.length+'leghth hai bhiya');
		vegImgSrc=response;
		
	}
});


function only_veg() {
	$('#loading').removeClass('hidden-sm hidden-xs');
	$.post('/deskItemContent',function(res_vegpage,status) {
		console.log('done');
		var m_body=document.getElementsByClassName('mobileFront');
		m_body[0].innerHTML=res_vegpage;
		//document.open();
		//document.write(res_vegpage);
		//document.close();
		setnow();
		
	});
};

function open_home(){
	$.post('/mobileFront',function(res) {
		//console.log(res);
		var m_body=document.getElementsByClassName('mobileFront');
		m_body[0].innerHTML=res;		
		//setnow();		
	});
};
 