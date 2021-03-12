const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1, ball;
var box1, box2;

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200, 150, 100, 100);
    box2 = new Box(250, 50, 100, 200);
    ground1 = new Ground(400, 790, 800,20);

    /*var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var ball_options ={
        restitution: 1.0
    }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);

    console.log(ground);*/
}

function draw(){
    background(0);
    Engine.update(engine);

    box1.display();
    box2.display();
    ground1.display();
    /*rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
    */
}