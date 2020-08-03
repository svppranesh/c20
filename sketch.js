var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(400,200,80,30);

  fixedRect.debug = true;
  movingRect.debug = true;

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

}

//in terms of width : fR.w/2 + mR.w/2 = 25 + 40 = 65
//in terms of x-axis : mR.x - fR.x
//mR.x - fR.x === fR.w/2 + mR.w/2

function draw() {
  background("black"); 
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  //console.log(movingRect.x - fixedRect.x);

  if (movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2 && 
    movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2 &&
    fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2) {
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  } else {
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  drawSprites();
}