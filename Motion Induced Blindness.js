let x_c=100;
let y_c=100;
let count=0;
let theta=0;
let cross = [];
function setup()
{
	createCanvas(600,600);
	for(let i=0;i<9;i++)
	{
		x_c=100;
		cross[i]=[];
		for(let j=0;j<9;j++)
		{
			cross[i][j]=createVector(x_c,y_c);
			x_c+=50;
		}
		y_c+=50;
	}
}
function draw()
{
	frameRate(10);
	background(0);

	push();
	translate(width/2,height/2);
	rotate(theta);
	translate(-width/2,-height/2);
	
	stroke(0,0,255);
	strokeWeight(2);
	for(let i=0;i<9;i++)
	{
		for(let j=0;j<9;j++)
		{
			line(cross[i][j].x,cross[i][j].y,cross[i][j].x + 20,cross[i][j].y);
			line(cross[i][j].x,cross[i][j].y,cross[i][j].x - 20,cross[i][j].y);
			line(cross[i][j].x,cross[i][j].y,cross[i][j].x,cross[i][j].y + 20);
			line(cross[i][j].x,cross[i][j].y,cross[i][j].x,cross[i][j].y - 20);
		}
	}
	theta+=5;
	pop();
	stroke(225,225,0);
	strokeWeight(4);
	point(300,425);
	point(400,225);
	point(200,225);
	if(count%4===0)
	{
		stroke(0,255,120);
		strokeWeight(4);
		point(300,300);
	}
	count+=1;
}