let color = ["red" , "yellow" , "green" , "pink"]

function toChangeBackground(){
  let num = Math.floor(Math.random() * color.length)
  document.body.style.backgroundColor = color[num]

  document.getElementsByTagName("h1")[0].innerText =color[num]
}
