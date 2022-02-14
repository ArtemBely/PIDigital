var burger = document.getElementById('burger_menu');
var line1 = document.getElementById('first_b');
var line2 = document.getElementById('second_b');
var mobile = document.getElementById('mobile_m');
burger.addEventListener('click', () => {
  line1.classList.toggle('rotate1');
  line2.classList.toggle('rotate2');
  mobile.classList.toggle('move_mobile1');
});
