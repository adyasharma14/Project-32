class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 5
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(10);
            stroke(color(48, 22, 8))
            stroke(rgb(188, 226, 238))
            line(pointA.x, pointA.y, pointB.x, pointB.y)
        }
        
    }

    fly(){
        this.sling.bodyA = null;
    }
    
    attach(abc){
        this.sling.bodyA = abc
    }
    
}