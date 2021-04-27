
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Paper;
var ground1;
var dustbin1, dustbin2, dustbin3;

function preload(){
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Paper = new paper(100,660,10);
	ground1 = new Ground(400,680,1000,10);
	dustbin1 = new dust(600, 650, 200, 20);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Paper.display;
  ground1.display;
  dustbin1.display;
  
  drawSprites();
 
}



