class Droplet {//Shall we say Army instead???
    constructor() {
        this.x = Math.floor(Math.random() * 1000);
        this.y = Math.floor(Math.random() * -100); //Why -100????
        this.width = 100;
        this.height = 100;
        this.role = undefined; 
        this.Image = undefined;
        this.fall = undefined;
        // this.fallInterval = undefined;
    }

    // _fallDown() {
    // //     setInterval(() => {
    // //         this.y = this.y + 1 ;
    // //     }, 100)
    // // }

    //     this.fallInterval = setInterval(()=> {
    //         this.y = this.y + 1;
    //         if(this.y > 600 ){
    //             clearInterval(this.fallInterval);//???fall interval is not defined? 
    //         }
            
    //     }, 100)
    // }

    _assignRole() {
        if (Math.floor(Math.random() * 10) + 1) {//Cada cuanto deberia caer el dragon??? try and error?
            this.role = 'droplet';
          } else {
            this.role = 'dragon';// si la proporcion no es mayor de quince seguiran siendo droplets i no dragons.
          }
        }

    _assignImage() {
        if (this.role === 'droplet') {
            this.image = droplets;
        } else { 
            this.image = dragon ; // No estoy seguro de que esto sirva para randomear la aparicion del dragon y su imagen
        }
    }

}
    
    