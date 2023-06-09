import { gameContainer } from "./containers.js";
import { _H, _W } from "./core.js";

export const initializeDropZone = () => {

  const DropZone = new PIXI.Graphics();
  DropZone.beginFill(0x0694CC);
  DropZone.drawRect(0, 0, 100, _H);
  DropZone.x = _W-100;
  DropZone.y = 0;
  DropZone.endFill();
  DropZone.zIndex = 0;
  gameContainer.addChild(DropZone);
};
