//Create variables here
var dog,happydog,database;

function preload()
{
  //load images here"
dogImg=loadAnimation("dogImg.png","dogImg1.png") 
}

function setup() {
  foodStock=database.ref('food');
  foodStock.on("value",readstock);

	createCanvas(500,500);
  dog=createSprite(80,315,20,20);
 
}


function draw() {  

  if(keyDown(UP_ARROW)){

  writeStock(foods);
  dog.addAnimation(dogHappy);

  }
  drawSprites();
  //add styles here

}
//function to read values from DB
function readstock(data){
foods=data.val(); 
}

//function to write values in DB
function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })
}