const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint
gameState="start"

function setup() {

  createCanvas(800,400);
   engine= Engine.create();
   world= engine.world;
   ground=new Ground(400,380,800,40)
   tree=new Tree(600,200,350,350)
   boy=new Boy(150,350)
   stone=new Stone(130,310,20,20)
   hand=new Rope(stone.body,{x:130,y:310})
   mango=new Mango(450, 150)
   mango2=new Mango(500, 150)
   mango3=new Mango(550, 150)
   mango1=new Mango(600, 150)
}

function draw() {
  background(rgb(19,181,239));
  Engine.update(engine)
  ground.display()
  tree.display()
  boy.display()
  stone.display()
  mango.display()
  mango1.display()
  mango2.display()
  mango3.display()
}

function keyPressed(){
  if(keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:130,y:310})
    hand.attach(stone.body)
  }
}

function mouseDragged(){
  if (gameState !== "launched"){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}
}


function mouseReleased(){
  hand.fly();
  gameState="launched";
}

