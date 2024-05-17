const songList = [
  {
    albumArtImg: "resource/cover-1.png",
    title: "Lost in the City Lights",
    author: "Cosmo Sheldrake",
    duration: 112,
    src: "resource/lost-in-city-light-145038.mp3",
  },

  {
    albumArtImg: "resource/cover-2.png",
    title: "Forest Lullaby",
    author: "Lesfm",
    duration: 112,
    src: "resource/forest-lullaby-110624.mp3",
  },
  { title: "Song 3", author: "Artist 3", duration: 180, src: "song3.mp3" },
];

let currentSongIndex = 0;
let audio = new Audio();
let isPlaying = false;

// Get DOM elements
const albumArtImg = document.querySelector("album-art");
const songTitle = document.querySelector(".song-title");
const songAuthor = document.querySelector(".song-author");
const progressBar = document.querySelector(".progress");
const currentTimeElement = document.querySelector(".current-time");
const totalTimeElement = document.querySelector(".total-time");
const playBtn = document.querySelector(".play-btn");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const albumArtSources = [
  "resource/cover-1.png",
  "resource/cover-2.png",
  "album3.jpg",
];
let currentIndex = 0;

//updates the album art
function updateAlbumArt(index) {
  currentIndex = index;
  albumArtImg.src = albumArtSources[currentIndex];
}

prevBtn.addEventListener("click", () => {
  const prevIndex =
    (currentIndex - 1 + albumArtSources.length) % albumArtSources.length;
  updateAlbumArt(prevIndex);
});

nextBtn.addEventListener("click", () => {
  const nextIndex = (currentIndex + 1) % albumArtSources.length;
  updateAlbumArt(nextIndex);
});

// Load the first song
loadSong(songList[currentSongIndex]);

// Play/Pause the current song
playBtn.addEventListener("click", () => {
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Go to the previous song
prevBtn.addEventListener("click", prevSong);

// Go to the next song
nextBtn.addEventListener("click", nextSong);

// Update progress bar and time
progressBar.addEventListener("input", updateProgress);

function loadSong(song) {
  songTitle.textContent = song.title;
  songAuthor.textContent = song.author;
  audio.src = song.src;
  totalTimeElement.textContent = formatTime(song.duration);
}

function playSong() {
  audio.play();
  isPlaying = true;
  // playBtn.textContent = "Pause";
  updateProgressBar();
}

function pauseSong() {
  audio.pause();
  isPlaying = false;
  // playBtn.textContent = "Play";
}

function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songList.length) % songList.length;
  loadSong(songList[currentSongIndex]);
  playSong();
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songList.length;
  loadSong(songList[currentSongIndex]);
  playSong();
}

function updateProgress() {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.value = progress;
  currentTimeElement.textContent = formatTime(audio.currentTime);
}

function updateProgressBar() {
  setInterval(() => {
    if (isPlaying) {
      updateProgress();
    }
  }, 1000);
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}
