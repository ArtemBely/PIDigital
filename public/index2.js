$(document).ready(function() {

	//E-mail Ajax Send
	$("#order_our1").submit(function() { //Change
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
