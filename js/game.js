class Game{
  constructor(ctx) {
    this.ctx = ctx;
    this.ninja = new Player(450,500,90,90);
    this.points = 10;// should be 0 at start
    this.droplets = [];//como limitar el numero total de elementos dentro del array? arr.length = 20 clearinterval generate interval?
    this.generateInterval = undefined;
    this.kunaiArray = [];
    
  

  }
  _drawNinja() {
    this.ctx.drawImage(this.ninja.image,this.ninja.x,this.ninja.y,this.ninja.width,this.ninja.height);
  }


  _drawKunai() {
    this.ninja.kunaiArray.forEach((elem) => {
      this.ctx.drawImage(elem.image, elem.x, elem.y, elem.width, elem.height); 
      // console.log('drawing kunai'); //el que deberia pintar lo escoge donde? segun el role pero desde aqui puede acceder?
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

  _assignControls() { //añadir default event move pantalla izquierda y derecha 
    // Controles del teclado
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowLeft':
          this.ninja.moveLeft();
          break;
        case 'ArrowRight':
          this.ninja.moveRight();
          // break;
          // case 'ArrowUp':
          // this.ninja.moveUp();//esto acabara fuera
          // break;
          // case 'ArrowDown'://esto tambien
          // this.ninja.moveDown();
          break;
          case 'Space':     //>>>>>>>>added , remobable.
            this.ninja.shoot();
          break;
          case 'ArrowDown':  
          this.ninja.power(); 
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
          
// console.log('colision!');
       if (droplet.role === 'dragon') { ///start roles 
        this.points++;
      } else if (droplet.role === 'droplet') {
        this.points--;
        //(Kunai contra droplet, Kunai contra Boss, droplet contra Ninja y Boss contra Ninja. )
    }
      if(this.points === 0 ) {
        this._gameOver(); //not working, counter can go below 0, game over screen not showing up
      }
      let index = this.droplets.indexOf(droplet);
      this.droplets.splice(index, 1);//what is this doing? 
    }
    })

  } 

  _checkCollisionKunaiDroplet() {
    this.ninja.kunaiArray.forEach((elem) => {
      if ( this.kunai.y <= this.droplet.y + this.droplet.height) {
        // let indexWeapon = this.droplets.indexOf(droplet);
        // this.droplets.splice(index, 1);
      console.log( 'bingo!');
    }
  })
}
  
//       if ( (
//         this.newkunai.x >= droplet.x && this.newkunai.x <= droplet.x + droplet.width || 
//           this.newkunai.x + this.newkunai.width >= droplet.x && this.newkunai.x + this.newkunai.width <= droplet.x + droplet.width ||
//           droplet.x >= this.newkunai.x && droplet.x <= this.newkunai.x + this.newkunai.width 
//           )
//           &&
//           (
//             this.newkunai.y >= droplet.y && this.newkunai.y <= droplet.y + droplet.height ||
//             this.newkunai.y + this.newkunai.height >= droplet.y && this.newkunai.y + this.newkunai.height <= droplet.y + droplet.height ||
//             droplet.y >= this.newkunai.y && droplet.y <= this.newkunai.y + this.newkunai.height 
//           )
//           ) {
          
// console.log('en el blanco!!!');
//        if (droplet.role === 'dragon') { ///start roles 
//         this.points++;
//       } else if (droplet.role === 'droplet') {
//         let index = this.droplets.indexOf(droplet);
//         this.droplets.splice(index, 1);
//     }
    
//     }
    

//   } 

// power() {
//   this.ninja.x = [Math.floor(Math.random() * 950)];
// }

  _writeScore() {
    this.ctx.fillStyle = "lightyellow";
    this.ctx.font = "20px fantasy";
    this.ctx.fillText(` 𝙿𝚘𝚒𝚗𝚝𝚜: ${this.points}`, 850,550);
    
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
    this._drawKunai();
    this._drawDroplets();
    // this._createDroplets();
    // this._assignControls();
    this._checkCollisions();
    // this._checkCollisionKunaiDroplet();
    // this._fallDown();
    // this.power();
    this._writeScore();
    window.requestAnimationFrame(()=> this._update());
   
    
  }

  start() { 
    const startPage = document.getElementById('start');
    startPage.style = "display: none";
    this._update();
    this._createDroplets();
    this._assignControls();
    
    
  
    
  }
 } 