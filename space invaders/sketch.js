var aliens = [];
var missiles = [];

function preload() {
  img = loadImage('assets/can1.png');
  alienImg = loadImage('assets/alien.png');
  laserImg = loadImage('assets/laser1.png');
}
//setup function
function setup() {
  createCanvas(800, 600);
  canon = new Ship;
  score = new Score;
  for (var i = 0; i < 5; i++) {
    aliens[i] = new Alien(i * 50 + 50, 0);
  }
  bg = loadImage('assets/bg.jpg');
}
//draw function
function draw() {
  background(bg);
  canon.show();

  for (var i = 0; i < missiles.length; i++) {
    missiles[i].show();
    missiles[i].move();
    for (var j = 0; j < aliens.length; j++) {
       if(collideRectRect(missiles[i].x,missiles[i].y,16,16,aliens[j].x,aliens[j].y,42,4)){
      // if (collusionDet(missiles[i], aliens[j])) {
        missiles.splice(i, 1);
        aliens.splice(j, 1);
        score.score += 5;
        break;
      }

    }
  }

  for (var i = 0; i < missiles.length; i++) {
    if (missiles[i].y < 0) missiles.splice(i, 1);
  }
  for (var i = 0; i < aliens.length; i++) {
    aliens[i].show(aliens);
    aliens[i].dir();
    //if(aliens[0].x== 0)()
  }
  alienMove();
  score.show();
}

function collusionDet(missile, alien) {

  if (missile.x >= alien.x - 10 && missile.x <= alien.x + 30) {
    if (alien.y >= missile.y - 40) {
      return true;
    }

  }
}