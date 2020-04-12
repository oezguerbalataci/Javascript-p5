function Alien(x, y) {
    this.x = x;
    this.y = y;
    this.width =44;
    this.height ==44;
    this.speed = 4;
    
  
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
    noFill();
    stroke(0);
    strokeWeight(2);
  };