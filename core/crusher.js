import { gameContainer } from "./containers.js";
import { _H } from "./core.js";

export const initializeCrusher = () => {
  const crusher = new PIXI.Graphics();
  crusher.beginFill(0x000000);
  crusher.drawRect(0, 0, 100, 50);
  crusher.x = 0;

  crusher.y = 500;
  crusher.endFill();
  crusher.zIndex = 2;

  gameContainer.addChild(crusher);

  const crusherZone = new PIXI.Graphics();
  crusherZone.beginFill(0xbbbbbb);
  crusherZone.drawRect(0, 0, 100, _H);
  crusherZone.x = 0;
  crusherZone.y = 0;
  crusherZone.endFill();
  crusherZone.zIndex = 0;
  gameContainer.addChild(crusherZone);
};


export const bloodAnim = () => {
    

for (let index = 0; index < 5; index++) {



    newBlood(25+index*10)
    
}




}

export const bloodArray=[]
const newBlood = (x) => {
    

    const blood = new PIXI.Graphics();
    blood.beginFill(0xCC0C0C);
    blood.drawRect(0, 0, 5, 5);
    blood.x = x;
  
    blood.y = 550;
    blood.endFill();
    blood.zIndex = 1;
  
    gameContainer.addChild(blood);


bloodArray.push(blood)





}