setTimeout(function function_name(argument) {
	document.getElementById("welcome-text").style.display = "none";
	document.getElementById("places-text").style.display = "block";
},3000);

setTimeout(function function_name(argument) {
	document.getElementById("places-text").style.display = "none";
	document.getElementById("countries-text").style.display = "block";
},5000);

setTimeout(function function_name(argument) {
	document.getElementById("countries-text").style.display = "none";
	document.getElementById("travel-text").style.display = "block";
},7000);

setTimeout(function function_name(argument) {
	document.getElementById("travel-text").style.display = "none";
	document.getElementById("love-text").style.display = "block";
	$('.animation-container').addClass(" animated fadeOut");
},9000);

setTimeout(function function_name(argument) {
	document.getElementById("animation-container").style.display = "none";
	document.getElementById("main-container").style.display = "block";
},10500);

function menuBtn() {
        $('.menu-content').addClass("animated fadeIn");
        //document.getElementById("body-container").style.display = "none";
        document.getElementById("menu-container").style.display = "block";
        $('.menu-animation').addClass(" animated fadeInUp");
        $('.cross-menu-btn').addClass(" animated fadeInUp");
      }
function crossBtn() {

        //document.getElementById("body-container").style.display = "block";
        document.getElementById("menu-container").style.display = "none";
      }
