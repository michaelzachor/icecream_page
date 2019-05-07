 var myFullPage = new fullpage('#fullpage', {
			// //options here
			// sectionsColor: ['yellow', 'orange', 'blue']
		});

var origColor = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #edc607, 0 0 30px #edc607, 0 0 40px #edc607, 0 0 55px #edc607, 0 0 75px #edc607";

function neonBlink() {
  var x = document.getElementById('maintitle');

  setInterval(function(){
  	if (x.style.textShadow != "") {
  		x.style.textShadow = "";
  	} else {
  		x.style.textShadow = origColor;
  	}
  }, 400)
}

neonBlink();
