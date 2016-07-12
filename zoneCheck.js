var map;
var regWindow;

  
function initialize() {
	geocoder = new google.maps.Geocoder();
  
	
		
	//Start with Regina's long lat..
	var latlng = new google.maps.LatLng(50.4547 , -104.6067);
	var mapOptions = {
		zoom: 12,
		center: latlng
	}
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	
	
	regWindow = new google.maps.InfoWindow({
		content: contentString
	});

	var latlng = new google.maps.LatLng(50.438291, -104.789580);
	var marker = new google.maps.Marker({
		position: latlng,
		map: map,
		title: 'Reg Info'
	});

	regWindow.open(map,marker);
  
}

function zoneCheck()
{

	var textAddress= document.getElementById("idTextAddress");
	var geocoder = new google.maps.Geocoder();	
    
	//alert ("ADDR: " + textAddress.value);
	geocoder.geocode({'address': textAddress.value}, function(results, status) {
    
	
	if (status === google.maps.GeocoderStatus.OK) {
      alert('Geocode successful ');
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
	
	
	
	

	
	
}


