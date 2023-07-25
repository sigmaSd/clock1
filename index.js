const p1 = document.getElementById("p1")
const p2 = document.getElementById("p2")
const reset = document.getElementById("reset")
if (!p1 || !p2 || !reset) { throw "" }


let time1 = 10 * 60
let time2 = 10 * 60
let id1
let id2
let turn

p1.innerText = `${formatTime(time1)}`;
p1.onclick = () => {
  if (time2 == 0) { return }
  if (turn == "p2") { return }
  turn = "p2"
  clearInterval(id1)
  p1.style.backgroundColor = ""
  p2.style.backgroundColor = "#38800e"
  id2 = setInterval(() => {
    p2.innerText = `${formatTime(time2--)}`;
  }, 1000)

}

p2.innerText = `${formatTime(time2)}`;
p2.onclick = () => {
  if (time1 == 0) { return }
  if (turn == "p1") { return }
  turn = "p1"
  clearInterval(id2)
  p2.style.backgroundColor = ""
  p1.style.backgroundColor = "#38800e"
  id1 = setInterval(() => {
    p1.innerText = `${formatTime(time1--)}`;
  }, 1000)


}

reset.onclick = () => {
  turn = undefined
  clearInterval(id1)
  time1 = 10 * 60
  p1.innerText = `${formatTime(time1)}`;
  p1.style.backgroundColor = ""
  clearInterval(id2)
  time2 = 10 * 60
  p2.innerText = `${formatTime(time2)}`;
  p2.style.backgroundColor = ""
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
}

