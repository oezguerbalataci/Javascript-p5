function Missile(x, y) {
    this.x = x;
    this.y = y;
    this.width =16;
    this.height =16;
  
    this.move = function () {
      this.y = this.y - 3 ;
    };
  
  }
  Missile.prototype.show = function () {
    image(laserImg,this.x,this.y);
  };