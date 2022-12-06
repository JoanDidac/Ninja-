class Kunai { //faltara definir funcio per la trajectoria de la bala + new Kunai{}
    constructor (x , y) {
        this.image = kunai;
        this.x = x;
        this.y = y;
        this.width = 23;//20
        this.height = 53;//50
        // this.kunaiArray = []; // this.speed???? 
        this.shootInterval = undefined;
        //this.generateInterval= undefined?
        
    }
            //shoot from ninja's current position
_moveUpKunai() {
    this.shootInterval = setInterval(()=> {
        this.y = this.y - 10;
        if(this.y < -100  ){
            clearInterval(this.shootInterval);//???fall interval is not defined? 
        }
    }, 20)
    }
}
// shoot() {
//   let fireKunai = _createKunai();
//   _moveKunai(Kunai);


//   }
      
//       _createKunai();
//       _drawKunai();
//       _moveKunai();
//       console.log("kunai va!");

//     let index = this.kunaiArray.indexOf(kunaiArray);
//     this.kunaiArray.splice(index, 1);
// }
  

//     this.ninja.kunai (this.kunai) => { // Should create a bullet/kunai from the exact position where the ninja is when keydown event happens.
        
    

// }