const menu = document.querySelector('#mobile-menu')
const menuLinks =  document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});


var c = document.getElementById('canv') 
var w = c.width = window.innerWidth;
var h = c.height = window.innerHeight;
var $ = c.getContext("2d");

function draw(c1, c2, s, rat, _x, _y){
	var x=0, y=0;
	var col = 0, split = rat/100;
	while (x<=w){
		while(y<=h){
		  col = Math.random();
        if(col<split) $.fillStyle = c1;
        else $.fillStyle = c2;
			geo(x,y,s);
			y+=(s*1.0)+(_y*1.0);
		}
		  x+=(s*1.0)+(_x*1.0); y=0;    
    } 
  txt();
}
function geo(x, y, l){
	$.save();
	$.translate(x,y);
	$.rotate(Math.floor(Math.random()*4)*(Math.PI/2));
  $.shadowColor = 'hsla(0,0%,65%,.5)';
  $.shadowBlur = Math.random()*100;
  $.shadowOffsetX = 1;
  $.shadowOffsetY = 1;
	$.beginPath();
	$.lineTo(l,-l);
	$.lineTo(l,0);
	$.lineTo(0,l);
	$.lineTo(-l,0);
	$.lineTo(-l,-l);
	$.lineTo(0,0);
	$.closePath();
	$.fill();
	$.restore();
}
draw('hsla(0,0%,95%,1)', 'hsla(0,0%,90%,1)', 100, 55, 0, 0); 
function txt() {
  var t   =  "THE SURFACE".split("").join(String.fromCharCode(0x2004));
  $.font = "3.5em Fredericka the Great";
  $.fillStyle = 'hsla(0, 0%, 80%, 1)';
  $.shadowColor = 'hsla(0, 0%, 10%, .7)';
  $.shadowBlur = 2;
  $.shadowOffsetX = 4;
  $.shadowOffsetY = 3;
  $.fillText(t, (c.width - $.measureText(t).width) * 0.5, c.height * 0.5);
}
/*.....Randomize on click /tap.......*/
window.addEventListener('mousedown',function(e){
  e.preventDefault();
  draw('hsla(0,0%,95%,1)', 'hsla(0,0%,90%,1)', 100, 55, 0, 0); 
}, false);

window.addEventListener('touchstart',function(e){
  e.preventDefault();
  draw('hsla(0,0%,95%,1)', 'hsla(0,0%,90%,1)', 100, 55, 0, 0); 
}, false);

/*.....Resize.......*/
window.addEventListener('resize',function(){
  c.width = w = window.innerWidth;
  c.height = h = window.innerHeight;
  draw('hsla(0,0%,95%,1)', 'hsla(0,0%,90%,1)', 100, 55, 0, 0); 
},false);

/* Bubble System */

/* ----- */




// Some random colors
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("hero");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});

