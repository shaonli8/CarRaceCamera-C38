
var gameState = 0

var playerCount

var database

var form,player,game

var allPlayers

var distance = 0 

var car1,car2,car3,car4;

var cars

function setup(){
    database = firebase.database();
    
    createCanvas(displayWidth-30,displayHeight-20);

    game = new Game()
    game.gameState()
    game.start()

}

function draw(){
    
    if(playerCount===4){

        game.update(1);

      }
      if(gameState===1){

        clear()
        game.play()
      }
drawSprites();
}


