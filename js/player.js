class Player { //separate player class from Boss/Enemy class in a diferent file? 
    constructor(x, y, width, height) {
        this.image =  ninja;
        this.x = x;
        this.y = y ;
        this.width = width;
        this.height = height;
        //this.position = to store the current position so we can shoot from there.
        // this.ctx = context;
        // this.moveUp = ;
        // this.movedown = ;
        
      }
      moveRight() {
        this.x = this.x + 0.1;
        if(this.x > 1000) { 
            this.x = 0 - this.width;
        }

      }
      moveLeft() {
        this.x = this.x - 0.1;
        if(this.x + this.width < 0) {
            this.x = 1000;
        }
      }

      moveUp() {
        this.y = this.y - 0.1;
        if(this.y + this.height < 0) {
            this.y = 600;

      }
    } 

      moveDown() {
        this.y = this.y + 0.1;
        if(this.y > 600) { // 600 para que no se salga del canvas
            this.y = 0;
      }

    // moveDiagonal() {} ????

    
    //   shoot() { //should be a class instead of a method? / should shoot kunai from player's position when button is pressed
    
    //   }
    //   _liveBooster() {//should be a method to add the live to the counter when Dragon/LiveBooster collides with Player???

    //   }
    //   receiveDamage( ){//Should be a method to substract 1 live from counter when droplet or katana collide with Player?

    //   }
}

// class Boss extends Player {}
    //      constructor(name) {
    //         this.shoot = 50;
}
