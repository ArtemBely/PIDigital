var burger = document.getElementById('burger_menu');
var line1 = document.getElementById('first_b');
var line2 = document.getElementById('second_b');
var mobile = document.getElementById('mobile_m');
burger.addEventListener('click', () => {
  line1.classList.toggle('rotate1');
  line2.classList.toggle('rotate2');
  mobile.classList.toggle('move_mobile1');
});


var lines = document.getElementById('lines1');
var num = 99;

function secvention() {
  num++;
  var source = `./public/images/lines/Lines${num}.png`;
  lines.src = source;
  if(num < 152) {
    requestAnimationFrame(secvention);
  }
}

window.addEventListener('load', () => {
  secvention();
});
