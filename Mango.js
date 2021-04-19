class Mango {
    constructor(x,y) {
      var options = {
          isStatic: true,
          restitution :0, 
          friction: 1
      }
      this.body = Bodies.rectangle(x,y,20,20,options); 
      this.image=loadImage("mango.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, 20, 20);
    }
  };