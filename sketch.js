const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof,ball,bl,ball2,bl2,ball3,bl3,ball4,bl4,ball5,bl5;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true		
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	var opt = {
     isStatic:false
	}

	ball = Bodies.circle(roof.position.x - 80,height/2,15,opt);
	World.add(world,ball);

	ball2 = Bodies.circle(roof.position.x - 40,height/2,15,opt);
	World.add(world,ball2);

	ball3 = Bodies.circle(roof.position.x,height/2,15,opt);
	World.add(world,ball3);

	ball4 = Bodies.circle(roof.position.x + 40,height/2,15,opt);
	World.add(world,ball4);

	ball5 = Bodies.circle(roof.position.x + 80,height/2,15,opt);
	World.add(world,ball5);



    bl = new rope(ball,roof,-3,0);
	bl2 = new rope(ball2,roof,2,0);
	bl3 = new rope(ball3,roof,5,0);
	bl4 = new rope(ball4,roof,4,0);
	bl5 = new rope(ball5,roof,5,0);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);
 push();
 translate(ball.position.x,ball.position.y)
  ellipse(0,0,30);  
 pop();
  ellipse(ball2.position.x,ball2.position.y,30);

  ellipse(ball3.position.x,ball3.position.y,30);

  ellipse(ball4.position.x,ball4.position.y,30);

  ellipse(ball5.position.x,ball5.position.y,30);
 
  

  bl.display();
  bl2.display();
  bl3.display();
  bl4.display();
  bl5.display();

  keyPressed();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball5,{x:ball5.position.x,y:ball5.position.y},{x:0,y:-6});

	}
}


