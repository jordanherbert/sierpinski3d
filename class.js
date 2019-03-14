class sclass{
	constructor(v1v,v2v,v3v,v4v){
		this.v1=v1v;
		this.v2=v2v;
		this.v3=v3v;
		this.v4=v4v;
	}
	
	vector1(){
		return this.v1;
	}

	vector2(){
		return this.v2;
	}
	
	vector3(){
		return this.v3;
	}
	
	vector4(){
		return this.v4;
	}
	
	show(){
		beginShape();
		vertex(this.v1.x,this.v1.y,this.v1.z);
		vertex(this.v2.x,this.v2.y,this.v2.z);
		vertex(this.v3.x,this.v3.y,this.v3.z);

		vertex(this.v1.x,this.v1.y,this.v1.z);
		vertex(this.v2.x,this.v2.y,this.v2.z);
		vertex(this.v4.x,this.v4.y,this.v4.z);

		vertex(this.v1.x,this.v1.y,this.v1.z);
		vertex(this.v3.x,this.v3.y,this.v3.z);
		vertex(this.v4.x,this.v4.y,this.v4.z);
		if(j%3==0){fill(255,0,0);}
		if(j%3==1){fill(0,255,0);}
		if(j%3==2){fill(0,0,255);}
		if(j%4==3){fill(0);}
		endShape();
	}
}

function middle(va,vb){
	let vmid;
	vmid=createVector((vb.x-va.x)/2+va.x,(vb.y-va.y)/2+va.y,(vb.z-va.z)/2+va.z);
	return vmid;
}

function gen2(){
	let next=[];
	for(let j=0;j<sees.length;j++){
		let vmid12=middle(sees[j].vector1(),sees[j].vector2());
		let vmid23=middle(sees[j].vector2(),sees[j].vector3());
		let vmid31=middle(sees[j].vector3(),sees[j].vector1());
		let vmid34=middle(sees[j].vector3(),sees[j].vector4());
		let vmid41=middle(sees[j].vector4(),sees[j].vector1());
		let vmid42=middle(sees[j].vector4(),sees[j].vector2());
		next.push(new sclass(sees[j].vector1(),vmid12,vmid31,vmid41));
		next.push(new sclass(sees[j].vector2(),vmid23,vmid12,vmid42));
		next.push(new sclass(sees[j].vector3(),vmid31,vmid23,vmid34));
		next.push(new sclass(sees[j].vector4(),vmid34,vmid41,vmid42));
	}
	sees=next;
}