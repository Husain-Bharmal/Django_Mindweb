let left = document.getElementById("left")
let centre = document.getElementById("centre")
let right = document.getElementById("right")
let song = document.getElementById("audio")
// let btn = document.getElementById("play_btn")
let playbtn = document.getElementById("playbutton")
let pause = document.getElementById("pausebutton")
// const imgobj =list[0]
let interval

let i=0

playbtn.addEventListener('click',()=>{
    song.play()
    interval = setInterval(() => {
    imgobj = list[i]
    left.innerHTML = `<img src=${imgobj[0]} />`
    right.innerHTML=    `<img src=${imgobj[0]} />`
    centre.innerHTML=   `<img src=${imgobj[1]} />`
    i++
}, 2400);
    return interval
})

pause.addEventListener('click',()=>{
    song.pause()
    clearInterval(interval);
})


// song.pause()
// imgobj = list[a]
// left.innerHTML = `<img src=${imgobj[0]} />`
// right.innerHTML=    `<img src=${imgobj[0]} />`
// centre.innerHTML=   `<img src=${imgobj[1]} />`

// song.play()
// let i=0
// setInterval(() => {
//     imgobj = list[i]
//     left.innerHTML = `<img src=${imgobj[0]} />`
//     right.innerHTML=    `<img src=${imgobj[0]} />`
//     centre.innerHTML=   `<img src=${imgobj[1]} />`
//     i++
// }, 2350);
