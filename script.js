function submission(e) {
  var right = document.querySelector(".right");
  var textfield = document.querySelector("textarea");
  var createDiv = document.createElement("div");
  createDiv.innerHTML = `
        <div>${textfield.value}</div>
        <button>update</button> <button>save</button>
    `;
  right.appendChild(createDiv);
}
