class Shot {
    constructor(bodyA, pointB ){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.004 ,
            length: 1,
        }
        this.shot= Constraint.create(options);
        World.add(world, this.shot);
        this.pointB=pointB;
    }

    display(){
        if(this.shot.bodyA){

        
        var pointA = this.shot.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
    fly(){
        this.shot.bodyA = null ; 
    }
}
