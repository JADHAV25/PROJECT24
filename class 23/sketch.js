const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var bird;
var pig1,pig3;
var log1,log3;
var ground;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1  = new Pig(810,350);
    log1  = new Log(810,260,300,PI/2);
    
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3  = new Pig(810,220);
    log3  = new Log(810,180,300,PI/2);

    box5 = new Box(810,160,70,70);
    log4  = new Log(760,120,160,PI/7);
    log5  = new Log(870,120,160,-PI/7);
    ground = new Ground(200,380,2000,20);

    bird =  new Bird(100,100);

}

function draw(){
    background("lightblue");
    Engine.update(engine);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig3.display();
    log3.display();
    box5.display();
    log4.display();
    log5.display();
    bird.display();
    ground.display();
   
}