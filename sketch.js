var craft, a1, a2, bgS

function preload(){
  bg=loadImage("img/spacebg.jpg");
  bgS=loadSound("img/Flight.mp3");
  a=loadImage("img/iss.png");
  i1=loadImage("img/spacecraft1.png");
  i2=loadImage("img/spacecraft2.png");
  i3=loadImage("img/spacecraft3.png");
  i4=loadImage("img/spacecraft4.png");
}

function setup() {
  createCanvas(1280,640);
 
  bgS.loop();

  a1=createSprite(640, 280, 50, 50);
  a1.addImage(a);
  a1.scale=1;

  craft=createSprite(640,530,50,50)
  craft.addImage(i1);
  craft.scale=0.4

 
  
}

function draw() {
  background(bg); 
  
  console.log(craft.x,craft.y);

  if(craft.y<=(a1.y+70)&&craft.x<=(a1.x-5)){
    hasDocked = true;
    craft.addImage(i1);
    
    textSize(25);
    fill("white");
    text("Docking Successful👍",150,300);
  }
  else{

    craft.x=craft.x+random(-10,10);
    textSize(25);
    fill("white");
    text("Dock the spacecraft here👉",110,350);
  if (keyIsDown(UP_ARROW)) {
    craft.y = craft.y-10
    craft.addImage(i2);
}

if (keyIsDown(DOWN_ARROW)) {
  craft.y = craft.y+10
  craft.addImage(i1);
}

if (keyIsDown(LEFT_ARROW)) {
  craft.x = craft.x+10
  craft.addImage(i3);
}

if (keyIsDown(RIGHT_ARROW)) {
  craft.x = craft.x-10
  craft.addImage(i4);
}
}
  drawSprites();
}