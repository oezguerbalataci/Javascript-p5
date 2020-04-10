var aliens = [];
var missiles = [];

function preload() {
  img = loadImage('assets/cannon.png');
  alienImg = loadImage('assets/alien.png');
}

function setup() {
  createCanvas(800, 600, );
  canon = new Ship;
  score = new Score;

  for (var i = 0; i < 6; i++) {
    aliens[i] = new Alien(i * 50 + 50, 50);
  }

  bg = loadImage('assets/bg.jpg');
}

function draw() {
  background(bg);
  canon.show();

  for (var i = 0; i < missiles.length; i++) {
    missiles[i].show();
    missiles[i].move();
    for (var j = 0; j < aliens.length; j++) {
      if (missiles[i].hit(aliens[j])) {
        missiles.splice(i, 1);

        if (aliens.length != 0) {
          aliens.splice(j, 1);
        }
        score.score += 5;
      }
    }
  }
  for (var i = 0; i < missiles.length; i++) {
    if (missiles[i].y < 0) missiles.splice(i, 1);
  }
  score.show();
  for (var i = 0; i < aliens.length; i++) {
    aliens[i].show();
    //aliens[i].move();
  }

}

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

function Missile(x, y) {
  this.x = x;
  this.y = y;
  this.r = 8

  /*this.show = function () {
    fill(0);
    stroke(255, 0, 0);
    ellipse(this.x + 10, this.y, this.r, this.r * 2);
  };*/

  this.hit = function (missile) {
    var d = dist(this.x, this.y, missile.x, missile.y);
    if (d < this.r + missile.r) {
      return true;
    } else {
      return false;
    }
  };
  Missile.prototype.show = function () {
    fill(0);
    stroke(255, 0, 0);
    ellipse(this.x, this.y, this.r, this.r * 2);
  }
  this.move = function () {
    this.y = this.y - 3;
  };


}

function Alien(x, y) {
  this.x = x;
  this.y = y;
  this.r = 25;
  this.speed = 3;

  /*this.show = function () {
    image(alienImg, this.x, this.y);
    noStroke();
    noFill();
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  };*/

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

Alien.prototype.show = function () {
  image(alienImg, this.x - 27, this.y);
  noStroke();
  noFill();
  ellipse(this.x, this.y, 50, 50);
}

function Ship() {
  this.x = 400;
  this.y = 550;
  this.show = function () {
    image(img, this.x - 100, this.y);
    noStroke();
    noFill();
    rect(this.x, this.y, 50, 50);
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

function gameUpdate() {
  var sec = second();
  if (sec % 5 == 0) {
    for (var i = 0; i < 2; i++) {
      var sa = new Alien(i * 50 + 50, 60);
      aliens.push(sa);
    }
  }
}