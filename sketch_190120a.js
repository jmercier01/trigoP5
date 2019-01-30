let nb;
let cotes;
let theta;
let position;

function setup() {
	createCanvas(windowWidth,windowHeight);
	
	position = createVector(100, 100);
	theta = 0;
	cotes=7;
	stroke(0);
	thetav = createVector(cos(TWO_PI/cotes)*position.x/2,sin(TWO_PI/cotes)*position.x/2); 
//   
//   

}

function draw() {
	background("#FFA74E");
	translate(width/2,height/2);
	fill(19,139,178);
	stroke(78,211,255);
	ellipse(0,0,position.x,position.y);

	for(var i=0; i < cotes; i++){
    line(cos(i*(TWO_PI/cotes))*position.x/2,sin(i*(TWO_PI/cotes))*position.x/2,cos((i+1)*(TWO_PI/cotes))*position.x/2,sin((i+1)*(TWO_PI/cotes))*position.x/2);
  }
}