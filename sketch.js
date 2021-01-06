var A,B


function setup() {
  createCanvas(800,400);
  
  A = createSprite(400, 200, 40, 80);
  B = createSprite(200, 200, 80, 40);
  A.shapeColor = "blue";
  B.shapeColor = "blue";
}

function draw() {
  background("black");  
 
  A.x = World.mouseX;
  A.y = World.mouseY;

   console.log(A.x - B.x);

   if(A.x - B.x < A.width/2 + B.width/2 && B.x - A.x < A.width/2 + A.width/2 && 
    A.y -B.y < A.height/2 + B.height/2 && B.y - A.y < A.height/2 + B.height/2){
     A.shapeColor = "red";
     B.shapeColor = "red";
   } else{
    A.shapeColor = "blue";
    B.shapeColor = "blue";
   }

  drawSprites();
}