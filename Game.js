class Game{
  constructor(){
  }
  gameState(){
    var gameStateref = database.ref("gameState")
    gameStateref.on("value",function(data){gameState = data.val()})
 }
update(state){
  database.ref("/").update({
      gameState:state
  })
}

async start(){
  if(gameState===0){
    player =new Player()
    var playerCountRef = await database.ref("playerCount").once("value")
    if(playerCountRef.exists()){
      playerCount = playerCountRef.val()
      player.getCount()
    }
    form = new Form()
    form.display()
  }
  car1 = createSprite(200,800)
  car2 = createSprite(700,800)
  car3 = createSprite(1200,800)
  car4 = createSprite(1700,800)


  cars = [car1,car2,car3,car4]
}
play(){
  form.hide()
  text("Game Started",120,120)
  Player.getPlayerInfo();


  if(allPlayers !==undefined){

    //var display_Position = 130


var index = 0

    var x = 0
    var y  

    for(var plr in allPlayers){
      index +=1
      x +=500
      y=displayHeight-allPlayers[plr].distance
      cars[index-1].x=x
      cars[index-1].y=y


      if(index=== player.index){
        cars[index-1].shapeColor = "red"
        camera.position.x = displayWidth/2
        camera.position.y = cars[index-1].y
      }
    
     // display_Position +=20
    //text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,display_Position)
  }    
  }

if(keyDown ("UP_ARROW") && player.index !==null){

  player.distance+=50
  player.update();
}


}


}