const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var maxDrops = 100;
var drop = [];

function preload(){
    
}

function setup(){
    var canvas = createCanvas(400,600);

    engine = Engine.create();
    world  = engine.world;

    for(var i=0; i<maxDrops;i++){
        drop.push(new Drop(random(0, 400), random(0, 400)));
    }
}

function draw(){
    background(0);

    Engine.update(engine);

    for(var i=0; i<maxDrops;i++){
        drops[i].display();
        drops[i].update();
      }
}   

