const music = new Audio("audio/1.mp3");

const songs = [
    {
        id: "1",
        songName: `On My Way <br> <div class="subtitle">Alan Walker</div>`,
        poster: "img/1.jpg"
    },

    {
        id: "2",
        songName: `Alan Walker-Fade <br> <div class="subtitle"> Alan Walker</div>`,
        poster: "img/2.jpg"
    },
    {
        id: "3",
        songName: `Alan Walker-Fade <br> <div class="subtitle"> Alan Walker</div>`,
        poster: "img/2.jpg"
    },
    {
        id: "4",
        songName: `Alan Walker-Fade <br> <div class="subtitle"> Alan Walker</div>`,
        poster: "img/2.jpg"
    },
    {
        id: "5",
        songName: `Alan Walker-Fade <br> <div class="subtitle"> Alan Walker</div>`,
        poster: "img/2.jpg"
    },
    {
        id: "6",
        songName: `Alan Walker-Fade <br> <div class="subtitle"> Alan Walker</div>`,
        poster: "img/2.jpg"
    },
    {
        id: "7",
        songName: `Alan Walker-Fade <br> <div class="subtitle"> Alan Walker</div>`,
        poster: "img/2.jpg"
    },
    {
        id: "8",
        songName: `Alan Walker-Fade <br> <div class="subtitle"> Alan Walker</div>`,
        poster: "img/2.jpg"
    },
    {
        id: "9",
        songName: `Alan Walker-Fade <br> <div class="subtitle"> Alan Walker</div>`,
        poster: "img/2.jpg"
    },
    {
        id: "10",
        songName: `Alan Walker-Fade <br> <div class="subtitle"> Alan Walker</div>`,
        poster: "img/2.jpg"
    },
    {
        id: "11",
        songName: `Alan Walker-Fade <br> <div class="subtitle"> Alan Walker</div>`,
        poster: "img/2.jpg"
    },
    {
        id: "12",
        songName: `Alan Walker-Fade <br> <div class="subtitle"> Alan Walker</div>`,
        poster: "img/2.jpg"
    },
    {
        id: "13",
        songName: `Alan Walker-Fade <br> <div class="subtitle"> Alan Walker</div>`,
        poster: "img/2.jpg"
    },
    {
        id: "14 ",
        songName: `Alan Walker-Fade <br> <div class="subtitle"> Alan Walker</div>`,
        poster: "img/2.jpg"
    },
]

Array.from(document.getElementsByClassName("songItem")).forEach((element, i) => {
    element.getElementbyTagName("img")[0].src = songs[i].poster;
    element.getElementsByTargetName("h5")[0].innerHTML = songs[i].songName;
})

let masterPlay = document.getElementById("masterPlay");

masterPlay.addEventListener("click", () =>{
    if(music.paused || music.currentTime <= 0){
        music.play();
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");
    }else{
        music.paused();
        masterPlay.classList.add("bi-play-fill");
        masterPlay.classList.remove("bi-pause-fill");
    }
})