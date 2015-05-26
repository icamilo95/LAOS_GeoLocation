$(document).ready(function(){
 
   if( navigator.geolocation )
    navigator.geolocation.getCurrentPosition(success, fail);
   else
    $("p").html("HTML5 Not Supported");
 
});
 
function success(position)
{
   var googleLatLng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
   var mapOtn={
      zoom:14,
      center:googleLatLng,
      mapTypeId:google.maps.MapTypeId.ROAD
   };
 
   var Pmap=document.getElementById("map");
 
   var map=new google.maps.Map(Pmap, mapOtn);
   addMarker(map, googleLatLng, "User's name", 
                  "LAOS<br /><b>About Me:</b>Some other Text");
}
 
function addMarker(map, googleLatLng, title, content){
   var markerOptn={
   position:googleLatLng,
   map:map,
   title:title,
   // icon: 'img/Cami.jpg',
   animation:google.maps.Animation.DROP
};
 
   var marker=new google.maps.Marker(markerOptn);
 
   var infoWindow=new google.maps.InfoWindow({ content: content,position: googleLatLng});
    google.maps.event.addListener(marker, "click", function(){
      infoWindow.open(map);
   });                                       
}
 
function fail(error)
{
   var errorType={
      0:"Unknown Error",
      1:"Permission denied by the user",
      2:"Position of the user not available",
      3:"Request timed out"
   };
 
   var errMsg = errorType[error.code];
 
   if(error.code === 0 || error.code === 2){
      errMsg = errMsg+" - "+error.message;
   }
 
   $("p").html(errMsg);
}