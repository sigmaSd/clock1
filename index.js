const board = document.getElementById("board")
const p1 = document.getElementById("p1")
const p2 = document.getElementById("p2")
const reset = document.getElementById("reset")
const settings = document.getElementById("settings")
if (!board || !p1 || !p2 || !reset || !settings) { throw "" }


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
  p2.style.backgroundColor = "#c1df55"
  p2.innerText = `${formatTime(time2--)}`;
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
  p1.style.backgroundColor = "#c1df55"
  p1.innerText = `${formatTime(time1--)}`;
  id1 = setInterval(() => {
    p1.innerText = `${formatTime(time1--)}`;
  }, 1000)


}

function resetFn(newTime = 10 * 60) {
  turn = undefined
  clearInterval(id1)
  time1 = newTime
  p1.innerText = `${formatTime(time1)}`;
  p1.style.backgroundColor = ""
  clearInterval(id2)
  time2 = newTime
  p2.innerText = `${formatTime(time2)}`;
  p2.style.backgroundColor = ""

  // in case settings menu changed this
  board.style.display = "flex"
  document.body.style.overflow = "hidden"
  document.body.style.fontSize = "8rem"
}
reset.onclick = () => resetFn()

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
}

settings.onclick = () => {
  const popup = document.createElement('div');
  popup.id = 'popup';
  popup.innerHTML = `
    <h2>Set Time</h2>
    <label for="timeInput">Enter time (in seconds):</label>
    <input type="number" id="timeInput" value="600" min="1" required>
    <button onclick="adjustTime(timeInput.value)">OK</button>
  `;

  board.style.display = "none"
  document.body.style.overflow = "visible"
  document.body.style.fontSize = "16px"
  document.body.appendChild(popup);
}

function adjustTime(newTime) {
  popup.remove()
  resetFn(newTime)
}
