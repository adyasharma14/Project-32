class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.visibility=255;
   }
    
   
display(){
  if(this.body.speed<4){
    super.display();
  }
  else{
    World.remove(world,this.body);
    push();
    this.visibility=this.visibility-5;
    tint(255,this.visibility);
    //image(this.image,this.body.position.x,this.body.position.y,50,50);
    pop();
  }
}
  getScore(){
    if(this.visibility<0&&this.visibility>-105){
      score++;
    }
  }
};

    //display(a,b,c){  
       // fill(rgb(a,b,c))
       // super.display()
    
    
 // };
  