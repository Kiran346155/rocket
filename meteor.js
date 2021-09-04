class Meteor{
    constructor(x){
        this.y=random([100,height-100])
        this.body=createSprite(x,this.y)
        this.body.debug=true;
       if(this.y===100){
           this.body.velocityX=-15
           this.body.velocityY=2
       }else{
           this.body.velocityX=-15
           this.body.velocityY=-2
       }
this.body.lifetime=400
    
    this.body.addImage(Meteorimg)
    this.body.setCollider("rectangle",-100,100,300,300)
    this.body.scale=0.2;
}}