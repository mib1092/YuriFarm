$('#findModal-btn').click(function(){
    
   
    
    var map;
    var ajaxRequest;
    var plotlist;
    var plotlayers=[];

 
    function initmap() {
        
        
        // set up the map
        map = new L.Map('mapProduct');

        // create the tile layer with correct attribution
        var osmUrl='http://tile.openstreetmap.org/{z}/{x}/{y}.png';
        var osm = new L.TileLayer(osmUrl, {minZoom: 15, maxZoom: 19});       

        // start the map in 
        map.setView(new L.LatLng(50.42016,30.50178), 18);
        map.addLayer(osm);

        var icon = L.icon({
            iconUrl: 'img/1.png',
            iconSize: [17, 17], // size of the icon
        });
        var marker = L.marker([50.42016,30.50178], {icon: icon}).addTo(map);
        marker.bindPopup("<h5 class='pharmacy_name'>Аптека Аптека</h5><p class='work-time'>8.00 - 23.00</p><p class='pharmacy_phone'>0 (800) 50 30 01</p><p class='pharmacy_link'><a href='#'>mega-apteka.com</a></p> <p class='pharmacy_address'>Киев,  ул. Антоновича 43</p>");
    }

                           
                            
                            
                            
    setTimeout(initmap, 1500);
     
});
