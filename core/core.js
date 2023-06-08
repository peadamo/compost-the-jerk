import { startContainers } from "./containers.js";
import { humanBehavior } from "./humansController/humanBehavior.js";
import { humanArray, newHuman } from "./humansController/humanProps.js";


//inicializacion y configuraciond el stage
export let _W = window.innerWidth;
export let _H = window.innerHeight;
export const app = new PIXI.Application({
  background: "#33ff66",
  width: _W,
  height: _H,
  resolution: window.devicePixelRatio,
  autoDensity: true,
  resizeTo: window,
});

document.body.appendChild(app.view);
app.stage.interactiveChildren = true;
app.ticker.maxFPS = 30;
app.stage.interactive = false;
app.stage.hitArea = app.screen;
app.stage.sortableChildren = true;
app.stage.hitArea.width = _W;
app.stage.hitArea.height = _H;

startContainers()
newHuman(_W/2,100)

const gameLogic = () => {
for (let index = 0; index < humanArray.length; index++) {
  const human = humanArray[index];
    humanBehavior(human)
}





};

//################    TICKER    ################
//################    TICKER    ################
//################    TICKER    ################
//################    TICKER    ################
//################    TICKER    ################
//################    TICKER    ################
let tickerCounter=0
app.ticker.add(() => {
  gameLogic();
  tickerCounter++
});




//################    EVENTOS DE ENTRADA    ################

addEventListener("keydown", (e) => {
  console.log(e.key);

  if (e.key === "ArrowUp") {
  }

  if (e.key === "ArrowRight") {
  }

  if (e.key === "ArrowLeft") {
  }


  if (e.key === "ArrowDown") {
  }
});

// //no esta bien la distincion entre un click y click y arrastrar

// app.stage.on("mousemove", (event) => {
//   let posX = event.global.x - app.stage.x;
//   let posY = event.global.y - app.stage.y;

//  let  mouseposition = { x: posX, y: posY };
//  console.log(   mouseposition   )
// });

// app.stage.on("mousedown", (event) => {
//   let posX = event.global.x - app.stage.x;
//   let posY = event.global.y - app.stage.y;

//   mousedown = { x: posX, y: posY };
// });

// app.stage.on("mouseup", (event) => {});

// app.stage.on("click", (event) => {


//   console.log(  mouseposition    )
// });
