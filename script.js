const container = document.querySelector(".container");
let count = 1;
function createGridRow() {
  for (let i = 0; i < 16; i++) {
    const cDiv = document.createElement("div");
    cDiv.classList.add("child");
    cDiv.textContent = `This is div ${count}`;
    container.appendChild(cDiv);
    count++;
    console.log("Div Created");
  }
}

createGridRow();
