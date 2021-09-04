class Planet{
    constructor(x){
    this.y=height-random([100,300,500,400])
    this.body=createSprite(x,this.y)
    this.body.debug=true;
    
    this.body.rotation=90 
    var ran= random([1,2,3,4])
    switch(ran){
        case 1: this.body.addImage(planet1img);this.body.scale=0.2;this.body.setCollider("circle",0,0,400);break;
        case 2: this.body.addImage(planet2img);this.body.scale=0.2;this.body.setCollider("circle",0,0,200);break;
        case 3: this.body.addImage(planet3img);this.body.scale=0.2;this.body.setCollider("circle",0,0,650);break;
        case 4: this.body.addImage(planet4img);this.body.scale=0.2;this.body.setCollider("circle",0,0,100);break;
    
    }
   
    }
}