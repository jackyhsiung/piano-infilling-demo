const modelList = document.getElementsByClassName("model")

for (let item of modelList) {
  item.addEventListener("click", function () {
    const prevSelected = document.getElementsByClassName("model selected")[0]
    prevSelected.classList.remove('selected');
    item.classList.add('selected')

    const midiURL = item.getAttribute('midi-url')
    document.getElementById("inpainted-music-visualizer").src = midiURL
    document.getElementById("inpainted-music-player").src = midiURL
  });
}
// console.log(anchorList)