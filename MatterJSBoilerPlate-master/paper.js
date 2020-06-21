class Paper{
    constructor(x,y, radius){
      var b_option={
          'restitution':0.3,
          'friction':0.3,
          'density':0.2,
      }
    this.body =  Bodies.circle(x ,y , 70 ,b_option); 
    this.radius = 70;
    Matter.Bodies.circle;
    World.add(world, this.body);
     }
    display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(CENTER);
    fill("pink");
    stroke("purple");
    strokeWeight(20);
    ellipse(0, 0, this.radius);
    pop();
    }
}