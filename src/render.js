import "./render.css";

function getImageUrl(path) {
  return require(`./assets/${path}`);
}

export function render() {
  const el = document.createElement("div");
  el.classList.add("text");
  document.getElementsByTagName("body")[0].appendChild(el);
  el.innerHTML = "hello, world";

  const path = "test.png";
  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", require(`./assets/${path}`));
  document.getElementsByTagName("body")[0].appendChild(imgEl);
}
