var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(800, 400, 50, 80);
  fixedRect.velocityX = -4;
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  r1 = createSprite(300,400,50,50);
  r1.shapeColor = "green";
  r1.velocityX = 4;
  r2 = createSprite(700,700,40,60);
  r2.shapeColor = "green";
  r3 = createSprite(500,600,30,40)
  r3.shapeColor = "green";
  r3.velocityX = -4;
  wall = createSprite(20,600,30,100);
  wall.shapeColor = "brown";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 
if (isTouching(movingRect,r2)){
  r2.shapeColor = "white";
}
  else{
    r2.shapeColor = "green";
  }
  bounce(fixedRect,r1);
  bounceOff(wall,r3);
  drawSprites();
}

