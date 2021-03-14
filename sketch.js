var movingRect,fixedRect
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="green"
  fixedRect.debug=true;

  movingRect=createSprite(200,200,50,50)
  movingRect.shapeColor="green"
  movingRect.debug=true;

  
}

function draw() {
  background(0);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  console.log(movingRect.x-fixedRect.x)
  console.log(movingRect.width/2+fixedRect.width/2)

  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
    && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
    && movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
    && fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2 
    ){
    fixedRect.shapeColor="red"
    movingRect.shapeColor="red"
  } else {
    fixedRect.shapeColor="green"
    movingRect.shapeColor="green"
  }
  drawSprites();
}