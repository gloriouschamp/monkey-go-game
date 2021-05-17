
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstaclesGroup
var score
var ground
var gameState = PLAY;
var PLAY = 1;
var END = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 400);
  monkey = createSprite(50,320,10,10);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale = 0.1;

  
  ground = createSprite(70, 350, 800, 10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  foodGroup = createGroup();
  obstaclesGroup = createGroup();

  
}


function draw() {
background("white");

  
food();
obstacles();
  
  monkey.collide(ground);
  
  //if(gameState===PLAY){
    monkey.changeAnimation("running", monkey_running)
    if(ground.x<0){
      ground.x = ground.width/2
    }
    if(keyDown("space")){
      monkey.velocityY = -12;
     
    }
   monkey.velocityY = monkey.velocityY + 0.8;
    if(foodGroup.isTouching(monkey)){
      foodGroup.destroyEach()
      
    }
  if(obstaclesGroup.isTouching(monkey)){
        monkey.velocityX = 0;
    
      } 
  //}
  
  //if(gameState===END){
  //  obstaclesGroup.destroyEach()
 //   foodGroup.destroyEach() 
 // }
  
drawSprites();
  
}
function food() {
 if (frameCount%80===0){
   banana = createSprite(400, 150, 40, 10);
   banana.addImage(bananaImage);
   banana.scale = 0.1;
   banana.velocityX = -3;
   foodGroup.add(banana);
 } 
   
}

function obstacles() {
  if(frameCount%300===0){
    obstacle = createSprite(250, 325, 10, 10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.lifetime = 200;
    obstacle.velocityX = -3;
    obstaclesGroup.add(obstacle);
  }
}



