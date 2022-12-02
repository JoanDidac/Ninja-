class Game{
  constructor(ctx) {
    this.ctx = ctx;
    this.ninja = new Player(450,500,90,90);
    this.points = 10;// should be 0 at start
    this.droplets = [];//como limitar el numero total de elementos dentro del array? arr.length = 20 clearinterval generate interval?
    this.generateInterval = undefined;

  }
  _drawNinja() {
    this.ctx.drawImage(this.ninja.image,this.ninja.x,this.ninja.y,this.ninja.width,this.ninja.height);
  }


  _createKunai() {
    this.kunai.x = this.ninja.x + this.ninja.width/2;
    this.kunai.y = this.ninja.y;//+ ninja.height?
    const newKunai = new Kunai(); 
    // newKunai.moveUpKunai();
    if (newKunai.image === Kunai.image) {
    this.kunaiArray.push(newKunai);
    console.log("pium!! pium!!");
  }

  }

  _drawKunai() {
    this.ctx.drawImage(this.kunai.image,this.kunai.x,this.kunai.y,this.kunai.width,this.kunai.height);

  }

  _createDroplets() {
    this.x =  Math.floor(Math.random() * 950);
    this.y = Math.floor(Math.random() * -100); 
    this.generateInterval = setInterval(() => {
      const newDroplet = new Droplet();
      newDroplet._assignRole(); 
      newDroplet._assignImage();
      newDroplet._fallDown();
    
      this.droplets.push(newDroplet);//1 por segundo??? too quick? 
    },1000)
  }
  
  _drawDroplets() {
    this.droplets.forEach((droplet) => {
      this.ctx.drawImage(droplet.image, droplet.x, droplet.y, droplet.width, droplet.height); //el que deberia pintar lo escoge donde? segun el role pero desde aqui puede acceder?
    })
  }

  _fallDown() {
    
    this.fallInterval = setInterval(()=> {
    this.y = this.y + 1;
    if(this.y > 600 ){
        clearInterval(this.fallInterval);//???fall interval is not defined? 
    }
    
}, 10)
}

shoot() {
  if ( "keydown" === "Space") {
    
    _createKunai();
    _drawKunai();
    _moveKunai();
    console.log("kunai va!");
  }
  let index = this.kunaiArray.indexOf(kunaiArray);
  this.kunaiArray.splice(index, 1);
}

  _assignControls() {
    // Controles del teclado
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowLeft':
          this.ninja.moveLeft();
          console.log(this.ninja.x)
          break;
        case 'ArrowRight':
          this.ninja.moveRight();
          break;
          case 'ArrowUp':
          this.ninja.moveUp();
          break;
          case 'ArrowDown':
          this.ninja.moveDown();
          break;
          case 'Space':     //>>>>>>>>added , remobable.
            shoot();
        default:
          break;


        // document.addEventListener('keydown', (event) => {        ========>>>>>>> Space bar = Shoot()
        //   switch (event.code) {
        //     case '"Space"':
        //       shoot();
      }
    });
  }

  _checkCollisions() {
    this.droplets.forEach((droplet) => {
      if ( (
        this.ninja.x >= droplet.x && this.ninja.x <= droplet.x + droplet.width || // si cabeza toca.x toca con pies.ycabeza parte izq.x toca con pies.y ancho de pies...
          this.ninja.x + this.ninja.width >= droplet.x && this.ninja.x + this.ninja.width <= droplet.x + droplet.width ||//asi por todos los lados izq,der,arr,aba.
          droplet.x >= this.ninja.x && droplet.x <= this.ninja.x + this.ninja.width // 
          )
          &&
          (
            this.ninja.y >= droplet.y && this.ninja.y <= droplet.y + droplet.height ||
            this.ninja.y + this.ninja.height >= droplet.y && this.ninjay + this.ninja.height <= droplet.y + droplet.height ||
            droplet.y >= this.ninja.y && droplet.y <= this.ninja.y + this.ninja.height 
          )
          ) {
          

       if (droplet.role === 'dragon') { ///start roles 
        this.points++;
      } else if (droplet.role === 'droplet') {
        this.points--;
        //(Kunai contra droplet, Kunai contra Boss, droplet contra Ninja y Boss contra Ninja. )
    }
      if(this.points <= 0 ) {
        this.gameOver();
      }
      let index = this.droplets.indexOf(droplet);
      this.droplets.splice(index, 1);//what is this doing? 
    }
    })
  
  }

  _writeScore() {
    this.ctx.fillStyle = "black";
    this.ctx.font = "25px Lucida";
    this.ctx.fillText(`Points: ${this.points}`, 850,550);
  }

  _clean() {
     this.ctx.clearRect(0, 0, 1000, 600);
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
    // this._createDroplets();
    // this._assignControls();
    // this._checkCollisions();
    // this._fallDown();
    this._writeScore();
    // this.gameOver();//?/??
    window.requestAnimationFrame(()=> this._update());
   
    
  }

  start() { //startBtn maybe? ... cannot be called startBtn I think... cause method and ID have the same name...
    const startPage = document.getElementById('start');
    startPage.style = "display: none";//none?
    this._update();
    this._createDroplets();
    this._assignControls();
    
    
  
    
  }
 } 