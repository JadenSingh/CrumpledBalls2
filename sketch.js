
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var ground1, paper1, dustbin1;
var paperObj, dustbinObj;
function preload()
{
	
}

function setup() {
	createCanvas(1100, 700);
	engine = Engine.create();
	world = engine.world;

	ground1 = new ground(550,590,1100,10);
	
	paper1 = new paper(200,200,20)

	dustbin1 = new dustbin(900,580,200,10)
	dustbin2 = new dustbin(710,540,10,100)
	dustbin3 = new dustbin(1000,540,10,100)

	dustbinObj= new dustbin(900,540,200,200)




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(240);
  Engine.update(engine)
  ground1.display();
  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  dustbinObj.display();
}
function keyPressed(){
if(keyCode === UP_ARROW){

Matter.Body.applyForce(paper1.body, paper1.body.position,{x:80,y:-150})

}


}



