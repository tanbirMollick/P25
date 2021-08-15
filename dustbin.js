class dustbin
{
	constructor(x,y)
	{
		var options={
			isStatic:true,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		
        this.leftbody=Bodies.rectangle(x-100+10+40, y-60-10-50,20,100, options)
        this.rightbody=Bodies.rectangle(x+100-40, y-60-10-50,20,100, options)
        this.centerbody=Bodies.rectangle(x, y-60,100,20, options)
        this.image=loadImage("dustbingreen.png");
        World.add(world, this.leftbody);
        World.add(world, this.rightbody);
        World.add(world, this.centerbody);

	}
	display()
	{ var posBottom=this.bottomBody.position;
		var posLeft = this.leftWallBody.position;
		var posRight = this.rightWallbody.position;
		push()
		translate(posLeft.x,posLeft.y)
		rectMode(CENTER)
		 fill(255)

		
			
				

			
			


		    pop();
			
	}

}