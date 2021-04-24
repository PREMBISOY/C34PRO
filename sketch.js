//Create variables here
var dogImg,happyDogImg,foodS,foodStock,doggy;


function preload()
{
	//load images here
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/happyDogImg.png");
}

function setup() {
	createCanvas(500,500);
  
   doggy = createSprite(250,300,50,100);
  doggy.addImage("doggy",dogImg);
  doggy.scale = 0.1;

database=firebase.database();

   foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46, 139, 87) ;

  if(keyWentDown(UP_ARROW))
  {
    writeStock(foodS);
    doggy.addImage("doggy",happyDogImg);
  }
  textSize(20);
  fill('red');
text("FOOD REMAINING : "+foodS,150,200);
text("PRESS THE ' UP ARROW' TO FEED THE DOG",250,);
  drawSprites();
  //add styles here

}
function readStock(data)
{
  foodS=data.val();
}

function writeStock(x)
{
  if(x<=0){
    x-0
  }else{
    x=x-1;
  }
  database.ref('/').update({Food:x})
}

