class Holder{
    
    constructor(){
        var options={
            isStatic: false,
            friction: 0.0001,
           // mass: 2500,
           // frictionAir:0.0001,
            density:1
        }
        this.bodies = Bodies.rectangle(100, 100, 50, 60, options)
        this.image = loadImage("sprites/hexagon.png")
        World.add(world, this.bodies)
    }
    display(){
        imageMode(CENTER)
        //fill("red")
        image(this.image,this.bodies.position.x, this.bodies.position.y, 80, 80)
    }
}