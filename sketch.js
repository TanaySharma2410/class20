 var mRect,fRect;

 
 function setup() {
  createCanvas(800,400);
  mRect=createSprite(400,200,80,30);
  mRect.shapeColor="green";


  fRect=createSprite(200,200,50,80);
  fRect.shapeColor="green";

  
 
}

function draw() {
  background(0);  
  mRect.x=World.mouseX;
  mRect.y=World.mouseY;
  
  if(mRect.x-fRect.x<fRect.width/2+mRect.width/2
    && fRect.x-mRect.x<fRect.width/2+mRect.width/2
    && mRect.y-fRect.y<fRect.width/2+mRect.width/2
    && fRect.y-mRect.y<fRect.width/2+mRect.width/2) {
    fRect.shapeColor="blue";
    mRect.shapeColor="blue";
  }
  else {
    fRect.shapeColor="green";
    mRect.shapeColor="green";

  }

  drawSprites();
}  