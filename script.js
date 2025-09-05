var arr = [
{SongName:"Aaj Bhi",url:"Songs/Aaj Bhi - Vishal Mishra.mp3",img:"Images/MV5BYTFiZjRjYWQtNGQzMC00NjQwLThlNTctZmM5NTdmZDZmNzlkXkEyXkFqcGc@._V1_.jpg"},
{SongName:"Asal Mein",url:"Songs/Asal Mein - Darshan Raval.mp3",img:"Images/MV5BZDRkZjY4YzAtZjI4Mi00ZDZlLTljMjUtM2E1NDhmOTFlOWJiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"},
{SongName:"Libaas",url:"Songs/Libaas - Kaka.mp3",img:"Images/600x600bf-60.jpg"},
{SongName:"Shiv Sama Rhe",url:"Songs/Shiv Sama Rahe - Hansraj Raghuwanshi.mp3",img:"Images/Shiv-Sama-Rahe-Hindi-2021-20210102222527-500x500.jpg"}

]
var allSongs = document.querySelector(".allsongs")
var poster = document.querySelector(".left")
var play = document.querySelector(".play")
var backward = document.querySelector(".backward")
var forward = document.querySelector(".forward")
var audio = new Audio()
var selectedSong = 0
function mainFunction(){
    var clutter = ""

arr.forEach(function(elem,index){
    clutter += `<div class="song-card" id=${index}>
                    <div class="part1">
                        <img src=${elem.img} alt="">
                        <h2>${elem.SongName}</h2>
                    </div>
                    <h6>3:56</h6>
                </div>`
})
allSongs.innerHTML = clutter

audio.src = arr[selectedSong].url
poster.style.backgroundImage = `url(${arr[selectedSong].img})`
}
mainFunction()

allSongs.addEventListener("click",function(dets){
    selectedSong = dets.target.id
    mainFunction()
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
    flag = 1
    audio.play()
})
var flag = 0

play.addEventListener("click",function(){
    if(flag == 0){
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
        mainFunction()
        audio.play()
        flag = 1
    }else{
        play.innerHTML = `<i class="ri-play-mini-fill"></i>`
        mainFunction()
        audio.pause()
        flag = 0
    }
})
forward.addEventListener("click",function(){
    if(selectedSong < arr.length - 1){
        selectedSong++
        mainFunction()
        audio.play()
    }else{
        forward.style.opacity = 0.4
    }
})
backward.addEventListener("click",function(){
    if(selectedSong > 0){
        selectedSong--
        mainFunction()
        audio.play()
    }else{
        backward.style.opacity = 0.4
    }
})

