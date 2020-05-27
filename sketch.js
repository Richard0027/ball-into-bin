const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,launcher;
var box;

function setup() {
  var canvas = createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  ball = new Ball(500,300,30);
  launcher = new Launcher(ball.body,{x:200,y:50});
  box = new Box(600,100,50,100);
  
}

function draw() {
  background("black");  
  
  ball.display();
  launcher.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})

}

function mouseReleased(){
 launcher.fly();

}