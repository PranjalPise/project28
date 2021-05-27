
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var stone ;

function preload(){

	treeImg=loadImage("sprites/tree.png");

	
}

function setup() {
	createCanvas(800, 700);

	tree=createSprite(680,310);
	tree.addImage(treeImg);
	tree.scale=0.3;

 


	engine = Engine.create();
	world = engine.world;



	ground=new Ground (400,500,800,20);
	stone=new Stone (100,400,50);
	mango1=new Mango (577,266,40,40);
	mango2=new Mango(625,203,40,40);
	mango3=new Mango(639,266,40,40);
	mango4=new Mango(694,192,40,40);
	mango5=new Mango(715,254,40,40);
	boy= new Boy (200,400,100,200);
	shot=new Shot (stone.body,{x:150,y:400});
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  
  drawSprites();

  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  boy.display();
  shot.display();


  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);

  text(mouseX+","+mouseY,mouseX,mouseY);
 
}
	function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
	}
	function mouseReleased(){
	 shot.fly() ;
	}


function detectCollision (stone,mango){
	mangoPos = mango.body.position;
	stonePos=stone.body.position ;

	var distance=dist(stonePos.x,stonePos.y,mangoPos.x,mangoPos.y)
	if(distance<=stone.radius+mango.radius){
		Matter.Body.setStatic(mango.body,false);
	}
}