var hr, mn, sc;
var hrAngle, mnAngle, scAngle

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)
}

function draw() {
  background(255,255,255);  
  
  
  translate(200,200);
  rotate(-90)

  //calculate time using predefined function from p5.js

  hr=hour()
  mn=minute()
  sc=second()

  //to create iterative rotation

  scAngle= map(sc,0,60,0,360);
  mnAngle= map(sc,0,60,0,360);
  hrAngle=map(hr%12,0,12,0,360);
  
  //drawing second hand

  push();
  rotate(scAngle)
stroke("red")
strokeWeight(7);
line(0,0,100,0);
pop()

//drawing minuste hand

push();
rotate(mnAngle)
stroke("blue")
strokeWeight(7);
line(0,0,75,0);
pop()

//drawing hour hand

push();
rotate(hrAngle)
stroke("green")
strokeWeight(7);
line(0,0,50,0);
pop()

stroke("yellow")
point(0,0)

//drawing arcs

strokeWeight(10)
noFill();

//seconds

stroke("red")
arc(0,0,300,300,0,scAngle)

//minutes

stroke("blue")
arc(0,0,280,280,0,mnAngle)

//hour

stroke("green")
arc(0,0,260,260,0,hrAngle)


  drawSprites();

}