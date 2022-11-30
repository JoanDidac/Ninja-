class Game{
  constructor(ctx) {
    this.ctx = ctx;
    this.ninja = new Player(450,530,70,70);
    this.points = 0;
    this.droplets = [];
    this.generateInterval = undefined;

  }
  _drawNinja() {
    this.ctx.drawImage(this.ninja.image,this.ninja.x,this.ninja.y,this.ninja.width,this.ninja.height);
  }

  _createDroplets() {
    this.generateInterval = setInterval(() => {
      const newDroplet = new Droplet();
      //effects?
      newDroplet._assignRole(); 
      newDroplet._assignImage();
      // newDroplet._fallDown();
    
      this.droplets.push(newDroplet);
    }, 1000)
  }
  
  _drawDroplets() {
    this.droplets.forEach((droplet) => {
      this.ctx.drawImage(droplet.image, droplet.x, droplet.y, droplet.width, droplet.height);
    })
  }

  _fallDown() {
    setInterval(() => {
        this.y = this.y + 1 ;
    }, 100)
}
  _assignControls() {
    // Controles del teclado
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowLeft':
          this.ninja.moveLeft();
          break;
        case 'ArrowRight':
          this.ninja.moveRight();
          break;
          case 'ArrowUp':
          this.ninja.moveUp();
          break;
          case 'ArrowDown':
          this.ninja.moveDown();
        default:
          break;
      }
    });
  }

  _checkCollisions() {
    this.droplets.forEach((droplet) => {
      if (droplet.role === 'booster') { ///start roles 
        this.points++;
      } else if (droplet.role === 'katana') {
        this.points--;
        //(Kunai contra droplet, Kunai contra Boss, droplet contra Ninja y Boss contra Ninja. )
    }
      if(this.points < 0 ) {
        this.gameOver();
      }
      let index = this.droplets.indexOf(droplet);
      this.droplets.splice(index, 1);//what is this doing? 
    })
  
  }
  _writeScore() {
    this.ctx.fillStyle = "black";
    this.ctx.font = "25px Lucida";
    this.ctx.fillText(`Points: ${this.points}`, 850,550);

  }

  _clean() {
     this.ctx.clearRect(0, 0, 1000, 600);
  // this._clean();
  // this._drawNinja();
  // window.requestAnimationFrame(() => this._update());
}

_gameOver() {
  clearInterval(this.generateInterval);
  const losePage = document.getElementById('lose-page');
  losePage.style = "display: flex";
  const canvas = "display: none";
}

  _update() {
    this._clean();
    this._drawNinja();
    this._drawDroplets();
    this._createDroplets();
    this._assignControls();
    this._checkCollisions();
    // this._fallDown();
    this._writeScore();
    // this.gameOver();//?/??
    window.requestAnimationFrame(() => this._update());
  }

  start() { //startBtn maybe? ... cannot be called startBtn I think... cause method and ID have the same name...
    const startPage = document.getElementById('start');
    startPage.style = "display: none";//none?
    // document.addEventListener('click',() => {
    //   this._update();
      // this.startBtn.style.display = "none";
    // }) ?? event listener not right...  :'( 
    this._assignControls();
    this._createDroplets()
    this._update();
  
    
  }
 }