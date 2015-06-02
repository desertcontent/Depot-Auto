
$( document ).bind("pagebeforeload", function() {
//$.mobile.changePage("#main-mobile");
//if (screen.width > 200){$.mobile.changePage("#main");}

});

$( document ).bind("pagebeforecreate", function() {
	//$.mobile.changePage("#main-mobile");
//if (screen.width > 200){$.mobile.changePage("#main");}

});

$( document ).delegate("#main", "pageinit", function() {

// Google Event Tracking

 			   $('.phonebutton').click(function() {
		        _gaq.push(['_trackEvent', 'phone', 'click-to-call', 'click-to-call']);
		     
		       });
			   	$('.phonepop').click(function() {
		        _gaq.push(['_trackEvent', 'phone', 'popup', 'popup']);
		          
		       });
		       
		          $('.mapbyapp').click(function() {
		        _gaq.push(['_trackEvent', 'directions', 'map-by-app', 'map-by-app']);
		       });
			   
			     $('.mapbysite').click(function() {
		        _gaq.push(['_trackEvent', 'directions', 'map-by-site', 'map-by-site']);
		       });

// $( document ).on('pageinit', function() {
// alert(document.documentElement.clientWidth+':'+screen.width);
// Modernizr
//if (Modernizr.geolocation) {var ua = navigator.userAgent; $('#diagnostics').text(ua);alert(screen.width+'x'+screen.height+' '+$(window).width()+'x'+$(window).height())}
// var ua = navigator.userAgent; $('#diagnostics').text(ua);alert(ua+' '+screen.width+'x'+screen.height+' '+$(window).width()+'x'+$(window).height());

		/* $('#biz').load('config.html #destination_address',function(){
				$('#biz').trigger('create');
				});
				$('#biz2').load('config.html #destination_address2',function(){
				$('#biz2').trigger('create');
				});
	*/  

	var destad1 = $('#dest_ad1').html();
	var destad2 = $('#dest_ad2').html();

	$('#biz1').html(destad1).trigger('create');
	$('#biz2').html(destad2).trigger('create');
	
	//$('#destination_address_display').load('config.html #destination_address');
				//$('#destination_address_display2').load('config.html #destination_address2');
				$('#destination_address_display').html(destad1).trigger('create');
				$('#destination_address_display2').html(destad2).trigger('create');
	
				// Load Social Share Buttons
			$('#socialbutton').jsShare({ 
			initialdisplay: 'expanded', 
			animate: true,
			facebook: true,
				twitter: true,
				digg: true,
				reddit: false,
				stumbleupon: false,
				messenger: false,
				delicious: false,
				linkedin: true,
				googlebuzz: false,
				yoursitetitle: 'Depot Auto Service & Towing Co. |',
				yoursiteurl: 'http://depotautosvc.com',
				yoursitename: 'Depot Auto Service & Towing Co.',
				desc: 'Depot Auto Service & Towing Co. Sheboygan, WI',
			maxwidth: 150 
			});

				

				
				// Load Logo to both positions 
				
				// Default Logo Class (small mobile size)
				// $('.logo-main').load('config.html #logo-mobile'); 
				
				//$('#logo-page').load('config.html #logo-mobile'); 
				// $('#logo-header').load('config.html #logo-mobile'); 
				
				// $('#logo-wrapper').load('config.html #logo-mobile'); 
				// $('#logo-leftnav').load('config.html #logo-mobile'); 
				
			
				// $('#header-block-right').load('config.html #header-promo-links'); 
				// $('#header-content-c').load('config.html #logo-mobile');
				// $('#header-content-r').load('config.html #logo');
									
					

				
				
				
				// Fill left panel with content
				/*	$('#mypanel').load('#menu-page #menu-list',function(){
								$('#mypanel').trigger('create');

							});	
				*/

				
				/*$('#tweets').click(function() {
							$('#splash_content').html('');
							$('#splash_content').jTweetsAnywhere({
							username: 'datafog',
							count: 4,
							
							showTweetFeed: {
								showProfileImages: true,
								showUserScreenNames: true,
								showUserFullNames: true,
								showActionReply: true,
								showActionRetweet: true,
								showActionFavorite: true,
								paging: {
				mode: 'none'
			}
								},
								showTweetBox: {
									label: '<span style="color: #303030">Spread the word ...</span>'
									}
									});
							
										
								return false;
						});
				*/
								
				$('#specialsbutton').click(function() {
							 _gaq.push(['_trackEvent', 'splash', 'specials', 'specials']);
							//$('#splash_content').load('#menu-page-mobile #menu-section-a',function(){
							//$('#splash_content').load('#specials #specials-listview',function(){
							//$('#testcamera').cameraStop();
							//$('#testcamera').hide();
							//$('#splash_content').html('');
							// alert('test');
							var specialscontent = $('#specials').html();
								$('#splash_content').html(specialscontent).trigger('create'); 
								$('#specials-listview').css('max-height','435px');
								$('#specials-listview').css('overflow','auto');
								//});							
								return false;
						});	
						
						
						$('#servicesbutton').click(function() {
						 _gaq.push(['_trackEvent', 'splash', 'services', 'services']);
							//$('#splash_content').load('#menu-page-mobile #menu-section-a',function(){
							//$('#splash_content').load('#services #services-listview',function(){
								var servicesscontent = $('#services').html();
								$('#splash_content').html(servicesscontent).trigger('create'); 
								$('#splash_content').trigger('create');
								$('#services-listview').css('max-height','435px');
								$('#services-listview').css('overflow','auto');
								//});							
								return false;
						 });	
					
					
					
				//	$('#specials-dialog, #specials1-dialog, #specials2-dialog, #specials3-dialog, #specials4-dialog, #specials5-dialog, #specials6-dialog, #specials7-dialog, #specials8-dialog').click(function() {
					
					//$(this).dialog( "close" );
					//return false;
					//	});	
							
				
				$('#photos').click(function() {
							$('#splash_content').load('gallery.html #slider',function(){
								$('#splash_content').trigger('create');
								galleryload();
								// $('#splash_content').slider('refresh');
									
								});
								return false;
						});
						
				$('#mapdir, #mapdirt, #mapbutton').click(function() {
								 _gaq.push(['_trackEvent', 'splash', 'findus', 'findus']);
								
								$('#splash_content').load('googlemap.html #testmap',function(){
								$('#splash_content').trigger('create');
								mapload();
																// $('#map_canvas_1').gmap('refresh');
								
								});
							return false;
						});
						
				/*$('#mapdir').click(function() {

								
								//$('#splash_content').load('googlemap.html #testmap',function(){
								//$('#splash_content').trigger('create');
								var mapcontent = $('#directions_map').html();
								$('#splash_content').html(mapcontent); 
								$('#splash_content').trigger('create'); 
								mapload();
																// $('#map_canvas_1').gmap('refresh');
								
								//});
							return false;
						});
						
						*/
						
			
			$('#facebooklink').click(function() {
							$('#splash_content').load('config.html #facebook-display',function(){
								// $('#splash_content').trigger('create');


								});
								return false;
						});

						$('#coveragebutton').click(function() {
					
								//$('#splash_content').load('config.html #splash-init-content5',function(){

							$('#splash_content').load('#coverage #coverage-listview',function(){
									$('#splash_content').trigger('create');
									$('#coverage-listview').css('max-height','435px');
								$('#coverage-listview').css('overflow-y','scroll');
								$('#coverage-listview').css('padding-bottom','0px');
								$('#coverage-listview').css('margin','auto');

								});
								return false;
						});




						$('#aboutusbutton').click(function() {
						 _gaq.push(['_trackEvent', 'splash', 'aboutus', 'about-us']);
						var aboutuscontent = $('#aboutus').html();	

						$('#splash_content').html(aboutuscontent); 
						$('#splash_content').trigger('create'); 
								$('#history').css('max-height','435px');
								$('#history').css('overflow-y','auto');
								$('#history').css('margin','auto');
							return false;
							});
							
							//$(document).on('click', "#aboutusbutton",function (e) {  
							// $('#aboutusbutton').click(function(e) {
							//e.preventDefault();
							
							//$('#splash_content').html('');
							// $('#splash_content').load('#aboutus #history',function(){
							// $('#splash_content').trigger('create');
							// $('#history').css('max-height','435px');
							// $('#history').css('overflow-y','auto');
							// $('#history').css('margin','auto');
							
							//	});
							//	return false;
						//});  
						
						
						$('#autosafetybutton').click(function() {
								 _gaq.push(['_trackEvent', 'splash', 'auto safety', 'auto safety']);
							//$('#splash_content').html('');
							//$('#splash_content').load('#autosafety #autosafetyinfo',function(){
							    var autosafetycontent = $('#autosafety').html();
								$('#splash_content').html(autosafetycontent).trigger('create'); 
								$('#splash_content').trigger('create');
								$('#autosafetyinfo').css('max-height','435px');
								$('#autosafetyinfo').css('overflow-y','auto');
								$('#autosafetyinfo').css('margin','auto');
								
								//});							
								return false;
						});
						
						$('#home').click(function() {
						 _gaq.push(['_trackEvent', 'splash', 'home', 'home']);
						//$('#splash_content').load('config.html #testcamera',function(){
								//$('#splash_content').trigger('create');
								//$('#testcamera').camera({thumbnails: true, fx: 'simpleFade', loader: 'bar', time: 5000, pagination: true});
								var splashinsert = $('#splash-gallery').html();
								$('#splash_content').html(splashinsert);
								$('#splash_content').trigger('create');					
								$('#testcamera').camera({loader:'none', pagination: true, thumbnails: false, navigation: true,time:3000, transPeriod:750,fx:'simpleFade',height: '70%',portrait:false, autoAdvance: false});
							
								
								//});
						return false;
						});
						
						$('#tourbutton').click(function() {
						 _gaq.push(['_trackEvent', 'splash', 'tour', 'tour']);
						$('#splash_content').load('config.html #testcamera',function(){
								//$('#splash_content').trigger('create');
								//$('#testcamera').camera({thumbnails: true, fx: 'simpleFade', loader: 'bar', time: 5000, pagination: true});
								//$('#testcamera').camera({loader:'none', pagination: false, thumbnails: true, navigation: true,time:3000, transPeriod:750,fx:'simpleFade',height: '70%', portrait:false});
								$('#splash_content').trigger('create');
								
								});
						return false;
						});

						
					
						
						$("#select-choice-min").on( "change", function() {
								var mypage = $(this).val();
								//alert(mypage);
								
								$('#splash_content').load( '#coverage'+mypage+' #coverage-listview'+mypage,function(){
									$('#splash_content').trigger('create');
									$('#coverage-listview'+mypage).css('max-height','435px');
								$('#coverage-listview'+mypage).css('overflow-y','scroll');
								$('#coverage-listview'+mypage).css('padding-bottom','0px');
								$('#coverage-listview'+mypage).css('margin','auto');
								var mymenu = $('#select-choice-min');
								mymenu.prop('selectedIndex',0);
								mymenu.selectmenu("refresh");
								});
								
								});
						

				// List Ads
	/*		$('#list-ad1').load('config.html #splash-init-content',function(){
				//$('#list-ad1').trigger('create');
				});
				
				$('#list-ad2').load('config.html #splash-init-content6',function(){
				//$('#list-ad2').trigger('create');
				});
				
				$('#list-ad3').load('config.html #splash-init-content3',function(){
				//$('#list-ad3').trigger('create');
				});
				
				$('#list-ad4').load('config.html #splash-init-content2',function(){
				//$('#list-ad3').trigger('create');
				});
		
		*/
				
				//$('#list-ada').load('config.html #splash-init-content5',function(){
				//$('#list-ad3').trigger('create');
				//});
				// $('#list-adb').load('config.html #splash-init-content7',function(){
				//$('#list-ad3').trigger('create');
				//});
			
				/* $('#list-adc').load('config.html #splash-init-content3',function(){
				//$('#list-ad3').trigger('create');
				});
				$('#list-add').load('config.html #splash-init-content4',function(){
				//$('#list-ad3').trigger('create');
				});  */

				// $('#list-ade').load('config.html #splash-init-content4',function(){
				//$('#list-ad3').trigger('create');
				// });
				// $('#list-adf').load('config.html #splash-init-content2',function(){
				//$('#list-ad3').trigger('create');
				//});
				/* $('#list-adg').load('config.html #splash-init-content3',function(){
				//$('#list-ad3').trigger('create');
				});
				$('#list-adh').load('config.html #splash-init-content4',function(){
				//$('#list-ad3').trigger('create');
				});  */
								
				
				//$('#splash_content').load('config.html #logo-tablet');
				
				// $('#splash_content').load('config.html #splash-init-content',function(){	
				//$('#splash_content').load('config.html #firstslide',function(){	
				// getSoup();
				//getSpecials();
				// });
				
								
				
				
			/*	$("#splash_content").load("config.html #testcamera", function(response, status, xhr) {
			if (status == "error") {
var msg = "Sorry but there was an error: ";

$("#error").html(msg + xhr.status + " " + xhr.statusText);
}
$('#testcamera').camera({loader:'none', pagination: false, thumbnails: true, navigation: false,time:3000, transPeriod:750,fx:'simpleFade',height: '70%', portrait:false, autoAdvance: true
								});
});*/
				
					var splashinsert = $('#splash-gallery').html();
					$('#splash_content').html(splashinsert);
					$('#splash_content').trigger('create');
					
				//$('#splash_content').load('config.html #testcamera',function(){
								
								// $('#splash_content').trigger('create'); 
								// $'(#splash_content').trigger('create');
								//$('#testcamera').camera({thumbnails: true, fx: 'simpleFade', loader: 'bar', time: 5000, pagination: true});
								  $('#testcamera').camera({loader:'none', pagination: true, thumbnails: false, navigation: true, time:3000, transPeriod:750,fx:'simpleFade',height: '70%', portrait:false, autoAdvance: false});
							
							
														
								
								
								// });


					// $('#testcamera').camera({height: '50%', thumbnails : false}); //the basic method
 


						 						
						
						
						function tooltips() {
	var targets = $( '[rel~=tooltip]' ),
		target	= false,
		tooltip = false,
		title	= false;

	targets.bind( 'mouseenter', function()
	{
		target	= $( this );
		tip		= target.attr( 'title' );
		tooltip = $( '<div id="tooltip"></div>' );
 
 if( !tip || tip == '' )
			return false;

		target.removeAttr( 'title' );
		tooltip.css('opacity',0)
				.html( tip )
				.appendTo('body');

		var init_tooltip = function()
		{
			if( $( window ).width() < tooltip.outerWidth() * 1.5 )
				tooltip.css( 'max-width', $( window ).width() / 2 );
			else
				tooltip.css( 'max-width', 340 );
 
			var pos_left = target.offset().left + ( target.outerWidth() / 2 ) - ( tooltip.outerWidth() / 2 ),
				pos_top	 = target.offset().top - tooltip.outerHeight() - 20;

			if( pos_left < 0 )
			{
				pos_left = target.offset().left + target.outerWidth() / 2 - 20;
				tooltip.addClass( 'left' );
			}
			else
				tooltip.removeClass( 'left' );

			if( pos_left + tooltip.outerWidth() > $( window ).width() )
			{
				pos_left = target.offset().left - tooltip.outerWidth() + target.outerWidth() / 2 + 20;
				tooltip.addClass( 'right' );
			}
			else
				tooltip.removeClass( 'right' );
 
			if( pos_top < 0 )
			{
				var pos_top	 = target.offset().top + target.outerHeight();
				tooltip.addClass( 'top' );
			}
			else
				tooltip.removeClass( 'top' );
 
			tooltip.css( { left: pos_left, top: pos_top } )
				   .animate( { top: '+=10', opacity: 1 }, 50 );
		};
 
		init_tooltip();
		$( window ).resize( init_tooltip );
 
		var remove_tooltip = function()
		{
			tooltip.animate( { top: '-=10', opacity: 0 }, 50, function()
			{
				$( this ).remove();
			});
 
			target.attr( 'title', tip );
		};
 
		target.bind( 'mouseleave', remove_tooltip );
		tooltip.bind( 'click', remove_tooltip );
	 });
} 
						
					//	tooltips();
												
						
						
						
						
						function getSpecials (){
						
						function onSuccess(data, status)
							{
								
								$(".daily-special-text").text(data.special_1);
							
								$(".daily-special-text2").text(data.special_1s);
								$(".daily-special-text3").text(data.special_2);
								$(".daily-special-text4").text(data.special_2s);
								$(".daily-special-text5").text(data.special_3);
								$(".daily-special-text6").text(data.special_3s);
								
								$(".list-special-1").text(data.special_1);
								$(".list-special-2").text(data.special_2);
						
							}
					
							function onError(data, status)
							{
								// handle an error
							}	
						
						
						var formData = $("#callAjaxForm").serialize();

								$.ajax({
									type: "POST",
									url: "getspecials.php",
									cache: false,
									data: formData,
									dataType:"json",
									success: onSuccess,
									error: onError
								});
										
						
						/*	$('.daily-special-text').load('specials.html #special1');
							$('.daily-special-text2').load('specials.html #special1-subheading');
							$('.daily-special-text3').load('specials.html #special2');
							$('.daily-special-text4').load('specials.html #special2-subheading');
							$('.daily-special-text5').load('specials.html #special3');
							$('.daily-special-text6').load('specials.html #special3-subheading'); */
						}
						
						 //getSpecials();
						
					/*	$('#tweetFeed').jTweetsAnywhere({
							username: 'briscosheboygan',
							count: 5,
							showTweetFeed: {
								showProfileImages: true,
								showUserScreenNames: true,
								showUserFullNames: true,
								showActionReply: true,
								showActionRetweet: true,
								showActionFavorite: true
								},
								showTweetBox: {
									label: '<span style="color: #303030">Spread the word ...</span>'
									}
									});
						*/
						
							var latlngx;	
						    
						 $('#mapdir').click(function() {
							
								//$('#splash_content').load('googlemap.html #testmap',function(){
								//$('#splash_content').trigger('create');
								
								var mapcontent = $('#directions_map').html();
								$('#splash_content').html(mapcontent); 
								$('#splash_content').trigger('create'); 
								

								//});
								

								
									function errorHandler(err) {
									if(err.code == 1) {
										//alert("Error: Access is denied!");
										
										mapload();
										$('#gps').hide();
										$('#gps2').hide(); 
										$('#gpslabel').hide();
										
										
										}else if( err.code == 2) {
											//alert("Error: Position is unavailable!");
											
											mapload();
											$('#gps').hide();
											$('#gps2').hide();
											$('#gpslabel').hide(); 
											
											}
											else if( err.code == 3) {
											//alert("Error: Position is unavailable!");
											
											mapload();
											$('#gps').hide();
											$('#gps2').hide();
											$('#gpslabel').hide(); 
											
											}

											}
											
									function showLocation(position) {
									
								//	$('#biz').load('config.html #destination_address',function(){
								//	$('#biz').trigger('create');
								//	});
								//	$('#biz2').load('config.html #destination_address2',function(){
								//	$('#biz2').trigger('create');
								//	});
								 	
									var destad1=$('#dest_ad1').html();
									var destad2=$('#dest_ad2').html();

									$('#biz1').html(destad1).trigger('create');
									$('#biz2').html(destad2).trigger('create');
									//$('#biz').load('config.html #destination_address');
									
																		
									var latitude = position.coords.latitude;
									var longitude = position.coords.longitude;
									latlngx = new google.maps.LatLng(latitude, longitude);
									//alert("Latitude : " + latitude + " Longitude: " + longitude);
									$("#xlat").text (latitude);
									$("#xlng").text (longitude);
									mapload();
									}
								
								
								if(navigator.geolocation){
									// timeout at 5000 milliseconds (5 seconds)
									var options = {timeout:5000,enableHighAccuracy : true};
									navigator.geolocation.getCurrentPosition(showLocation, 
                                               errorHandler,
                                               options);
                                               }else{
                                              
                                            // alert("Sorry, browser does not support geolocation!");
                                               }


							return false;
						});
						
						 
							
										
						function mapload() { 

var map;
var marker;
var infowindow;
//var latlngx;
var latlngy;
var mobileaddress;				
 
	
	// Start Geocoder
	var geocoder;
	geocoder = new google.maps.Geocoder();
	
	
	
	
	
	
	
	geocoder.geocode({'latLng': latlngx}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[0]) {
            
          $("#from").val(results[0].formatted_address);
        }
      } else {
       // alert("Geocoder failed due to: " + status);
      }
    });

	
								
	var bizlatlng;
	var bizlatlng2;
	// Destination Location Marker (Business Location)		 
		 var addy =	 document.getElementById("destination_address").innerHTML;
		 var addy2 = document.getElementById("destination_address2").innerHTML;
	 	 		   		
		 geocoder.geocode({'address': addy}, function(results, status) {
		   document.getElementById("biz").innerHTML = '' + addy + '<br />' + (results[0].geometry.location);

		document.getElementById("blat").innerHTML = '' + (results[0].geometry.location.hb);
		document.getElementById("blng").innerHTML = '' + (results[0].geometry.location.ib);	   
		  bizlatlng = results[0].geometry.location;
		  

		   var mapOptions = {
			   zoom: 11,
			   center: bizlatlng,
			   mapTypeId: google.maps.MapTypeId.ROADMAP
			   };								  
		   //var mapOptions = { 'center': bizlatlng , 'zoom': 12 };
	    // mapnew = $('#map_canvas_1').gmap(mapOptions);	
	      
	 map = new google.maps.Map(document.getElementById('map_canvas_1'),
mapOptions);
		 
		 var bizinfocontent = '<div class="infowindow"><img src="images/logo.jpg" style="width:175px;"/><br />Depot Auto Service & Towing Co.<br />1131 Pennsylvania Avenue<br />Sheboygan, WI 53081<br />(920) 452-1811</div>';
		 var bizwindow = new google.maps.InfoWindow({
			 content: bizinfocontent
			 });
		 
		 
		 
		 var bizmarker = new google.maps.Marker({
			 position: bizlatlng,
			 map: map,
			 title: 'Depot Auto Service & Towing Co.'
			 });
       google.maps.event.addListener(bizmarker, 'click', function() {
	       bizwindow.open(map,bizmarker);
	       });
        

		  });			 				
		
		
		 geocoder.geocode({'address': addy2}, function(results, status) {
		   document.getElementById("biz2").innerHTML = '' + addy2 + '<br />' + (results[0].geometry.location);
		document.getElementById("blat2").innerHTML = '' + (results[0].geometry.location.hb);
		document.getElementById("blng2").innerHTML = '' + (results[0].geometry.location.ib);	   
		  bizlatlng2 = results[0].geometry.location;
		  

		  var bizinfocontent2 = '<div class="infowindow"><img src="images/logo.jpg" style="width:175px;"/><br />Depot Auto Service & Towing Co.<br />1131 Pennsylvania Avenue<br />Sheboygan, WI 53081<br />(920) 452-1811</div>'
		 var bizwindow2 = new google.maps.InfoWindow({
			 content: bizinfocontent2
			 });
		 
		 var bizmarker2 = new google.maps.Marker({
			 position: bizlatlng2,
			 map: map,
			 title: 'Business Location2'
			 });
       google.maps.event.addListener(bizmarker2, 'click', function() {
	       bizwindow2.open(map,bizmarker2);
	       });

	        
		  });			 
			  				
	
	
				 							 
						
