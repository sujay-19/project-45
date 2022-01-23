var bg,bg_image
var player,player_image,playerShooting_img
var zombie,zombie_img,zombies_grp
var heart_1,heart_2,heart_3,heart_1img,heart_2img,heart_3img;

function preload() {
bg_image = loadImage("assets/bg.jpeg")
player_image = loadImage("assets/shooter_1.png")
playerShooting_img = loadImage("assets/shooter_3.png")
zombie_img = loadImage("assets/zombie.png")
heart_1img = loadImage("assets/heart_1.png")
heart_2img = loadImage("assets/heart_2.png")
heart_3img = loadImage("assets/heart_3.png")
}

function setup(){
  createCanvas(windowWidth,windowHeight)
  bg = createSprite(displayWidth/2-25,displayHeight/2-45)
  bg.addImage("background",bg_image)

  player = createSprite(width/2-590,height/2)
  player.addImage(player_image)
  player.scale=0.5
  player.debug=true
  player.setCollider("rectangle",0,0,400,400)

  heart_1 = createSprite(width-950,50)
  heart_1.addImage(heart_1img)
  heart_1.scale=0.25
  heart_1.visible=false

  heart_2 = createSprite(width-875,50)
  heart_2.addImage(heart_2img)
  heart_2.scale=0.25
  heart_2.visible = false

  heart_3 = createSprite(width-750,50)
  heart_3.addImage(heart_3img)
  heart_3.scale=0.25
  heart_3.visible = false


  zombies_grp = new Group()
}

function draw(){
 background(0)

  if(keyWentDown("space")) {
    player.addImage(playerShooting_img)
  }else if(keyWentUp("space")) {
     player.addImage(player_image)
  }

  if(keyDown("UP_ARROW")||touches.length>0){
   player.y-=10

  }

  if(keyDown("DOWN_ARROW")||touches.length>0){
    player.y+=10
 
   }
   if(zombies_grp.isTouching(player)){
     for (var i=0;i<zombies_grp.lenght;i++){
       if (zombies_grp[i].isTouching(player)){
         zombies_grp[i].destroy()
       }
     }
   }
   enemy()

  drawSprites()
}

function enemy(){
  if (frameCount%100===0){
  zombie = createSprite(random(880,1100),random(200,500))
  zombie.addImage(zombie_img)
  zombie.scale=0.27
  zombie.velocityX=-5
  zombie.debug=true
  zombie.setCollider("rectangle",0,0,400,400)
  zombie.lifetime=460
  zombies_grp.add(zombie)
  }
}