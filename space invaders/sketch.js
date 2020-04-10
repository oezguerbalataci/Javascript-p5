var aliens = [];
var missiles = [];

function preload() {
  img = loadImage('assets/can1.png');
  alienImg = loadImage('assets/alien.png');
  laserImg = loadImage('assets/laser1.png');
}
//setup function
function setup() {
  createCanvas(800, 600, );
  canon = new Ship;
  score = new Score;
  for (var i = 0; i < 10; i++) {
    aliens[i] = new Alien(i * 50 +50, 50);
  }
  bg = loadImage('assets/bg.jpg');
}
//draw function
function draw() {
  background(bg);
  canon.show();
  if(aliens.length==5){
    for (var i = 0; i < 20; i++) {
      aliens[i] = new Alien(i * 50 +50, random(0, 100));
    }
  }

  for (var i = 0; i < missiles.length; i++) {
    missiles[i].show();
    missiles[i].move();
    for (var j = 0; j < aliens.length; j++) {
        if(collusionDet(missiles[i],aliens[j])){
          aliens.splice(j,1);
          score.score +=5;   
        }
      }
    }

  for (var i = 0; i < missiles.length; i++) {
    if (missiles[i].y < 0) missiles.splice(i, 1);
  }
  score.show();
  for (var i = 0; i < aliens.length; i++) {
    aliens[i].show();
    aliens[i].move();
  }

}
//get key event 
function keyPressed() {
  if (keyIsDown(32)) {
    var missile = new Missile(canon.x, canon.y);
    missiles.push(missile);
  }

  if (keyIsDown(37)) {
    canon.x -= 20;
  }
  if (keyIsDown(39)) {
    canon.x += 20;
  }
  if (canon.x > 770) {
    canon.x = 770;
  }
  if (canon.x < 0) {
    canon.x = 0;
  }

}
//Creating Missile objects
function Missile(x, y) {
  this.x = x;
  this.y = y;
  this.width =16;
  this.height =16;


  /*this.hit = function (missile) {
    var d = dist(this.x, this.y, missile.x, missile.y);
    if (d < this.r + missile.r) {
      return true;
    } else {
      return false;
    }
  };*/
  
  this.move = function () {
    this.y = this.y - 3;
  };

}
Missile.prototype.show = function () {
  image(laserImg,this.x,this.y);
}
//Creating Alien objects
function Alien(x, y) {
  this.x = x;
  this.y = y;
  this.width =44;
  this.height ==44;
  this.speed = 3;

  this.move = function () {
    this.x += this.speed;
    if (this.x > 750) {
      this.speed = this.speed * -1;
      this.y += 50;
    }
    if (this.x < 0) {
      this.speed = this.speed * -1;
      this.y += 50;
    }
  };

}
//show function for Aliens
Alien.prototype.show = function () {
  image(alienImg, this.x, this.y);
}

function Ship() {
  this.x = 400;
  this.y = 550;
  this.show = function () {
    image(img, this.x-8, this.y+10);
  }

}

function Score() {
  this.score = 0;
  this.show = function () {
    stroke(1);
    fill(0, 255, 0);
    textSize(25);
    textAlign(RIGHT);
    text(this.score, 750, 30);
  }
}

function collusionDet(missile,alien){
    
  if (missile.x>=alien.x-20  && missile.x<=alien.x+30) {
      if(alien.y>=missile.y-44){
        return true;
      }
    
    }
}