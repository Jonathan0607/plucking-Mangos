class Boy {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,50,75,options); 
      this.image=loadImage("boy.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, 100,150);
    }
  };
