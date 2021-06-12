class Chain{
    constructor(bodyA,pointB) {
        var options = {
          bodyA: bodyA,
          pointB: pointB,
          stiffness: 0.04,
          length: 2

                     
        }
       this.pointB=pointB;
       this.chain=Constraint.create(options);
       World.add(world,this.chain);

      }

      attach(body){
        this.chain.bodyA = bodyA;
    }

      fly(){
          this.chain.bodyA=null;
      }
      display(){
      if(this.chain.body){
     var pointA=this.chain.body.position;
     var pointB=this.pointB;
    strokeWeight(4);
    line(pointA.x,pointA.y,pointB.x,ponitB.y);
      }
      }
}
