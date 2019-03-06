// On Click images must move to a random spot while making a sound

var sheep = document.getElementById('sheep');
var donald = document.getElementById('donald');
var chicken = document.getElementById('chicken');
chicken.onclick = move;
donald.onclick = move;
sheep.onclick = move;

var sounds= {
  donald: './audio/daffy.mp3',
  sheep: './audio/sheep.mp3',
  chicken: './audio/cluck.mp3'
}

function move(e){
 var x = Math.floor(Math.random()*600);
 var y = Math.floor(Math.random()*600);
 e.target.style.top = x + 'px';
 e.target.style.left = y + 'px';
 var sound = new Audio(sounds[e.target.id]);
 sound.play()
}

//need a function for each image to move and make a sound
//assign images to a variable(s)
//math.random function
// add .onclick to img var and assign it to annonymous functions
// Use math.floor to pick a random number then times that number by a number
//
