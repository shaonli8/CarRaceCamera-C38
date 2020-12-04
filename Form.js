class Form{
    constructor(){
        this.input=createInput("name")
        this.button=createButton("Join")
        this.greeting=createElement("h3")


    }

 display(){
    var title = createElement("h2")
    title.html("Multiplayer Car Racing")
    title.position(displayWidth/2-50,50);
    
    this.input.position(displayWidth/2-30,displayHeight/2-100)
    
    this.button.position(displayWidth/2-15,displayHeight/2-50)
    
    this.button.mousePressed(()=>{

        this.input.hide()
        this.button.hide()
        player.name = this.input.value()
        playerCount+=1
        player.index = playerCount
        player.update()
        player.updateCount(playerCount)
        
        this.greeting.html("Hi "+player.name)
        this.greeting.position(displayWidth/2-50,displayHeight/3)   

    })

   
 }

hide(){

this.greeting.hide()
this.button.hide()
this.input.hide()


}

}