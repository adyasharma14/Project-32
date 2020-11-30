const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

var ground, stand1, stand2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15,
box16, box17;

var box1, boxII, boxIII, boxIV, boxV, boxVI, boxVII, boxVIII, boxIX, boxX;
var polygon;
var score=0;
var backgroundImg;

function preload() {
   getBg();
}


function setup() {
  createCanvas(1350,700);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,695,width,10 );
  stand1 = new Ground(600,590, 400, 10 );
  stand2 = new Ground(1050, 350, 300, 10);
 
  box1 = new Box(471, 546, 50, 50);
  box2 = new Box(523, 546, 50, 50);
  box3 = new Box(575, 546, 50, 50);
  box4 = new Box(627, 546, 50, 50);
  box5 = new Box(679, 546, 50, 50);
  box6 = new Box(731, 546, 50, 50);
  box7 = new Box(505, 494, 50, 50);
  box8 = new Box(557, 494, 50, 50);
  box9 = new Box(609, 494, 50, 50);
  box10 = new Box(661, 494, 50, 50);
  box11 = new Box(713, 494, 50, 50);
  box12 = new Box(553, 442, 50, 50);
  box13 = new Box(605, 442, 50, 50);
  box14 = new Box(657, 442, 50, 50);
  box15 = new Box(579, 390, 50, 50);
  box16 = new Box(631, 390, 50, 50);
  box17 = new Box(601, 338, 50, 50);

  boxI = new Box(972, 310, 50, 50);
  boxII = new Box(1024, 310, 50, 50);
  boxIII = new Box(1076, 310, 50, 50);
  boxIV = new Box(1128, 310, 50, 50);
  boxV = new Box(1000, 260, 50, 50);
  boxVI = new Box(1052, 260, 50, 50);
  boxVII = new Box(1104, 260, 50, 50);
  boxVIII = new Box(1026, 210, 50, 50);
  boxIX = new Box(1078, 210, 50, 50);
  boxX = new Box(1047,160, 50,50);

  polygon = new Holder();
  sling = new SlingShot(polygon.bodies, {x:180, y:200});

}

function draw() {
  if(backgroundImg){
    background(backgroundImg);
    }
    strokeWeight(1);
    fill("red");
    textSize(30);
    text("SCORE : " +score,650,90);
  //background(0);  
  Engine.update(engine);

  ground.display();
  stand1.display();
  stand2.display();
 
 fill("pink");
  box1.display();
  box1.getScore();
  fill("pink");
  box2.display();
  box2.getScore();
  fill("pink");
  box3.display();
  box3.getScore();
  fill("pink");
  box4.display();
  box4.getScore();
  fill("pink");
  box5.display();
  box5.getScore();
  fill("pink");
  box6.display();
  box6.getScore();
  fill("pink");
  box7.display();
  box7.getScore();
  fill("pink");
  box8.display();
  box8.getScore();
  fill("pink");
  box9.display();
  box9.getScore();
  fill("pink");
  box10.display();
  box10.getScore();
  fill("pink");
  box11.display();
  box11.getScore();
  fill("pink");
  box12.display();
  box12.getScore();
  fill("pink");
  box13.display();
  box13.getScore();
  fill("pink");
  box14.display();
  box14.getScore();
  fill("pink");
  box15.display();
  box15.getScore();
  fill("pink");
  box16.display();
  box16.getScore();
  fill("pink");
  box17.display();
  box17.getScore();
  fill("pink");

  boxI.display(255, 185, 200);
  boxI.getScore();
  boxII.display(255, 185, 200);
  boxII.getScore();
  boxIII.display(255, 185, 200);
  boxIII.getScore();
  boxIV.display(255, 185, 200);
  boxIV.getScore();
  boxV.display(255, 120, 240);
  boxV.getScore();
  boxVI.display(255, 120, 240);
  boxVI.getScore();
  boxVII.display(255, 120, 240);
  boxVII.getScore();
  boxVIII.display(190, 55, 155);
  boxVIII.getScore();
  boxIX.display(190, 55, 155);
  boxIX.getScore();
  boxX.display(150, 230, 255);
  boxX.getScore();

  polygon.display();
  sling.display();

  

  drawSprites();

  strokeWeight(1);
  fill("red");
  textSize(30);
  text("DRAG & HIT THE BLOCKS. PRESS SPACE TO BRING THE STRIKER BACK.", 100, 50) ;
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.bodies, {x: mouseX, y: mouseY});
}
function mouseReleased(){
  sling.fly();
}
function keyPressed(){
	if(keyCode === 32){
		launcher = {x:90, y:550}
		Matter.Body.setPosition(polygon.bodies, {x:90, y:550});
		sling.attach(polygon.bodies);

	}
}
async function getBg(){
  var responce=await fetch ("https://worldtimeapi.org/api/timezone/asia/kolkata");
  var resjson=await responce.json();
  var mytime=resjson.datetime;
  var myhr=mytime.slice(11,13);
 // console.log(myhr)
 if(myhr>=06&&myhr<=19){
     bg="sprites/bg.png";
     
 }
 else{
     bg="sprites/bg2.jpg";
 }
 backgroundImg=loadImage(bg);
}
