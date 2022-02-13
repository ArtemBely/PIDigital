var check1 = document.getElementById('check1');
check1.addEventListener('click', () => {
   check1.classList.toggle('fillBack');
});

var check2 = document.getElementById('check2');
check2.addEventListener('click', () => {
   check2.classList.toggle('fillBack');
});

var order_our1 = document.getElementById('order_our1');
var fone1 = document.getElementById('fone1');
var wrap_touch = document.getElementById('wrap_touch1');
window.addEventListener('scroll', () => {
  if(order_our1.getBoundingClientRect().top < window.innerHeight) {
    fone1.classList.add('fillGet');
  }
  else {
    fone1.classList.remove('fillGet');
  }
});

var scroll_to = document.getElementById('scroll_to');
scroll_to.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

var iphone1 = document.getElementById('iphone1');
var planch1 = document.getElementById('planch1');
var mac1 = document.getElementById('mac1');
var cust2 = document.getElementById('cust2');
window.addEventListener('scroll', () => {
  if(cust2.getBoundingClientRect().top < window.innerHeight) {
    iphone1.classList.add('moveLeft1');
  }
});
iphone1.addEventListener('transitionend', () => {
  planch1.classList.add('moveLeft2');
});
planch1.addEventListener('transitionend', () => {
  mac1.classList.add('moveLeft3');
});

var di_detector = document.getElementById('di_detector');
var logo11 = document.getElementById('logo11');
var logo22 = document.getElementById('logo22');
var eachHeader = document.querySelectorAll('.each_head');
var moveHeader = document.getElementById('moveHeader');

window.addEventListener('scroll', () => {
  if(di_detector.getBoundingClientRect().top < 0) {
    logo11.classList.add('closeHeader2');
    logo22.classList.add('changeHeader');
    let i;
    for(i=0; i<eachHeader.length; i++) {
      eachHeader[i].classList.add('changeColor');
    }
    moveHeader.classList.add('changeMovementOfHeader');
  }
  else {
    logo11.classList.remove('closeHeader2');
    logo22.classList.remove('changeHeader');
    let i;
    for(i=0; i<eachHeader.length; i++) {
      eachHeader[i].classList.remove('changeColor');
    }
    moveHeader.classList.remove('changeMovementOfHeader');
  }
});

var ic1 = document.getElementById('ic1');
var ic2 = document.getElementById('ic2');
var ic3 = document.getElementById('ic3');
var ic4 = document.getElementById('ic4');
var ic5 = document.getElementById('ic5');
var ic6 = document.getElementById('ic6');
var ic7 = document.getElementById('ic7');
var comp = document.getElementById('comp');
var plus = document.getElementById('plus');
var globus = document.getElementById('globus');
var money = document.getElementById('money');
var analys = document.getElementById('analys');
var crypt = document.getElementById('crypt');
var people1 = document.getElementById('people1');


ic1.addEventListener('mouseenter', () => {
  comp.style.fill = '#4FA0FF';
});
ic1.addEventListener('mouseout', () => {
  comp.style.fill = '#ffffff';
});
ic2.addEventListener('mouseenter', () => {
  plus.style.fill = '#4FA0FF';
});
ic2.addEventListener('mouseout', () => {
  plus.style.fill = '#ffffff';
});
ic3.addEventListener('mouseenter', () => {
  globus.style.fill = '#4FA0FF';
});
ic3.addEventListener('mouseout', () => {
  globus.style.fill = '#ffffff';
});
ic4.addEventListener('mouseenter', () => {
  money.style.fill = '#4FA0FF';
});
ic4.addEventListener('mouseout', () => {
  money.style.fill = '#ffffff';
});
ic5.addEventListener('mouseenter', () => {
  analys.style.fill = '#4FA0FF';
});
ic5.addEventListener('mouseout', () => {
  analys.style.fill = '#ffffff';
});
ic6.addEventListener('mouseenter', () => {
  crypt.style.fill = '#4FA0FF';
});
ic6.addEventListener('mouseout', () => {
  crypt.style.fill = '#ffffff';
});
ic7.addEventListener('mouseenter', () => {
  people1.style.fill = '#4FA0FF';
});
ic7.addEventListener('mouseout', () => {
  people1.style.fill = '#ffffff';
});
