class Mango {
    constructor(x,y,radius){
        var options={
            restitution:0.8,
            friction:1,
            density:0.3,
            isStatic:true,
        }
        this.image=loadImage("sprites/mango.png");

        this.body=Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
        
        this.radius=radius;

        

    }
    display(){
        var pos =this.body.position ;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        //rectMode(CENTER);
        // rect(0,0,this.width,this.height);
         imageMode(CENTER);
image(this.image, 0, 0, this.radius, this.radius);
         pop();
        
         
    }
}













