$(document).ready(function() {
	var inTouch = document.getElementById('inTouch');
	//E-mail Ajax Send
	$("#order_our1").submit(function() { //Change
		$("#order_our1").addClass("form_get_submitted");
		$("#inTouch").addClass("in_touch_submitted");
		$(".wrap_down_inp").addClass("wrap_inp_submitted");
		$(".wrap_inp").addClass("wrap_inp_submitted");
		$("#sub_request").addClass("show_sub_request");
    swal({
    text: "Message was sent. Our team will contact you soon.",
    button: "OK"
    });
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
      console.log('done');
			setTimeout(function() {
				// Done Functions

				th.trigger("reset");
			}, 1000);
		});

		return false;
	});
});


var box = document.getElementById('box1');
var squiggle = document.querySelectorAll('.squiggle');
var squiggle2 = document.querySelectorAll('.squiggle2');
var wall = document.getElementById('wall');

window.addEventListener('scroll', () => {
  if(box.getBoundingClientRect().top < window.innerHeight) {
    squiggle.forEach(item1 => {
      item1.classList.add('squiggle_anim');
    });
    squiggle2.forEach(item2 => {
      item2.classList.add('squiggle2_anim');
    });
    wall.classList.add('wall_animation');
  }
});


jQuery.preloadImages = function()
 {
  for(var i = 0; i < arguments.length; i++)
  {
   jQuery("<img>").attr("src", arguments[ i ]);
  }
 };

//указываем путь к изображению, которое нужно подгрузить
$.preloadImages("./public/images/lines/Lines100.png", "./public/images/lines/Lines101.png", "./public/images/lines/Lines102.png",
"./public/images/lines/Lines103.png", "./public/images/lines/Lines104.png", "./public/images/lines/Lines105.png", "./public/images/lines/Lines106.png",
"./public/images/lines/Lines107.png", "./public/images/lines/Lines108.png", "./public/images/lines/Lines109.png", "./public/images/lines/Lines110.png",
"./public/images/lines/Lines111.png", "./public/images/lines/Lines112.png", "./public/images/lines/Lines113.png", "./public/images/lines/Lines114.png",
"./public/images/lines/Lines115.png",
"./public/images/lines/Lines116.png", "./public/images/lines/Lines117.png", "./public/images/lines/Lines118.png", "./public/images/lines/Lines119.png",
"./public/images/lines/Lines120.png", "./public/images/lines/Lines121.png", "./public/images/lines/Lines122.png", "./public/images/lines/Lines123.png",
"./public/images/lines/Lines124.png", "./public/images/lines/Lines125.png", "./public/images/lines/Lines126.png", "./public/images/lines/Lines127.png",
"./public/images/lines/Lines128.png", "./public/images/lines/Lines129.png", "./public/images/lines/Lines130.png", "./public/images/lines/Lines131.png",
"./public/images/lines/Lines132.png",
"./public/images/lines/Lines133.png", "./public/images/lines/Lines134.png", "./public/images/lines/Lines135.png", "./public/images/lines/Lines136.png",
"./public/images/lines/Lines137.png",
"./public/images/lines/Lines138.png", "./public/images/lines/Lines139.png", "./public/images/lines/Lines140.png", "./public/images/lines/Lines141.png",
"./public/images/lines/Lines142.png", "./public/images/lines/Lines143.png", "./public/images/lines/Lines144.png", "./public/images/lines/Lines145.png",
"./public/images/lines/Lines146.png", "./public/images/lines/Lines147.png", "./public/images/lines/Lines148.png", "./public/images/lines/Lines149.png",
"./public/images/lines/Lines150.png", "./public/images/lines/Lines151.png", "./public/images/lines/Lines152.png");

var lines = document.getElementById('lines1');
var num = 99;
var fps = 50;


function secvention() {
  num++;
  var source = `./public/images/lines/Lines${num}.png`;
  lines.src = source;
	if(num < 152) {
			setTimeout(() => {
					ret = requestAnimationFrame(secvention);
			}, 1000/fps);
	}
}

window.onload = function () {
			secvention();
}


/*
var app1 = document.getElementById('app1');
var num = 99;
var fps = 10;

function secvention() {
  num++;
  var source = `./public/images/lines/Lines${num}.png`;
		if(num < 152) {
			setTimeout(() => {
				if(num > 99) {
					var fd = document.getElementById(`ids${num - 1}`);
					app1.removeChild(fd);
				}

					var e = new Image();
					e.src = source;
					e.id = `ids${num}`
				  app1.appendChild(e);
					ret = requestAnimationFrame(secvention);
			}, 1000/fps);
		}
}
*/
window.onload = function () {
			secvention();
}
