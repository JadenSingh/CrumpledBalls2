class paper {

constructor(x,y,r){

var options={

isStatic:false,
restitution:0, 
friction:50,
density:1.2


}
this.x=x;
this.y=y;
this.r=50;
this.body=Bodies.circle(this.x,this.y, this.r/2, options)
this.image = loadImage("sprites/paper.png");
World.add(world, this.body);
}
display(){
    var paperpos=this.body.position;
    push()
    translate(paperpos.x, paperpos.y)
    imageMode(CENTER);
    image(this.image, 0,0, 80, 80);
   
    pop()
}



}