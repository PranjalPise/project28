class Boy {
    constructor(x,y,width,height){
        var options={
            restitution:0.8,
            friction:1,
            density:3,
            isStatic:true,
        }
        this.image=loadImage("sprites/boy.png");

        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width=width;
        this.height=height;

        

    }
    display(){
        var pos =this.body.position ;
        
        push();
        translate(pos.x,pos.y);
     
         imageMode(CENTER);
image(this.image, 0, 0, this.width, this.height);
         pop();
        
         
    }
}