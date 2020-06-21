class LogsOfBin{
    constructor(x,y,width,height,c){
      var b_option={
          'isStatic':true,
          'restitution':0.3,
          'friction':3,
          'density':150,
      }
     this.body = Bodies.rectangle(x,y,width,height,c,b_option); 
     this.width = width;
     this.height = height;
     this.c=c;
      

    World.add(world, this.body);
     }
    display(){
     var pos =this.body.position;
    //var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    //rotate(angle);
    rectMode(CENTER);
    fill(this.c);
    rect(0, 0, this.width, this.height);
    pop();
    }
}