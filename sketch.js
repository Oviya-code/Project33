const Engine = Matter.Engine;
const World= Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 
var particles = [];
var plinkos = [];
var Divisions = [];
var divisionHeight=300;
var score =0;
var particle;
var turn = 0; 
var gameState = "play";
var count;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  for (var k = 0; k<=width;k = k+80) {
    Divisions.push(new divisions(k,height-divisionHeight/2,10,divisionHeight))
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
  if(gameState === "play"){
  Engine.update(engine);
  textSize(20)
 text("Score : "+score,20,30);
 textSize(20)
 text("500",20,600);
 textSize(20)
 text("500",100,600);
 textSize(20)
 text("500",180,600);
 textSize(20)
 text("500",260,600);
 textSize(20)
 text("100",340,600);
 textSize(20)
 text("100",420,600);
 textSize(20)
 text("100",500,600);
 textSize(20)
 text("200",580,600);
 textSize(20)
 text("200",660,600);
 textSize(20)
 text("200",740,600);

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }

   for (var k=0;k<Divisions.length; k++){
    Divisions[k].display();
   }

   ground.display();
  }
    if(particle!=null)
   {
     particle.display();

     if(particle.body.position.y=760)
     {
       if(particle.body.position.x<300)
       {
         score=score+500;
         particle=null;
         if(count>=5) gameState = "end";
       }
     }
   }
}

function mousePressed(){
  if(gameState!=="end")
  {
    count++;
    particle = new Particle(mouseX,10,10,10);
  }
}