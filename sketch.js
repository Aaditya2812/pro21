var wall,bullet;
var speed,weight,thickness;


function setup() {
  createCanvas(1500,400);

  speed=random(223,321);
  weight=random(30,52);
  console.log(speed);
  console.log(weight);

  thickness=random(22,83);
console.log(thickness)
  bullet=createSprite(50, 200, 50, 20);
  bullet.velocityX=speed;
  wall=createSprite(1200, 200, thickness, height/2);
  
}
function draw() {
  background("black");
  if(wall.x-bullet.x<bullet.width/2+wall.width/2) {
    bullet.velocityX=0;
  }
  deformation();
  drawSprites();
}
function deformation(){
  if((0.5*weight*speed*speed)/(thickness*thickness*thickness)<10){
    wall.shapeColor="green";
  }
  
    if((0.5*weight*speed*speed)/(thickness*thickness*thickness)>10){
      wall.shapeColor="red";
    }
}