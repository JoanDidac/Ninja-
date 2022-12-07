class Game{
  constructor(ctx) {
    this.ctx = ctx;
    this.ninja = new Player(450,500,90,90);
    this.lives = 3;
    this.droplets = [];//como limitar el numero total de elementos dentro del array? arr.length = 20 clearinterval generate interval?
    this.generateInterval = undefined;
    this.kunaiArray = [];
    this.timer = 30;
    this.generateTimer = undefined;
    this.role = undefined;
    this.kills = 0;
    
  

  }

  _kills() {
    if (this._checkCollisionKunaiDroplet()) { this.kills++}
  }

  _timer() {
    this.generateTimer = setInterval(()=> {
      this.timer--;
      if (this.timer === 0 && this.lives > 0) {clearInterval(this.generateTimer); this._gameWon()}

  },1000)
  }

  _drawKills() {
    this.ctx.fillStyle = "lightyellow";
    this.ctx.font = "20px fantasy";
    this.ctx.fillText(` 𝙺𝚒𝚕𝚕𝚜: ${this.kills}`, 835,515);
  }

  _drawTimer() {
    this.ctx.fillStyle = "lightyellow";
    this.ctx.font = "20px fantasy";
    this.ctx.fillText(` 𝚃𝚒𝚖𝚎: ${this.timer}`, 835,570);
  }
  _drawNinja() {
    this.ctx.drawImage(this.ninja.image,this.ninja.x,this.ninja.y,this.ninja.width,this.ninja.height);
  }

  _drawKunai() {
    this.ninja.kunaiArray.forEach((elem) => {
      this.ctx.drawImage(elem.image, elem.x, elem.y, elem.width, elem.height); 
    })
  }

  _createDroplets() {
    this.x =  Math.floor(Math.random() * 950);
    this.y = Math.floor(Math.random() * -100); 
    this.generateInterval = setInterval(() => {
      const newDroplet = new Droplet();
      newDroplet._assignRole(); 
      newDroplet._assignImage();
      newDroplet._fallDown();
    
      this.droplets.push(newDroplet);
    },500)
  }
  
  _drawDroplets() {
    this.droplets.forEach((droplet) => {
      this.ctx.drawImage(droplet.image, droplet.x, droplet.y, droplet.width, droplet.height); 
      // this.ctx.drawImage(droplet.image, droplet.x, droplet.y + 10, droplet.width, droplet.height); //to create falling motino effect
      // this.ctx.globalAlpha=0.8, this.ctx.drawImage(droplet.image, droplet.x, droplet.y + 20, droplet.width, droplet.height);
    })
  }

  _fallDown() {
    this.fallInterval = setInterval(()=> {
    this.y = this.y + 1;
    if(this.y > 600 ){
        clearInterval(this.fallInterval); 
    }
    
}, 10)
}

  _assignControls() {
    document.addEventListener('keydown', (event) => {
      event.preventDefault(); //maybe should go under each case as event.preventDefault(); ???
      switch (event.code) {
        case 'ArrowLeft':
          this.ninja.moveLeft();
          
          break;
        case 'ArrowRight':
          this.ninja.moveRight();

          break;
          case 'Space':     
            this.ninja.shoot();
            
          break;
          case 'ArrowDown':  
          this.ninja.power(); 
          
        default: 
          break;

      }
    });
  }

  _checkCollisions() { 
    this.droplets.forEach((droplet) => {
      if ( (
        this.ninja.x >= droplet.x && this.ninja.x <= droplet.x + droplet.width || 
          this.ninja.x + this.ninja.width >= droplet.x && this.ninja.x + this.ninja.width <= droplet.x + droplet.width ||
          droplet.x >= this.ninja.x && droplet.x <= this.ninja.x + this.ninja.width 
          )
          &&
          (
            this.ninja.y >= droplet.y && this.ninja.y <= droplet.y + droplet.height ||
            this.ninja.y + this.ninja.height >= droplet.y && this.ninjay + this.ninja.height <= droplet.y + droplet.height ||
            droplet.y >= this.ninja.y && droplet.y <= this.ninja.y + this.ninja.height 
          )
          ) {
          
           if (droplet.role === 'dragon') { 
           this.lives++;
         } else if (droplet.role === 'droplet') {
           this.lives--;
        
      }
      if(this.lives === 0 ) {
        this._gameOver(); 
      }
      let index = this.droplets.indexOf(droplet);
      this.droplets.splice(index, 1); 
    }
    })

  } 

  _checkCollisionKunaiDroplet() {
      this.droplets.forEach((droplet) => { 
        this.ninja.kunaiArray.forEach((kunai) => { 
          if ( kunai.x < droplet.x + droplet.width && kunai.x + kunai.width > droplet.x 
            && kunai.y < droplet.y + droplet.height && kunai.y + kunai.height > droplet.y) 
          { if (droplet.role === 'dragon') { 
            this.lives++; //this.bomb.play(); 
          } else if (droplet.role === 'droplet') {
            this.kills++; 
          } 
           
            let indexDroplet = this.droplets.indexOf(droplet);
            this.droplets.splice(indexDroplet, 1); 

            let indexKunai = this.ninja.kunaiArray.indexOf(kunai)
            this.ninja.kunaiArray.splice(indexKunai, 1);
          } 
        })
      })
    }

  _writeScore() {
    this.ctx.fillStyle = "lightyellow";
    this.ctx.font = "20px fantasy";
    this.ctx.fillText(` 𝙻𝚒𝚟𝚎𝚜: ${this.lives}`, 835,543);
    
  }

  _clean() {
     this.ctx.clearRect(0, 0, 1000, 600);
}

_gameWon(){
  clearInterval(this.generateTimer);
  clearInterval(this.generateInterval);
  const winPage = document.getElementById('win-page');
  winPage.style = "display: flex";
  const canvas = document.getElementById('canvas');
  canvas.style = "display: none";
  const losePage = document.getElementById('lose-page');
  losePage.style = "display: none";
} //llamar


_gameOver() {
  clearInterval(this.generateInterval);
  clearInterval(this.generateTimer);
  const losePage = document.getElementById('lose-page');
  losePage.style = "display: flex";
  const canvas = document.getElementById('canvas');
  canvas.style = "display: none";
  const winPage = document.getElementById('win-page');
  winPage.style = "display: none";
}

  _update() {
    this._clean();
    // this._kills();
    this._drawKills()
    this._drawTimer();
    this._drawNinja();
    this._drawKunai();
    this._drawDroplets();
    this._checkCollisions();
    this._checkCollisionKunaiDroplet();
    this._writeScore();
    window.requestAnimationFrame(()=> this._update());
  
  }

  start() { 
    const startPage = document.getElementById('start');
    startPage.style = "display: none";
    this._update();
    this._createDroplets();
    this._assignControls();
    this._drawTimer();
    this._drawKills();
    this._kills();
    this._timer();
    
  }
 } 