const movie = document.querySelector("#movie");
const back = document.querySelector("#back");
const reset = document.querySelector("#reset");
const advance = document.querySelector("#advance");
const range = document.querySelector("#range");

movie.addEventListener("click", playPause);

function playPause() {
  range.setAttribute("max", movie.duration)

  if (movie.paused) {
    movie.play();
  } else {
    movie.pause();
  }
}


reset.addEventListener("click", resetFunction);

function resetFunction() {
  movie.load();
}


let plus10;

advance.addEventListener("click", ()=> {
  plus10 = movie.currentTime += 10;
})


let moins10;

back.addEventListener("click", ()=> {
  moins10 = movie.currentTime -= 10;
})

movie.addEventListener("timeupdate", ()=> {
  range.value = movie.currentTime;
});

range.addEventListener("input", ()=> {
  movie.currentTime = range.value
});