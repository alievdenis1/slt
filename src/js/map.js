var initMap = function(){
	// Координаты центра на карте. Широта: 56.2928515, Долгота: 43.7866641
	var centerLatLng = new google.maps.LatLng(43.589247, 39.757548);
	// Обязательные опции с которыми будет проинициализированна карта
	var mapOptions = {
        streetViewControl: false,
        mapTypeControl : false,
		center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
        zoom: 16,             // Зум по умолчанию. Возможные значения от 0 до 21
        styles:[
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "gamma": 0.25
                    }
                ]
            }
        ]
    };

	// Создаем карту внутри элемента #map
    var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions); 
    
    
    var marker = new google.maps.Marker({

        // Определяем позицию маркера
        position: {lat: 43.589247, lng: 39.757548},
    
        // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
        map: map,
    
        // Пишем название маркера - появится если навести на него курсор и немного подождать
        title: 'SLT'
    });
};
initMap();