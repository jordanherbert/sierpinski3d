function addmore2(){
gen2();
}

let radio;
function burrito1(){
radio = createRadio();
radio.position(width/3,height/3);
   radio.class("bord");
  radio.option('Start',1);
  radio.option('Reset',2);
}

function drawburrito1(){
	var val = radio.value();
  switch(val){
case '1': start();break;
case '2': reset();break;
}
}

function start(){
	if(radio.value()==1){can.mousePressed(addmore2);}
}

function reset(){
	background(0,204,204);
	//let subsees = subset(sees,sees.length-1,1);
	sees=[];//setup();
	sees.push(new sclass(v1,v2,v3,v4));
	sees[0].show(0)
}

let radio2;
function burrito2(){
radio2 = createRadio();
radio2.position(width/3,7*height/16);
   radio2.class("bord");
  radio2.option('Rotate X',4);
  radio2.option('Rotate Y',5);
  radio2.option('Rotate Z',6);
  radio2.option('Rotate XY',7);
  radio2.option('Rotate XZ',8);
  radio2.option('Rotate YZ',9);
  radio2.option('Rotate XYZ',10);
  radio2.style('width','96px');
}

function drawburrito2(){
var val2 = radio2.value();
  if(val2){
  switch(val2){
case '4': rotateX(ang);break; //x
case '5': rotateY(ang);break; //y
case '6': rotateZ(ang);break; //z
case '7': rotateY(ang);rotateX(ang);break; //xy
case '8': rotateZ(ang);rotateX(ang);break; //xz
case '9': rotateY(ang);rotateZ(ang);break; //yz
case '10':rotateY(ang);rotateX(ang);rotateZ(ang);break;//xyz
	}
  }
}