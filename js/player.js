class Player { //separate player class from Boss/Enemy class in a diferent file? 
    constructor(x, y, width, height) {
        this.image =  ninja;
        this.x = x;
        this.y = y ;
        this.width = width;
        this.height = height;
        this.kunaiArray = [];
        
      }
      moveRight() {
        this.x = this.x + 20;
        if(this.x > 1000) { 
            this.x = 0 - this.width;
        }

      }
      moveLeft() {
        this.x = this.x - 20;
        if(this.x + this.width < 0) {
            this.x = 1000;
        }
        }

        shoot() {
          const newKunai = new Kunai(this.x + this.width/2.5 , this.y - 30); 
          this.kunaiArray.push(newKunai);
          newKunai._moveUpKunai();
    //Cooldown para eviar que dispare a muerte? 
        }

        power() {console.log('POWER!!');
        this.x = 450;
        }
      }//closing 
