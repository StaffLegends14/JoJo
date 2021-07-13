  
class rope{
    constructor(body1,body2,offsetx,offsety){
        var opt =  {
            bodyA: body1,
            bodyB: body2 ,
           stiffness: 0.04


        }
        this.body = Constraint.create(opt);
        World.add(world,this.body);
        this.offsetx = offsetx;
        this.offsety = offsety;
       // this.width = width;
       // this.height = height;
    }
        display(){
var posAx = this.body.bodyA.position.x + this.offsetx;
var posAy = this.body.bodyA.position.y + this.offsety;
var posB = this.body.bodyB.position ;
push();
//rectMode(CENTER);
strokeWeight(3);
stroke('black')
line(posAx,posAy,posB.x,posB.y);
pop();
        }
    
}
