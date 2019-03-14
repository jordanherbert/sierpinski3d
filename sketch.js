let sees=[];
let v1,v2,v3,v4;
let can;
let s;

function setup(){
	s=100;
    angleMode(DEGREES);
	can=createCanvas(800,550,WEBGL);
	can.position(windowWidth/8,windowHeight/8);
	can.class("bord");

	p=createP("Click play to start the 3D magic. This is Sierpinski's Fractal in 3 Dimensions.");
	p.position(can.x+32.5,can.y+17.5);
	p.class("bord");
    
	burrito1();
	burrito2();
	
	anch=select('#sier');
	anch.position(0,0);
	anch.class("bord");

	v1=createVector(s,s,s);
	v2=createVector(s,s*-1,s*-1);
	v3=createVector(s*-1,s,s*-1);
	v4=createVector(s*-1,s*-1,s);

	sees.push(new sclass(v1,v2,v3,v4));
	strokeWeight(3);
}
let ang=0;
function draw(){
	drawburrito1();
	drawburrito2();
	background(0,204,204);
	for(j=0;j<sees.length;j++){
		sees[j].show();
	}

	ang+=3;
  //p.html(radio2.value());
}