let slider,slider1,slider2,slider3;
function setup() {
	createCanvas(windowWidth, windowHeight);
	let radius=30;
	let gap=10;
	let totCirc = 13;
	slider=createSlider(5,gap,1);
	slider.position(10,10);
	slider1=createSlider(radius,45,5);
	slider1.position(width-200,10);
	slider2=createSlider(totCirc,23,1);
	slider2.position(width/2-100,10);
	slider3=createSlider(200,360,50);
	slider3.position(10,30);
}

function draw() {
	background(255);
	strokeWeight(2);
	let rad = slider1.value();
	let val = slider.value();
	let tot = slider2.value();
	let lent = slider3.value();
	push();
	translate(width/2,height/2);
	rotate(PI/4);
	rectMode(CENTER);
	rect(0,0,lent,lent);
	translate(-width/2,-height/2);
	pop();
	ellipseMode(CENTER);
	stroke(51);
	noFill();
	for(let i=0;i<tot;i++)
	{
		ellipse(width/2,height/2,2*rad);
		rad+=val;
	}
}