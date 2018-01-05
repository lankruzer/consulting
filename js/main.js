$(document).ready(function () {
	$("input[type='tel']").mask("+7 (999) 999-99-99");
	
	/*
		slider personal
	*/
	$('.block-with-slick').slick({
		slidesToShow: 4,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3	
				}
			}, {
				breakpoint: 768,
				settings: {
					slidesToShow: 2	
				}
			}, {
				breakpoint: 550,
				settings: {
					slidesToShow: 1	
				}
			}
		]
	})
	
	/*
		mobile menu
	*/
	$(".btn-mobile-menu").click(function(event) {
		$(this).toggleClass("active");
		$("nav").slideToggle(500);	
	})
	
	$("nav ul").append('<li class="insert-link-header-contacts"></li>');
	$(".link-header-contacts").clone().appendTo($(".insert-link-header-contacts"));
	
	/*
		map
	*/
	if(document.querySelector(".map")) {
		google.maps.event.addDomListener(window, 'load', init);

		function init() {
			var mapOptions = {
				zoom: 16,
				scrollwheel: false,
				mapTypeControl: false,
				center: new google.maps.LatLng(55.770811, 37.681957),
				styles: [{ "featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}]
			};

			var mapElement = document.getElementById('map');
			var map = new google.maps.Map(mapElement, mapOptions);
			var image = "img/icon-contacts-map-logo.png";

			var marker1 = new google.maps.Marker({
				position: new google.maps.LatLng(55.770811, 37.681957),
				map: map,
				icon: image,
			});
		};
	}
	
});