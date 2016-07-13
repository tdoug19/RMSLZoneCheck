
var poly
var map;

var polyOptions = {
		strokeColor: '#000000',
		strokeOpacity: 1.0,
		strokeWeight: 3
	};

var regWindow;

//Zone Vars
var zone1 = {
	active: false, 				//Indicates if we are building that zone or not.
	coordinates: new Array(),		//Keeps track of the zone coords
	boundary: new google.maps.Polyline(polyOptions) ,					//the polyline that contains the boundary 
	coordsCount: 0,				// Keeps track of how many points outline the zone
	shape: null,							//Polygon representing the zone1.
	locations: new Array(),		//Keeps track of regs in zone1
	birthDates: new Array(),
	divisionNumbers: new Array(),
	geoCode: new Array,           //Lat and Lng of each registrant of zone 1
	name: "Zone 1"
	};


var zone2 = {
	active: false, 				//Indicates if we are building that zone or not.
	coordinates: new Array(),		//Keeps track of the zone coords
	boundary: new google.maps.Polyline(polyOptions) ,					//the polyline that contains the boundary 
	coordsCount: 0,				// Keeps track of how many points outline the zone
	shape: null,							//Polygon representing the lazers zone.
	locations: new Array(),		//Keeps track of regs in zone 1
	birthDates: new Array(),
	divisionNumbers: new Array(),
	geoCode: new Array,           //Lat and Lng of each registrant of Zone 1
	name: "Zone 2"
	};	


  
function initialize() {

	createZones();




  
}

function zoneCheck()
{

	var textAddress= document.getElementById("idTextAddress");
	var geocoder = new google.maps.Geocoder();	
    
	//alert ("ADDR: " + textAddress.value);
	geocoder.geocode({'address': textAddress.value}, function(results, status) {
    
	
		if (status === google.maps.GeocoderStatus.OK) {
			console.log('Geocode successful ');
		} else {
			console.log('Geocode was not successful for the following reason: ' + status);
		}

		var lat = results[0].geometry.location.lat();
		var lng = results[0].geometry.location.lng();
	
	
		if( zone1.shape.containsLatLng(lat,lng))
		{
			console.log("You are in Zone 1");
		}
		else
		{
			console.log("Probably in Zone 2");
		}




	});
	

	
	
}

function createZones()
{
		
	// The followign creates the polygon shape for the zones.  This is 
	// current to 2016.  This could be read from a file in the future.
	//
		
	zone1.coordinates[0] = new google.maps.LatLng(50.484,-104.709);
	++zone1.coordsCount;
	zone1.coordinates[1] = new google.maps.LatLng(50.397,-104.688);
	++zone1.coordsCount;
	zone1.coordinates[2] = new google.maps.LatLng(50.397,-104.502);
	++zone1.coordsCount;
	zone1.coordinates[3] = new google.maps.LatLng(50.472,-104.503);
	++zone1.coordsCount;
	zone1.coordinates[4] = new google.maps.LatLng(50.450,-104.623);
	++zone1.coordsCount;
	zone1.coordinates[5] = new google.maps.LatLng(50.445,-104.672);
	++zone1.coordsCount;
	zone1.coordinates[6] = new google.maps.LatLng(50.465,-104.673);
	++zone1.coordsCount;
	zone1.coordinates[7] = new google.maps.LatLng(50.475,-104.664);
	++zone1.coordsCount;
	zone1.coordinates[8] = new google.maps.LatLng(50.484,-104.664);
	++zone1.coordsCount;
	zone1.coordinates[9] = new google.maps.LatLng(50.484,-104.708);
	++zone1.coordsCount;
	
	
	zone1.shape = new google.maps.Polygon({
						paths: zone1.coordinates,
						strokeColor: '#FFFF00',
						strokeOpacity: 0.8,
						strokeWeight: 3,
						fillColor: '#FFFF00',
						fillOpacity: 0.15
						});
	
	
	
	if( zone1.shape.containsLatLng(50.419,-104.529))
	{
		console.log("Zone 1 test OK");
	}
	else
	{
		console.log("Zone 1 false");
	}


	zone2.coordinates[0] = new google.maps.LatLng(50.484,-104.710);
	++zone2.coordsCount;
	zone2.coordinates[1] = new google.maps.LatLng(50.484,-104.664);
	++zone2.coordsCount;
	zone2.coordinates[2] = new google.maps.LatLng(50.475,-104.664);
	++zone2.coordsCount;
	zone2.coordinates[3] = new google.maps.LatLng(50.465,-104.672);
	++zone2.coordsCount;
	zone2.coordinates[4] = new google.maps.LatLng(50.445,-104.673);
	++zone2.coordsCount;
	zone2.coordinates[5] = new google.maps.LatLng(50.451,-104.619);
	++zone2.coordsCount;
	zone2.coordinates[6] = new google.maps.LatLng(50.461,-104.562);
	++zone2.coordsCount;
	zone2.coordinates[7] = new google.maps.LatLng(50.472,-104.504);
	++zone2.coordsCount;
	zone2.coordinates[8] = new google.maps.LatLng(50.513,-104.503);
	++zone2.coordsCount;
	zone2.coordinates[9] = new google.maps.LatLng(50.513,-104.710);
	++zone2.coordsCount;
	zone2.coordinates[10] = new google.maps.LatLng(50.484,-104.711);
	++zone2.coordsCount;
	
	
	zone2.shape = new google.maps.Polygon({
						paths: zone2.coordinates,
						strokeColor: '#FFFF00',
						strokeOpacity: 0.8,
						strokeWeight: 3,
						fillColor: '#0000FF',
						fillOpacity: 0.15
						});

	if( zone2.shape.containsLatLng(50.495,-104.663))
	{
		console.log("Zone 2 check ok");
	}
	else
	{
		console.log("Zone 2 false");
	}

	
	zoneCheck();
}



