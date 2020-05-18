var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var form, player, game;
var runners,runner1,runner2;
var hurdle;
var  daya,jetha
function preload(){
   track=loadImage("image/track.png")
   backgroundImg=loadImage("image/background.jpg")
   //runner=loadImage("image/runner.png")
   hurdle=loadImage("image/hurdle.png")
   jetha=loadImage("image/jetha.png")
   daya=loadImage("image/daya.png")

}
function setup(){
  canvas = createCanvas(800,800);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
 
}


function draw(){
  
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
    }
    if(gameState === 2){
game.end();
    }
    //var hurdle=new Hurdle(210,200);


   
}
