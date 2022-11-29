class Droplet {//Shall we say Army instead???
    constructor() {
        this.x = Math.floor(Math.random() * 950);
        this.y = Math.floor(Math.random() * -100); //Why -100????
        this.width = 50;
        this.height = 50;
        this.role = undefined; // 'droplet' ???
        this.Image = undefined;//Shall we add the image url instead? 
        this.fallInterval = undefined;
    }
    _fallDown() {
        this.fallInterval = setInterval(()=> {
            if(this.y > 600 ){
                clearInterval.apply(this.fallInterval);
            }
            this.y = this.y + 1;
        },10)
    }

    _assignRole() {
        if (Math.floor(Math.random() * 30) > 15) { //Cada cuanto deberia caer el dragon??? try and error? 
            this.role = 'dragon';
        } else {
            this.role = 'droplet'; // si la proporcion no es mayor de quince seguiran siendo droplets i no dragons.
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
    
    