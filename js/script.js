jQuery(document).ready(function() {
	  $('.nav a').click(function(event) {
	  event.preventDefault();
	  var href=$(this).attr('href');
	  var target=$(href);
	  var top=target.offset().top;
	  $('html,body').animate({
	    scrollTop: top
	    }, 1200);	
	  });
  var myCenter=new google.maps.LatLng(51.488128,-0.165127);
function initialize(){
	var mapProp = {
	  center:myCenter,
	  zoom:15,
	  mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
	var marker=new google.maps.Marker({
	  position:myCenter,
	});
	marker.setMap(map);
}
	google.maps.event.addDomListener(window, 'load', initialize);
});