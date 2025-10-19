var input = document.getElementById("input");

var btn = document.getElementsByTagName("button")[0];
var p = document.getElementsByTagName("p")[0];

var shortPara = "I'm a front-end web developer";
var longPara =
  "with over 4 years of experience creating visually stunning and responsive websites and web applications using frameworks like React and Bootstrap";

function seeMore() {
  if (btn.innerText == "seeMore") {
    p.innerText = longPara;
    btn.innerText = "See Less";
  } else {
    p.innerText = shortPara;
    btn.innerText = "seeMore";
  }
}

// function seeMore() {
//     if (btn.innerText == "SeeMore") {
//         p.innerText = longPara
//         btn.innerText = "See Less"
//     } else {
//         p.innerText = shortPara
//         btn.innerText = "SeeMore"
//     }
// }