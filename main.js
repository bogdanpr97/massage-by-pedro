import "./style.css";

const wave = document.querySelector(".wave");
let clipPath = "";

// this code 
// does things
// changing values
// changes things
const N = 100;
for (let i = 0; i < N + 1; i++) {
  clipPath =
    clipPath +
    `${(100 / N) * i}% ${
      100 * (0.9 + 0.04 * Math.sin((2 * Math.PI * i) / N))
    }%,`;
}

clipPath = clipPath + "100% 0%,0 0%";

clipPath = `polygon(${clipPath})`;

wave.style["clip-path"] = clipPath;
