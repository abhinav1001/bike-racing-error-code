var database;
var gameState=0;
var gameState =0;
var playerCount = 0;
var allPlayers;
var  car1,car2;
var car1img,car2img;
var backgroundimg;
function preload(){
     car1img=loadImage("images/bike.jpg");
     car2img=loadImage("images/bike.jpg");
     trackimg=loadImage("images/track.jpg");
     backgroundimg=loadImage("images/ground.png")
}
function setup(){
    canvas = createCanvas(displayWidth-20,displayHeight-30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();

    track=createSprite(550,600,1,1);
    track.addImage(trackimg);
    car1=createSprite(430,400,100,2);
    car1.addImage(car1img);
    car1.scale=0.2;
    car2=createSprite(370,400,100,2);
    car2.addImage(car2img)
    
   // bike1=new bikes(600,599,100,1);    
    
}

function draw(){
    background(backgroundimg);
    //bike1.display();
    camera.y=car1.y;
    camera.y=car2.y;
    if (playerCount === 2) {
        game.update(1);
      }
      if (gameState === 1) {
        clear(); 
        game.play();
      }
      if (gameState === 2) {
       
        game.end();
      }
   

drawSprites();
}
function keyPressed(){

    }