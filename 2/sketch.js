
   var S=1,
       I=0,
       R=0,
       S1=1;
       RAND1='#e86584',
       RAND2='#3c5979';
       click=false;
       keys=true;
       N=4;
       T=0;

function setup() {
  createCanvas(250, 250);
  angleMode(DEGREES);
  background(235);
}

function draw() {

 var L=2000,//lungezza lato Triangolo
     h=((sqrt(3))/2)*L; //Altezza Triangolo

 T++;
 S1=S1+(S1/100);

 fill("black")
 noStroke()

 translate(width/2,(height/2)/*+((2*h/3)-(h/2))*/)  //Centra il Triangolo;


if (keys==false) {rotate(T); scale(S1)}

if (click==true) {

 if (T % 50 == 0) {RAND1=[random(255),random(255),random(255)];RAND2=[random(255),random(255),random(255)]}

 for (I,S,R;  I<100;  I++/*, R+=5, S=S+1*/ ) {

  if (I % 2 == 0) {fill(RAND1)} else {fill(RAND2)}

  if (N==3) {scale(0.85)} else {scale(0.916)}
  rotate(-5)

  polygon(0, 0, L, N)

 }
}

else {

 for (I,S,R;  I<100;  I++/*, R+=5, S=S+1*/ ) {



  if (N==3) {scale(0.85)} else {scale(0.916)}
  rotate(-5)

  if (I % 2 == 0) {fill("black")} else {fill("white")}

  polygon(0, 0, L, N)

 }
}

if (I==100) {I=0,S=1}
if (T==518) {S1=1,T=0}
//console.log(T);


/*if (first==true) {
fill("red")
 textBuffer.text("Click anywhere to toggle Psyicadelic mode", 50,250);
}
*/

}

function mouseClicked() {click=!click; /*first=false*/}

function keyTyped() {
  if (key === 'w') {N++}
  else if (key === 'q') {if (N==3) {} else {N--}}
  else {keys=!keys;}
}


function polygon(x, y, radius, npoints) {
  var angle = 360 / npoints;
  beginShape();
  for (var a = 0; a < 360; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
