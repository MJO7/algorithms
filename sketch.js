var rect2 , rect1 , rect3 , rect4;

function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400, 400, 100, 50);
  rect1.velocityY = -3
  rect2 = createSprite(400,50,100,50);
  rect2.velocityY = 3
  rect3 = createSprite(10,200,50,100)
  rect3.velocityX = 3
  rect4 = createSprite(700,200,50,100)
  rect4.velocityX = -3
}

function draw() {
  background("yellow");  
  drawSprites();
 
if(rect1.y-rect2.y <= rect1.height/2 + rect2.height/2
&&
rect2.y-rect1.y <= rect1.height/2 + rect2.height/2){

  
 
}
bounce(rect3 , rect4)
bounce(rect1 , rect2) ;
}
function bounce(rect1 , rect2){
  if(rect1.x-rect2.x <= rect1.width/2 + rect2.width/2
    &&
    rect2.x-rect1.x <= rect1.width/2 + rect2.width/2){
      rect2.velocityX = rect2.velocityX * (-1)
      rect1.velocityX = rect1.velocityX * (-1)
    }
if(rect1.y-rect2.y <= rect1.height/2 + rect2.height/2
  &&
  rect2.y - rect1.y <= rect2.height/2 + rect1.height/2){
    rect2.velocityY = rect2.velocityY * (-1)
    rect1.velocityY = rect1.velocityY * (-1)
  }
}