//  DIRECTIONS BUTTONS
var directionsDisplay;
 var directionsService = new google.maps.DirectionsService();
 directionsDisplay = new google.maps.DirectionsRenderer();
		  
// DIRECTIONS FROM LOCATION INPUT TEXT
// To Primary Business Location
$('#submit').click(function() {

// Show Directions

 directionsDisplay.setMap(map);
 directionsDisplay.setPanel(document.getElementById('results'));
function calcRoute() {
 
	var start = $('#from').val();
	var end = $('#to').val();
	var request = {
		origin: start,
		destination: end,
		travelMode: google.maps.DirectionsTravelMode.DRIVING
		};
		directionsService.route(request, function(response, status) {
			if (status == google.maps.DirectionsStatus.OK) {
				directionsDisplay.setDirections(response);
				}
				});
				}

calcRoute();
$('#results').hide();
$('#results').show();

var target_address = $('#destination_address').html();
$('#destination_address_display').html('<br />'+target_address).trigger('create');
 

	return false;
});






 
// DIRECTIONS FROM CURRENT DEVICE LOCATION
// To Primary Business Location
$('#gps').click(function() {


 directionsDisplay.setMap(map);
 directionsDisplay.setPanel(document.getElementById('results'));
function calcRoute() {
 
	var start = latlngx;
	var end = $('#to').val();
	var request = {
		origin: start,
		destination: end,
		travelMode: google.maps.DirectionsTravelMode.DRIVING
		};
		directionsService.route(request, function(response, status) {
			if (status == google.maps.DirectionsStatus.OK) {
				directionsDisplay.setDirections(response);
				}
				});
				}

calcRoute();
$('#results2').hide();
$('#results').show();
//$('#destination_address_display').load('config.html #destination_address');
 var target_address = $('#destination_address').html();
$('#destination_address_display').html('<br />'+target_address).trigger('create');


	return false;
});

