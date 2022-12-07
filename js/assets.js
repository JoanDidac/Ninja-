// Player
const ninja = new Image();
    ninja.src = '/images.js/Ninja/Ninja image 4.png';//falta hacer el crop de la imagen bien

// Dropplets/Enemies 
const droplets = new Image();
droplets.src = '/images.js/droplet/Samurai droplet 13.png';    

//Bullets/Shoot/Kunai

const kunai = new Image(); // change to assets.js instead of floating images
kunai.src = '/images.js/weapons/Kunai image Upstraight(1).png';

//Food/live booster dragon

const dragon = new Image();
dragon.src = '/images.js/dragon/Dragon image 3 .png';

//Poison/Enemy weapon/Katana

const katana = new Image();
katana.src = '/images.js/weapons/Katana image2.png';


// Sounds go here  ===========================>

const soundtrack = new Audio();
soundtrack.src = '/Sounds Ninja/Soundtrack ninja.mp3';
soundtrack.volume = 0.5;

const youWin = new Audio();
youWin.src = '/Sounds Ninja/You win .wav';

const youLose = new Audio();
youLose.src = '/Sounds Ninja/You lose dead .wav';

const ko = new Audio();
ko.src = '/Sounds Ninja/SFII_67 - KO Male.wav';

const startVoice = new Audio();
startVoice.src = '/Sounds Ninja/Start voice sound.wav';
startVoice.volume = 0.8;

const dropletKunai = new Audio();
dropletKunai.src = '/Sounds Ninja/Droplet vs ninja slash .wav';

const dropletKunai2 = new Audio();
dropletKunai2.src = '/Sounds Ninja/Dead Droplet.wav';

const receivedDamage = new Audio();
receivedDamage.src = '/Sounds Ninja/receive damage.wav';

const throwKunai1 = new Audio();
throwKunai1.src = '/Sounds Ninja/throw kunai sound.wav';

const throwKunai2 = new Audio();
throwKunai2.src = '/Sounds Ninja/throw sound1.wav.wav';

const gameOver = new Audio();
gameOver.src = '/Sounds Ninja/game over speech.wav';
gameOver.volume = 0.7;

const risa = new Audio();
risa.src = '/Sounds Ninja/Ninja risa.wav';

const dragonFx = new Audio();
dragonFx.src = '/Sounds Ninja/Dragon sound.wav';
dragonFx.volume = 0.5;

const teleport = new Audio();
teleport.src = '/Sounds Ninja/teleport sound.wav';
teleport.volume = 0.8;


const countDown10 = new Audio();
countDown10.src = '/Sounds Ninja/countdown from 10.wav';

