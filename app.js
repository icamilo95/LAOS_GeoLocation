$(document).ready(function(){
 
   if( navigator.geolocation )
    navigator.geolocation.getCurrentPosition(success, fail);
   else
    $("p").html("HTML5 Not Supported");
 
});
 
function success(position)
{

   var googleLatLng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude );

   var mapOtn = {
      // form 10 to 21
      zoom: 14,
      center: googleLatLng,
      mapTypeId: google.maps.MapTypeId.ROAD
   };

   var Pmap= document.getElementById("map");
   

   var map= new google.maps.Map(Pmap, mapOtn);
   addMarker(map,googleLatLng, "Camilo");
}

function addMarker (map, googleLatLng, title){
   var markerOptn = {
      position: googleLatLng,
      map: map,
      title: title,
      // icon: 'img/Cami.jpg',
      animation: google.maps.Animation.DROP
   };

   var marker = new google.maps.Marker(markerOptn);
}

function fail (error){
   console.log(error);
   var errorType = {
      0: "Unknown Error",
      1: "Permission denied by the user",
      2: "Position of the user not available",
      3: "Reuqest timed out"
   };

   var errMsg = errorType[error.code];

   if (error.code === 0 || error.code === 2) {
      errMsg = errMsg + " - " + error.message;
   }

   $('p').html(errMsg);
}
