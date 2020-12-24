class dustbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = 200;
      this.height = 250;
      this.image = loadImage("sprites/dustbin.png");
      World.add(world,this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.image, 800,470, this.width, this.height);
      
    }
  };