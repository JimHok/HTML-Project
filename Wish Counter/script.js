const w = [];
var el;
var chil;
var wishC = 0;
var audio = new Audio("./video/4starwish-single.mp4");
audio.volume = 0.4;
var star4sound = new Audio("./video/4starsound.mp4");
var star5sound = new Audio("./video/5starsound.mp4");

function getRandomPull() {
  var num = Math.random();
  if (num < 0.1) return 5;
  else return 4; //probability 0.9
}

function getRandom(c) {
  var num = Math.random();
  const count = c;
  for (let i = 0; i < count; i++) {
    // console.log(num, (1 / count) * (i + 1), i + 1);
    if (num < (1 / count) * (i + 1)) return i + 1;
  }
}

function removeEl() {
  el = document.getElementById("char");
  chil = document.getElementById("pullChar");
  el.removeChild(chil);
}

function reinsertEl() {
  el.appendChild(chil);
}

function Wish(wish) {
  let star;
  for (let i = 0; i < wish; i++) {
    let p = getRandomPull();
    w.push(p);
    if (star != 5) {
      star = p;
    }
  }
  console.log(w);
  document.getElementById("pull").style.display = "block";
  if (wish > 1) {
    document.getElementById("pullVid").src = "./video/" + star + "starwish.mp4";
  } else {
    document.getElementById("pullVid").src =
      "./video/" + star + "starwish-single.mp4";
  }
  audio.play();
}

function skip() {
  let video = document.getElementById("pullVid");
  video.currentTime = video.duration;
  audio.currentTime = audio.duration;
}

function vidEnd(e) {
  document.getElementById("pull").style.display = "none";
  document.getElementById("pullBack").src = "./Image/0.jpg";
  console.log(w[wishC]);
  star5sound.currentTime = 0;
  star4sound.currentTime = 0;
  if (w[wishC] == 5) {
    document.getElementById("pullChar").src =
      "./Image/5star/" + getRandom(22) + ".png";
    star4sound.currentTime = star4sound.duration;
    star5sound.play();
  } else if (w[wishC] == 4) {
    document.getElementById("pullChar").src =
      "./Image/4star/" + getRandom(23) + ".png";
    star5sound.currentTime = star5sound.duration;
    star4sound.play();
  } else {
    return closeChar();
  }
  document.getElementById("charBack").style.display = "block";
  document.getElementById("char").style.display = "flex";
  document.getElementById("close").style.display = "flex";
  wishC += 1;
  removeEl();
  reinsertEl();
}

function closeChar() {
  document.getElementById("close").style.display = "none";
  document.getElementById("char").style.display = "none";
  document.getElementById("charBack").style.display = "none";
  w.length = 0;
  wishC = 0;
  star5sound.currentTime = star5sound.duration;
  star4sound.currentTime = star4sound.duration;
}
