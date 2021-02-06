
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,part1,part2,part3,pap;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


ground=new Ground(800,350,1600,20);
part1= new Dust(1100,330,200,20);
part2= new Dust(1000,290,20,100);
part3= new Dust(1200,290,20,100);
pap=new Paper(300,340,30);

	
  
}


function draw() {
 
  background(0);
  Engine.update(engine);
  rectMode(CENTER);


keypressed();


 ground.display();
  part1.display();
  part2.display();
  part3.display();
  pap.display();
}



function keypressed(){
if(keyDown(UP_ARROW)){
Matter.Body.applyForce(pap.body,pap.body.position,{x:85,y:-85})

}
}