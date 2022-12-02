class Kunai { //faltara definir funcio per la trajectoria de la bala + new Kunai{}
    constructor (x , y, width, height, speed) {
        this.image = 'kunai';
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.kunaiArray = [];
        this.image = '/images.js/Kunai image 1.png';
        this.speed = 5;
        this.shootInterval = undefined;
        //this.generateInterval= undefined?
        
    }
}
_createKunai() {
    if ( _createKunai() ) {
        this.kunai = new kunai;
        this.kunai.x = this.ninja.x + this.ninja.width/2;
        this.kunai.y = this.ninja.y ;
            _drawKunai();
            console.log(this.kunai.x);
    }

    
     
            //shoot from ninja's current position
        
    




_moveUpKunai() {
    this.shootInterval = setInterval(()=> {
        this.y = this.y - 10;
        if(this.y < -100 ){
            clearInterval(this.shootInterval);//???fall interval is not defined? 
        }
        
    }, 100)
    }
}
shoot() {
  let fireKunai = _createKunai();
  _moveKunai(Kunai);


  }
      
      _createKunai();
      _drawKunai();
      _moveKunai();
      console.log("kunai va!");

    let index = this.kunaiArray.indexOf(kunaiArray);
    this.kunaiArray.splice(index, 1);
}
  

//     this.ninja.kunai (this.kunai) => { // Should create a bullet/kunai from the exact position where the ninja is when keydown event happens.
        
    

// }