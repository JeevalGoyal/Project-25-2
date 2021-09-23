const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;

var arrow;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
 
  //Create Player Archer Object

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerArcher = new ComputerArcher(width - 340,computerBase.body.position.y - 180,10,10);
  computerArcher.scale=0.1;
  
  //Create an arrow Object
  playerArcher = new PlayerArcher(285,playerBase.body.position.y - 180,10,10);
  playerArcher.scale=0.1;

  arrow=new PlayerArrow(290,playerBase.body.position.y,5,5)
  
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerArcher.display();
  computerArcher.display()

  if(keyCode==="UP" && computerArcher.body.angle<1.77){
    angleValue=0.1;
  }else{
    angleValue=-0.1;
  }

  if(keyCode==="DOWN" && computerArcher.body.angle>1.47){
    angleValue=-0.1;
  }else{
    angleValue=0.1;
  }


  //Display arrow();
  arrow.display();
  
  //if Space (32) key is pressed call shoot function of playerArrow
  if(keyCode === 32){
    //Call shoot() function and pass angle of playerArcher
    arrow.shoot(playerArcher.body.angle)
  }
}



