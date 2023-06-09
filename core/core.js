import { gameContainer, startContainers } from "./containers.js";
import { bloodAnim, bloodArray, initializeCrusher } from "./crusher.js";
import { initializeDropZone } from "./dropZone.js";
import {
  aliveJerksArray,
  clickAndDragJerk,
  crushTheJerk,
  jerkActionController,
  jerkUpdatePos,
  jerksArray,
  newJerk,
  theJerkWin,
} from "./jerks.js";
import { aliveToxicArray, newToxic, toxicArray, toxicUpdatePos } from "./toxicWaste.js";
import { crushBastards, startUserInterface, toxicxWasted } from "./userInterface.js";

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
app.ticker.maxFPS = 60;
app.stage.interactive = true;
app.stage.hitArea = app.screen;
app.stage.sortableChildren = true;
app.stage.hitArea.width = _W;
app.stage.hitArea.height = _H;
//inicializacion de cosas
startContainers();
initializeCrusher();
initializeDropZone()
startUserInterface()
//parametros de mecanicas

export let isJerkSelected = false;
export const set_isJerkSelected = (value) => {
  isJerkSelected = value;
};
let selectedJerkIndex = undefined;
export const set_selectedJerkIndex = (index) => {
  selectedJerkIndex = index;
};


let crushBastardsCounter=0
let toxicxWastedCounter=0

const gameLogic = () => {

  // crea nuevos Toxic
if(aliveToxicArray.length<20){



  let xpos=Math.random()*(_W/4)+100


  let yPos=Math.random()*(_H-100)+100
  newToxic(xpos,yPos)



}





//crea nuevos jerks

if(tickerCounter%(100-crushBastardsCounter)===0){

  // let xpos=Math.random()*(_W-200)+100
let yPos=Math.random()*(_H-100)+100
  newJerk(150, yPos);



}






  //drag del jerk
  if (isJerkSelected) {
    clickAndDragJerk(selectedJerkIndex);
  }
//update del jerk

  for (let index = 0; index < aliveJerksArray.length; index++) {
    const jerk = aliveJerksArray[index];

    jerkActionController(jerk);
    jerkUpdatePos(jerk);

    //verificacion de si es triturado
    if (jerk.y > 500 && jerk.x<100) {
      crushTheJerk(jerk);
      bloodAnim()
      crushBastardsCounter++
      crushBastards.text=`Bastardos Tirurados = ${crushBastardsCounter}`



    }
//verifica si llego a la dropZone

if (jerk.x>(_W-110) && jerk.hasToxic) {

  theJerkWin(jerk);


  toxicxWastedCounter++
  toxicxWasted.text=`Toxicos en el agua = ${toxicxWastedCounter}`
}

  }


  //toxic update
  for (let index = 0; index < toxicArray.length; index++) {
    const toxic = toxicArray[index];
    toxicUpdatePos(toxic)
  }

  //blood update
  for (let index = 0; index < bloodArray.length; index++) {
    const blood = bloodArray[index];
    
blood.y++



if(blood.y>_H){


gameContainer.removeChild(blood)

bloodArray.splice(bloodArray.findIndex((e)=>e===blood),1)







}




  }
};

//################    TICKER    ################
//################    TICKER    ################
//################    TICKER    ################
//################    TICKER    ################
//################    TICKER    ################
//################    TICKER    ################
export let tickerCounter = 0;
app.ticker.add(() => {
  gameLogic();
  tickerCounter++;
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
