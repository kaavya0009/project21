var bullet,wall,thickness;
var speed, weight; 

thickness = random(28,83);




function setup() {
  createCanvas(1600, 400);


	speed=random(223,321);
	weight=random(30,52);


	bullet=createSprite(50, 200, 30, 7);   

	bullet.velocityX = speed;

	bullet.shapeColor=color("white");


  
  	wall=createSprite(1200,200, thickness, height/2)
  	wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);

  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
  	bullet.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22500;
	if(deformation>3.68)
	{
		wall.shapeColor=color("green");
	}

	if(deformation<12.43)
	{
		wall.shapeColor=color("red");
	}


  }  
  
  drawSprites();
 
}

