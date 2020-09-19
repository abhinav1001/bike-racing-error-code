class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                car = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    car.getCount();
                }
                form = new Form()
                form.display();
            }
    car1 = createSprite(200,500);
    car1.addImage("car1",car1img);
    car2 = createSprite(800,500);
    car2.addImage("car2", car2img);
    cars=[car1,car2];

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     cars[index -1].x = x;
                     cars[index - 1].y = y;
                       
                     if(index === car.index){
                         
                         fill("black");
                         textSize(25);
                         text(allPlayers[plr].name ,x-25,y+25);

                         
                     }
                    
                     
                 
                 }
              
       if(keyIsDown(DOWN_ARROW)){
        car1.distance+=10;
        car2.distance+=10;
     }
 
            
                
                 

                

         
         
        
         

    }

    end(){
       console.log("Game Ended");
    }
}