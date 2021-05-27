class Stone   {
    constructor(x, y, radius) {
      var options = {
          'restitution':0,
          'friction':1,
          'density':0.10,
          isStatic:false,
      }

    
    

      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      this.image=loadImage("sprites/stone.png");
      World.add(world, this.body);
    }

    
  display(){  

    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;   
           
      var pos =this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
  //  this.image.display();
      //ellipseMode(RADIUS);
     // fill("black");
      //ellipse(0, 0, this.radius,this.radius);
      imageMode(CENTER);
image(this.image, 0, 0, this.radius,this.radius);
      pop();
  }
}