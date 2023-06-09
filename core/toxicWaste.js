import { gameContainer } from "./containers.js";

export const toxicArray=[]
export const aliveToxicArray=[

]


let toxicCounter=0



export const newToxic=(x,y)=>{

    let toxicCode = toxicCounter;


    // const toxicSprite = PIXI.Sprite.from(`./assets/toxic.png`);

    // gameContainer.addChild(toxicSprite);



    // const toxicBody = new PIXI.Graphics();
    // toxicBody.beginFill(0xCCC314);
    // toxicBody.drawRect(0, 0, 20, 20);
    // toxicBody.x = x - 10;
    // toxicBody.y = y - 10;
    // toxicBody.endFill();
    // toxicBody.zIndex = 3;
  
    // gameContainer.addChild(toxicBody);
    // toxicBody.interactive = true;
let fixScale=30/380

    const toxicBody = PIXI.Sprite.from(`./assets/toxic.png`);
    console.log( toxicBody.texture.height)
    toxicBody.scale.x=fixScale
    toxicBody.scale.y=fixScale

    toxicBody.x = x - 10;
    toxicBody.y = y - 10;
    toxicBody.zIndex = 3;
  
    gameContainer.addChild(toxicBody);
    toxicBody.interactive = true;









    toxicArray.push({
        code: toxicCode,
        x: x,
        y: y,
        sprite: toxicBody,
        free:true,
      });
      aliveToxicArray.push(toxicArray[toxicCode]);
      toxicCounter++;



}



export const  toxicUpdatePos = (toxic) => {
    toxic.sprite.x = toxic.x - 10;
    toxic.sprite.y = toxic.y - 10;
  };