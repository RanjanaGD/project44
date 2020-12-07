var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
//var ground,track;
var cars, car1, car2, car3, car4,car5;

function preload(){
  track=loadImage("images/track.jpg")
  cars1=loadImage("grapes.png")
  scale=0.1
  cars2=loadImage("kiwi.png")
 scale=0.1
  cars3=loadImage("orange.png")
  scale=0.1
  cars4=loadImage("strawberry.png")
  scale=0.1
cars5=loadImage("man.png")
scale=0.1

ground=loadImage("images/ground.png")


}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 1){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

if(gameState===2){
  game.end()
}

}
