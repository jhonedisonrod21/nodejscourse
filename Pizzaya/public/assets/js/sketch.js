let x = 0;
let g = 9.8;


class sphere {
  timer = 0;
  x =0;
  y =0;
  peso = 0;
  counting = true;

  constructor(new_x,new_y){
    this.x =new_x;
    this.y =new_y;    
  }

  reset(){
    this.x = mouseX;
    this.y = mouseY;
    this.timer = 0;
  }

  count(){
    setInterval(()=>{if (this.counting) {
      this.timer += 0.005;
    }},5);
  }
 
  
  show() {
    if (this.y <= 400) {
      if (this.counting) {
        this.y = this.y +(0.5)*9.8*(Math.pow(this.timer,2)); 
      }  
    }
    
    ellipse(this.x,this.y,100,100); 
  }

}

let sphere1 = new sphere(50,50);
sphere1.count();

function setup() {
  let canvasjhon = createCanvas(494,494);
  canvasjhon.parent('myContainer');  
  background(100);  
}

function draw() {
  clear();  
  background(20,250,30);
  sphere1.show();
  if (mouseIsPressed) {
    sphere1.reset();
  }
  
  
}