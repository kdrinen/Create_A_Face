var a = 20;

var position = 250;

function setup() {
createCanvas(windowWidth, windowHeight);
background(150)
smooth()
c = color(random(0,255),random(0,255),random(0,255))
c2 = color(random(0,255),random(0,255),random(0,255))
c3 = color(random(0,255),random(0,255),random(0,255))
dia1 = random(50,250)
dia2 = random(50,250)
dia3 = random(50,250)
dia4 = random(50,250)
dia5 = random(50,250)

}


function draw() {

// background(150)

if (mouseIsPressed){
  fill(c2, 150);
} else{
  fill(c3, 150);
}
stroke(0)
ellipse(mouseX, mouseY, 100, 100);
ellipse(mouseX, mouseY, 80, 80);
ellipse(mouseX, mouseY, 60, 60);
ellipse(mouseX, mouseY, 40, 40);
ellipse(mouseX, mouseY, 20, 20);


fill(0, 176, 28)
stroke(0, 48, 5)
strokeWeight(7)
beginShape();
vertex(830, 200);
bezierVertex(280, 180, 700, 590, 515, 580);
bezierVertex(380, 380, 800, 990, 515, 580);
endShape(CLOSE);

stroke(0, 48, 5)
strokeWeight(2)
fill(0, 176, 28)
rect(130, 350, 550, 550, 210, 210, 10, 10);

stroke(0, 48, 5)
strokeWeight(2)
fill(0, 48, 5)
rect(200, 400, 400, 400, 210, 210, 10, 10);

stroke(0, 48, 5)
strokeWeight(3)
fill(0, 176, 28)
ellipse(400,200,400,400)

// if (mouseX < 450){grow = mouseX
// }else{
//   grow = 450)
// }

position = position + 1

if (position > 800) {position-1}

stroke(0, 48, 5)
strokeWeight(3)
fill(0, 176, 28)
ellipse(430,500, position,200)


noStroke()
fill(0, 48, 5)
ellipse(430,520,position-60,140)

noStroke()
fill(255, 255, 255)
triangle(230, 510, 258, 560, 286, 510);

noStroke()
fill(255, 255, 255)
triangle(520, 510, 548, 560, 576, 510);

stroke(0, 48, 5)
strokeWeight(6)
fill(0, 176, 28)
ellipse(400,250,350,200)
ellipse(400,300,400,200)
ellipse(400,400,500,300)

//nostrils
stroke(0, 48, 5)
strokeWeight(a)
point(250,400)
point(550,400)
//

//Eyes
if (mouseIsPressed){
  stroke(0, 48, 5)
  strokeWeight(3)
  fill(0, 176, 28)
  rect(430, 80, 55, 55, 15, 25, 5, 5)
  rect(330, 75, 65, 65, 25, 15, 5, 5)
  ;
}else{
noStroke()
fill(255, 255, 255)
rect(430, 80, 55, 55, 15, 25, 5, 5)
rect(330, 75, 65, 65, 25, 15, 5, 5)
;

noStroke()
fill (c)
rect(435, 95, 40, 40, 15, 25, 5, 5)
rect(340, 90, 50, 50, 25, 15, 5, 5)
;

noStroke()
fill(0)
rect(437, 100, 35, 35, 15, 25, 5, 5)
rect(343, 95, 45, 45, 25, 15, 5, 5)
;

stroke(255, 255, 255)
strokeWeight(20)
point(378,98)
strokeWeight(15)
point(465,103)

stroke(255, 255, 255)
strokeWeight(7)
point(360,120)
strokeWeight(4)
point(450,120)
}
//
stroke(0, 48, 5)
strokeWeight(3)
noFill()
arc(250, 400, 80, 80, -10, 120, PI+QUARTER_PI, OPEN)
arc(550, 400, 80, 80, -10, 120, PI+QUARTER_PI, OPEN)



noStroke();
fill(0, 48, 5)
quad(600, 235, 620, dia1, 630, 221, 615, 197);
quad(640, 215, 660, dia2, 670, 211, 655, 206);
quad(680, 210, 700, dia3, 710, 206, 695, 198);
quad(720, 205, 740, dia4, 750, 203, 735, 193);
quad(760, 200, 780, dia5, 790, 203, 775, 193);

}



function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}
