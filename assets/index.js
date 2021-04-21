import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";

const video = document.querySelector("video");
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] });

const togglePlayBtn = document.querySelector("#togglePlay");
const toggleMuteBtn = document.querySelector("#toggleMute");

togglePlayBtn.onclick = () => player.togglePlay();
toggleMuteBtn.onclick = () => player.toggleMute();
