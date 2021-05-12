
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var bin1;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;
	

paper1 = new Paper(20, 450, 70);
bin1= new Dustbin(1020,547,200,20);



ground=new Ground(0,570, 1300,20)
	

	Engine.run(engine);
	
  
}


function draw() {
	background("white");
	
	Engine.update(engine);
   
bin1.display();

ground.display();
paper1.display();



  
  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:130,y:-145});

  
	}
}




 