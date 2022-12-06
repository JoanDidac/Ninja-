class Droplet {//Shall we say Army instead???
    constructor() {
        this.x = Math.floor(Math.random() * 950);
        this.y =  Math.floor(Math.random() * -100); 
        this.width = 100;// original droplet 100
        this.height = 100;//original droplet 100
        this.role = undefined; 
        this.Image = undefined;
        this.fallInterval = undefined;
    }

    _fallDown() {
    
        this.fallInterval = setInterval(()=> {
        
        if(this.y > 600 ){
            clearInterval(this.fallInterval);
         }
         this.y = this.y + 1; //originally + 1
        
    }, 15)
}

    _assignRole() { // Quiza seria mas facil y efectivo crear un array con el porcentaje de enemigos malos y buenos ya predeterminado y retocarlo con un mathrandom del array.
        if (Math.floor(Math.random() * 2.2) > 1) {//Cada cuanto deberia caer el dragon?
            this.role = 'dragon';
          } else {
            this.role = 'droplet';// si la proporcion no es mayor de quince seguiran siendo droplets i no dragons.
          }
        }

    _assignImage() { // molaria poder tener un array con tres imagenes de malos para hacer un random y que salieran aleatoriamente.
        if (this.role === 'droplet') { 
            this.image = droplets;
        } else { 
            this.image = dragon;
            this.width = 100;
            this.height = 65;//para cambiar tamaño de droplet/dragon if necessary 
        }
        
    }

}
    
    