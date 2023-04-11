"user strict";

console.log("--- loading handler: shadow")


function shadow(e) {
  const {offsetWidth: width, offsetHeight: height} = textarea;
  let {offsetX: x, offsetY: y} = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = walkDistance(x, width);
  const yWalk = walkDistance(y, height);

  const text = document.querySelector("h1");

  text.style.textShadow = `
  ${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, 0.7),
  ${xWalk * - 1}px ${yWalk}px 0 rgba(0 ,255, 255, 0.7),
  ${yWalk}px ${xWalk * -1}px 0 rgba(0, 255, 0,  0.7),
  ${yWalk * - 1}px ${xWalk}px 0 rgba(0, 0, 255, 0.7)
  `;

}