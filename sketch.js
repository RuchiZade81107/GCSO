function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500)

  car=createSprite(50,100,50,50)
  wall=createSprite(1500,200,60,height/2)

car.velocityX=speed

}

function draw() {
  background(255,255,255);  

if(wall.x-car.x <wall.width/2  +   car.width/2){
  car.velocityX=0
  var def=0.5*weight*speed*speed/22509

  if(def>180){
    car.shapeColor="red"
  } else  if(def<180  &&  def>100){
    car.shapeColor="yellow"
  }  else  if(def<100){
    car.shapeColor="green"
  }
}

  drawSprites();
}