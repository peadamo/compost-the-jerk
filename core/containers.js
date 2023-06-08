import { _H, _W, app } from "./core.js";

export let gameContainer = new PIXI.Container();


export const startContainers = () => {

app.stage.addChild(gameContainer);

  gameContainer.sortableChildren = true;
  gameContainer.interactive = true;
  gameContainer.interactiveChildren = true;
  gameContainer.width = _W;
  gameContainer.heigth = _H;

// gameContainer.on("click", (event) => {
//   let posX = event.global.x - app.stage.x;
//   let posY = event.global.y - app.stage.y;

//  let  mouseposition = { x: posX, y: posY };
//  console.log(   mouseposition   )
// });

  




    const terrain = new PIXI.Graphics();
  terrain.beginFill(0x83BE20);
  terrain.drawRect(0, 0, _W, _H);
  terrain.endFill();
  gameContainer.addChild(terrain);





};
