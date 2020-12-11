class Plinko {
    constructor(x,y,r){

        this.r=10
        this.body=Bodies.circle(x,y,this.r)
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle

        push();
        noStroke();
        translate(pos.x,pos.y)
        rotate(angle)
        //imageMode(CENTER)
        fill("red")
        ellipseMode(RADIUS)
        ellipse(0,0,this.r,this.r)
    }
}