// To Secondary Business Location
$('#gps2').click(function() {


 directionsDisplay.setMap(map);
 directionsDisplay.setPanel(document.getElementById('results2'));
function calcRoute() {
 
	var start = latlngx;
	var end = $('#to2').val();
	var request = {
		origin: start,
		destination: end,
		travelMode: google.maps.DirectionsTravelMode.DRIVING
		};
		directionsService.route(request, function(response, status) {
			if (status == google.maps.DirectionsStatus.OK) {
				directionsDisplay.setDirections(response);
				}
				});
				}

calcRoute();
$('#results').hide();
$('#results2').show();
//$('#destination_address_display2').load('config.html #destination_address2');
 var target_address = $('#destination_address2').html();
$('#destination_address_display2').html('<br />'+target_address).trigger('create');
	return false;
});
		  
		  
 		  
	 //  $('#map_canvas_1').gmap('refresh');			 
				



  // end loadit

 //end get mobile location 

} // end function mapload
						
						
						function galleryload() {
						
						 window.slider = new Swipe(document.getElementById('slider'), {
							 startSlide: 0,
							 speed: 400,
							 auto: 3000, 
							 callback: function(event, index, elem) {
								 //alert(elem.child("div").innerHTML);
								 }
							});

						
						}
						// end function galleryload

});






// $( document ).delegate("#gallerypage", "pageinit", function() {
 // var maxwidth=$(window).width();
 //var maxheight=($(window).height())-50;
 
 //alert(maxwidth+' '+maxheight+'<br >'+screen.width+' '+screen.height);
 // $('#gallery_content').css({'padding': '0px'});
  // $('div#gallerypage.ui-page div#gallery_content.ui-content div#slider.swipe div.swipe-wrap div div img').css({'height': maxheight});
 
 //});



