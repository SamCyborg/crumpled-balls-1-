var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var crumpledPaper,box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
    engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	 
	//Create a Ground
	ground = new Ground(600, 650, 1200, 20);
    crumpledPaper = new Paper(300,400);
	box1=new LogsOfBin(1000,240,300,20,"purple");
	box2=new LogsOfBin(860,200,20,100,"purple");
	box3=new LogsOfBin(1140,200,20,100,"purple");

	 
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  crumpledPaper.display();
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:140,y:-140})
	}
}
 


