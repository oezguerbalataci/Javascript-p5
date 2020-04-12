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