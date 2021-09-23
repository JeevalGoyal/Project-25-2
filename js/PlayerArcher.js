class PlayerArcher
{
    constructor(x,y,w,h,angle)
    {
        this.w=w;
        this.h=h;
        this.angle=angle;
        var options = {
            isStatic: true
        };
        this.body = Bodies.rectangle(x, y,w,h, options);
        this.image = loadImage("./assets/playerArcher.png");
        World.add(world, this.body);
    }
    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        Matter.Body.setAngle(this.body,-PI/2);
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}