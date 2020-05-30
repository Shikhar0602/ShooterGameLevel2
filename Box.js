class Box extends BaseClass {
  constructor(x, y, width, height, r, g, b){
    super(x,y,width,height);
    this.r = r;
    this.g = g;
    this.b = b;
  }

  display(){
    console.log(this.body.speed);
    if(this.body.speed < 3) {
      fill(this.r,this.g,this.b);
      rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
    else{
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      pop();
    }

  }
 

};