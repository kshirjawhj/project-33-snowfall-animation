const Engine = Matter.Engine, 
World = Matter.World, 
Events= Matter.Events,
Bodies = Matter.Bodies;
var engine, world;
var backgroundImg;
var snow=[];
function preload() {
  backgroundImg=loadImage("snow3.jpg");

  
}

function setup() {
  createCanvas(800,400);
 engine = Engine.create();
 world = engine.world;
}

function draw() {
  background(backgroundImg);
  drawSprites();
  Engine.update(engine);
  if (frameCount%15===0){
    snow.push(new Snow(random(width/9-10,width/1+10),5,5));
  }
   for (var t = 0; t<snow.length; t++){
    snow[t].display();
  }
  
}