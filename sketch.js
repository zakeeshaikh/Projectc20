var bgImg;
var cat,mouse;
function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 = loadImage("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png");
    mouseImg1 = loadImage("images/mouse4.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse1.png");

}

function setup(){
    createCanvas(1000,800);
    //create cat and mouse sprites here
    mouse = createSprite(100,700,10,10);
    mouse.scale = 0.12;
    mouse.addImage(mouseImg1);
 


    cat = createSprite(870,700,10,10);
    cat.scale = 0.18;
    cat.addImage(catImg1);


}

function draw() {

    background(bgImg);
    //Write condition here to evalute if cat and mouse collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){

        cat.velocityX = 0;
        cat.addAnimation("happyCat",catImg3)
        cat.changeAnimation("happyCat")
        

        mouse.addAnimation("happyMouse",mouseImg3)
        mouse.changeAnimation("happyMouse");

  }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode ===LEFT_ARROW){

    
    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.changeAnimation("mouseTeasing")
    mouse.frameDelay = 25;

  }
  

  if(keyCode === RIGHT_ARROW){


   cat.addAnimation("catMoving",catImg2);
   cat.changeAnimation("catMoving");
   cat.frameDelay = 9;
   cat.velocityX = -2;

  }


}
