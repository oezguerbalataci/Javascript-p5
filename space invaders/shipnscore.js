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
      text('SCORE :', 715, 30);
      text(this.score, 750, 30);
    }
  }

  function keyPressed() {

    if (keyIsDown(32)) {
      var missile = new Missile(canon.x, canon.y);
      missiles.push(missile);
    }
  
    if (keyIsDown(37)) {
      canon.x -= 10;
    }
    if (keyIsDown(39)) {
      canon.x += 10;
    }
    if (canon.x > 770) {
      canon.x = 770;
    }
    if (canon.x < 0) {
      canon.x = 0;
    }
  
  }