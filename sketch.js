var ship, shipImage1, edges;
var seaImg;

function preload(){
shipImage1 = loadAnimation("ship-1.png" , "ship-2.png" , "ship-3.png" , "ship-4.png");
seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(900,500);
  sea = createSprite(200,180,400,20);
  ship = createSprite(470,250,20,50);
  ship.addAnimation("ship", shipImage1);
  edges = createEdgeSprites();
  sea.x = sea.width/2; 
  sea.addImage("sea", seaImg);
  ship.scale = 0.5;
}

function draw() {
background("white");
sea.velocityX = -2;
if(sea.x < 0)
sea.x = sea.width/2; 
console.log(sea.x);
drawSprites();
}









