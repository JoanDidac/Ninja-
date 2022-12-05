class Player { //separate player class from Boss/Enemy class in a diferent file? 
    constructor(x, y, width, height) {
        this.image =  ninja;
        this.x = x;
        this.y = y ;
        this.width = width;
        this.height = height;
        this.kunaiArray = [];
        // this.kunai.image = undefined;
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
      moveUp() {
            this.y = this.y - 10; //console.log("moving up!");
            if(this.y + this.height < 0) {
                this.y = 600;
                
    
          }
        } 
    
          moveDown() {
            this.y = this.y + 10;
            if(this.y > 600) { // 600 para que no se salga del canvas
                this.y = 0;
          }
        }

        shoot() {
          const newKunai = new Kunai(this.x + this.width/2.5 , this.y - 30); 
          this.kunaiArray.push(newKunai);
          newKunai._moveUpKunai();
    //Cooldown para eviar que dispare a muerte? 
        }

        power() {console.log('POWER!!');
          // let x = this.x;
        this.x = [Math.floor(Math.random() * 900)];
//after using power if first key pressed is right ninja goes straight out of the canvas, not with left.
        
        }
      
        
        
  


      }//closing 
