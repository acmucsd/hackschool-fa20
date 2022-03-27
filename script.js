let isPlaying = false; 
let audioPikachu = document.getElementById("audioPikachu");
audioPikachu.volume = 0.1;

let playAudio = () =>{
  console.log("playing");
  if (!isPlaying){
    audioPikachu.play();
    isPlaying = true; 
  } else{
    audioPikachu.pause();
    isPlaying = false; 
  }
  
}

