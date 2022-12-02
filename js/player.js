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
        this.x = this.x + 15;
        if(this.x > 1000) { 
            this.x = 0 - this.width;
        }

      }
      moveLeft() {
        this.x = this.x - 15;
        if(this.x + this.width < 0) {
            this.x = 1000;
        }
      }

      shoot() {//fireKunai(), createKunai(), and moveKunai(). fireKunai() calls createKunai() which creates the Kunai Image 
        //the image should be save into a variable. fireKunai then calls moveKunai() with an argument of the newly created kunai, 
        //moveKunai then moves the kunai until it exits the canvas and gets removed by a clear interval??? 



      }
    //   moveUp() {
    //     this.y = this.y - 10;
    //     if(this.y + this.height < 0) {
    //         this.y = 600;

    //   }
    // } 

    //   moveDown() {
    //     this.y = this.y + 10;
    //     if(this.y > 600) { // 600 para que no se salga del canvas
    //         this.y = 0;
    //   }
    // }

    // moveDiagonal() {} ???? <<<< Backlog


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

