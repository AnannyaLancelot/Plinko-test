const Engine = Matter.Engine
const World = Matter.World
const Events = Matter.Events
const Bodies = Matter.Bodies;
 
var particle;
var particle2;
var plinkos = [];
var divisions=[];

var divisionHeight=300;
var score =0;
var turn=5;
var End=0;
var gameState=1;
var ground;


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  particle=new Particle(mouseX,20,10);
 


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");

   fill("white");
   textSize(30);
   text("Score:"+score,30,30)

   fill("white");
   textSize(30);
   text("500",15,530)

   fill("white");
   textSize(30);
   text("500",95,530)

   fill("white");
   textSize(30);
   text("500",175,530)

   fill("white");
   textSize(30);
   text("500",255,530)


   fill("white");
   textSize(30);
   text("100",335,530)

   fill("white");
   textSize(30);
   text("100",415,530)

   fill("white");
   textSize(30);
   text("100",495,530)

   fill("white");
   textSize(30);
   text("200",575,530)

   fill("white");
   textSize(30);
   text("200",655,530)

   fill("white");
   textSize(30);
   text("200",735,530)
   
   
   
  Engine.update(engine);
if(particle!=null){
  particle.display();
  if(particle.body.position.y>600){
    
  if(particle.body.position.x<=290){
    score=score+500;
    particle=null
    if(turn==0){
      gameState=End;
    }
    
    
    
  }
 else if(particle.body.position.x>=290&&particle.body.position.x<=530){
    score=score+100;
    particle=null
    if(turn==0){
      gameState=End;
    }

  }
 
}
} 
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

  
   
}
/*function mouseDragged(){
  Matter.Body.setPosition(particle.body,{x:mouseX,y:20})
}
function mouseReleased(){
  if(particle!=null){
  Matter.Body.setStatic(particle.body,false);

  }
}*/
function mousePressed(){
  if(score>=0){
  if(gameState!=End){
  turn=turn-1;
  console.log("logged")
  particle=new Particle(400,20,10)
  }
  if(turn=0&&gameState===End){
    text("game Over",250,250);
  }
}
}