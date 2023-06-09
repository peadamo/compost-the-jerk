import { _H, _W, app } from "./core.js";

export let gameContainer = new PIXI.Container();
export let mouseposition = { x: 0, y: 0 };

export const startContainers = () => {
  app.stage.addChild(gameContainer);

  gameContainer.sortableChildren = true;
  gameContainer.interactive = true;
  gameContainer.interactiveChildren = true;
  gameContainer.width = _W;
  gameContainer.heigth = _H;



  gameContainer.on("touchmove", (event) => {
   console.log(2)
  });






  gameContainer.on("mousemove", (event) => {
    let posX = event.global.x - app.stage.x;
    let posY = event.global.y - app.stage.y;

    mouseposition = { x: posX, y: posY };
  });

  const terrain = new PIXI.Graphics();
  terrain.beginFill(0xffffff);
  terrain.drawRect(0, 0, _W, _H);
  terrain.endFill();
  gameContainer.addChild(terrain);
};
