function setup() {
  createCanvas(800,400);
  a = createSprite(400, 200, 50, 50);
  b = createSprite(600, 200, 50, 50);

  a.velocityX = 2;
  b.velocityX = -2;
}

function draw() {
  background(255,255,255);  
  
  console.log(a.x-b.x);

  //a.x = World.mouseX;
  //a.y = World.mouseY;

  
  
  if(isTouching(a, b))
  {
    a.shapeColor = "red";
    b.shapeColor = "red";
  }else{
    a.shapeColor = "gray";
    b.shapeColor = "gray";
  }
  bouce(a, b);
  drawSprites();
}

