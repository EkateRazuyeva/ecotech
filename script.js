ymaps.ready(function () { 
 
    const myMap = new ymaps.Map("map", {
        center: [53.902576, 27.561682],
        zoom: 13,
    });
 
    const myPlacemark = new ymaps.Placemark([53.902576, 27.561682], {
       
    });

    myMap.geoObjects.add(myPlacemark);
    
});