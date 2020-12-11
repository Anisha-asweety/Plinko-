 const Engine = Matter.Engine;
 const World= Matter.World;
 const Bodies = Matter.Bodies;

var engine,world
var ground 
var plinko 
var division 
var particle 

var plinko=[];
var particle=[];
var divisions=[];

var divisionHeight=300

function setup() {
  createCanvas(480,800);
  //createSprite(400, 200, 50, 50);
  engine=Engine.create();
  console.log(engine)
  world= engine.world
  
  ground=new Ground(240,790,480,20)

  division1=new Divisions(5,680,10,200)
  division2=new Divisions(70,680,10,200)
  division3=new Divisions(140,680,10,200)
  division4=new Divisions(210,680,10,200)
  division5=new Divisions(276,680,10,200)
  division6=new Divisions(342,680,10,200)
  division7=new Divisions(410,680,10,200)
  division8=new Divisions(475,680,10,200)
  
  particle1=new Particle(random(width/2-10,width/2+10),10,10)
}

function draw() {
  background(0,0,0);  

  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  division8.display();
  particle1.display();
  

  if(frameCount%60===0)
  particle.push(new Particle(random(width/2-10,width/2+10),10,10))

  for(var k =0;k<=width;k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
  }

  for(var j=40;j<=width;j=j+50)
  {
    plinko.push(new Plinko(j,75))
    plinko[j].display();
  }

  for(var j=15;j<=width-10;j=j+50)
  {
    plinko.push(new Plinko(j,175))
  }

  for(var j=40;j<width;j=j+50)
  {
    plinko.push(new Plinko(j,75))
  }

  for(var j=15;j<=width-10;j=j+50)
  {
    plinko.push(new Plinko(j,175))
  }

  for(var j = 0; j < particle.lenght; j++)
  {
    particle[j].display();
  }

  for(var k = 0; k < divisions.lenght; k++)
  {
    divisions[k].display();
  }

  for(i=0;i<plinko.length;i++)
  {
    plinko[i].display();
  }

  drawSprites();
}