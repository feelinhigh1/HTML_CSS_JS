console.log("Welcome to Spotify");

// Initialize the Variables

let songIndex = 1;
let audioELement = new Audio('songs/1.mp4');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
console.log(songItems);


let songs= [
  {songName: "Deshpacito", filePath: "songs/1.mp4", coverPath: "covers/1.jpeg"},
  {songName: "Balidan", filePath: "songs/2.mp4", coverPath: "covers/2.jpeg"},
  {songName: "Maya ma", filePath: "songs/3.mp4", coverPath: "covers/3.jpeg"},
  {songName: "Sathi", filePath: "songs/4.mp4", coverPath: "covers/4.jpeg"},
  {songName: "Satayera", filePath: "songs/5.mp4", coverPath: "covers/5.jpeg"},
  {songName: "Changes", filePath: "songs/6.mp4", coverPath: "covers/6.jpeg"},
  {songName: "Budi", filePath: "songs/7.mp4", coverPath: "covers/7.jpeg"}
];

songItems.forEach((element, i)=>{
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})



// audioELement.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
  if(audioELement.paused || audioELement.currentTime <= 0) {
    audioELement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
  }
  else{
    audioELement.pause();
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play');
    gif.style.opacity = 0;
  }
})


// Listen to Events
audioELement.addEventListener('timeupdate', ()=>{
  //Update Seekbar
  progress = parseInt((audioELement.currentTime/audioELement.duration) * 100);
  myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
  audioELement.currentTime = myProgressBar.value * audioELement.duration/ 100;
})





const makeAllPlays = () => {
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove("fa-pause-circle");
    element.classList.add("fa-play-circle");
  })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.addEventListener('click',(e)=>{
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove("fa-play-circle");
    e.target.classList.add("fa-pause-circle");
    audioELement.src = `songs/${songIndex}.mp4`;
    masterSongName.innerText = `${songs[songIndex -1 ].songName}`;
    audioELement.currentTime = 0;
    audioELement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
  })
})

// Next Button
document.getElementById('next').addEventListener('click',()=>{
  if(songIndex >= 7) {  // songIndex can be 7 (as there are 7 songs)
    songIndex = 1;  // Loop back to first song
  }
  else{
    songIndex += 1;
  }

  audioELement.src = `songs/${songIndex}.mp4`;
  masterSongName.innerText = `${songs[songIndex - 1].songName}`; // Adjusted index
  audioELement.currentTime = 0;
  audioELement.play();
  masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-circle-pause');
})

// Previous Button
document.getElementById('previous').addEventListener('click',()=>{
  if(songIndex <= 1) {  // If it's the first song, go to the last song
    songIndex = 7;
  }
  else{
    songIndex -= 1;
  }

  audioELement.src = `songs/${songIndex}.mp4`;
  masterSongName.innerText = `${songs[songIndex - 1].songName}`;  // Adjusted index
  audioELement.currentTime = 0;
  audioELement.play();
  masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-circle-pause');
})


