console.log("Hello welcome to spotify");
// Initialize the variables
let songIndex=0;
let audioElement= new Audio("Songs/champion.mp3");
let masterPlay=document.getElementById("masterPlay");
let myProgressBar=document.getElementById("myProgressBar");
let gif=document.getElementById("gif");
let songItems=Array.from(document.getElementsByClassName("songItems"));
let songs=[
    { songName:"Salam-e-ishq", filePath:"Songs/Champion.mp3",coverPath:"Covers/a.jpg"},
    { songName:"Mahi re tere naal ", filePath:"Songs/Champion.mp3",coverPath:"Covers/b.jpg"},
    { songName:"Hasi rat ho na ho", filePath:"Songs/Champion.mp3",coverPath:"Covers/c.jpg"},
    { songName:"Duja koi na", filePath:"Songs/Champion.mp3",coverPath:"Covers/d.jpg"},
    { songName:"Jii bhar ke dekh lijiye", filePath:"Songs/Champion.mp3",coverPath:"Covers/e.jpg"},
    { songName:"Dil diya gallan", filePath:"Songs/Champion.mp3",coverPath:"Covers/f.jpg"},
    { songName:"Phir bekarari kaise ho", filePath:"Songs/Champion.mp3",coverPath:"Covers/g.jpg"}
    
]

// Listen to events
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("play11");
        masterPlay.classList.add("pause1");
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add("play11");
        masterPlay.classList.remove("pause1");
        gif.style.opacity=0;
    }
});

audioElement.addEventListener('timeupdate',()=>{
     console.log('timeupdate');
     progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
     myProgressBar.value=progress;
});

myProgressBar.addEventListener('change',()=>{
      audioElement.currentTime=(myProgressBar.value * audioElement.duration/100);
});

songItems.forEach((element,i)=>{
    console.log(element);
  element.getElementsByTagName("img")[0].src=songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerHTML=songs[i].songName;
});

const makeAllPlays=()=>{
 Array.from(document.getElementsByClassName("songPlayItem")).forEach((element)=>{
     element.classList.add("fa-play-circle");
     element.classList.remove("fa-pause-circle");
 });
};
Array.from(document.getElementsByClassName("songPlayItem")).forEach((element)=>{
 element.addEventListener('click',(e)=>{
 console.log(e.target);
 makeAllPlays();
 songIndex=parseInt(e.target.id);
 e.target.classList.remove("fa-play-circle");
 e.target.classList.add("fa-pause-circle");
 audioElement.src=`Songs/${songIndex}.mp3`;
 audioElement.currentTime=0;
 audioElement.play();
 gif.style.opacity=1;
 masterPlay.classList.remove("fa-play-circle");
 masterPlay.classList.add("fa-pause-circle");
 });
});