$(document).ready(function(){
    
   
    
    var map;
    var ajaxRequest;
    var plotlist;
    var plotlayers=[];

 
    function initmap() {
        // set up the map
        map = new L.Map('mapProduct');

        // create the tile layer with correct attribution
        var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        var osm = new L.TileLayer(osmUrl, {minZoom: 15, maxZoom: 19});       

        // start the map in 
        map.setView(new L.LatLng(50.42016,30.50178), 18);
        map.addLayer(osm);
    }

    initmap(); 
});