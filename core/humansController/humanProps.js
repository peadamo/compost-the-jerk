import { gameContainer } from "../containers.js";

export const humanArray = [];
let humanCounter = 0;

export const newHuman = (x, y) => {
  let bodyContainer = new PIXI.Container();
  gameContainer.addChild(bodyContainer);
  bodyContainer.interactive = true;
  bodyContainer.x = x
  bodyContainer.y = y
  bodyContainer.on("click", (event) => {


      console.log(  2    )
    });

  humanArray.push({
    index: humanCounter,
    x: x,
    y: y,
    bodyParts:createBody(bodyContainer),
    sprite: bodyContainer,
  });
  humanCounter++;
};

const createBody = (bodyContainer) => {
let bodyParts={}
let size=2
let skinColor=0xEFC8A9
let eyeColor=0x000000
let chest_H=size*7
let chest_W=size*10
let belly_H=size*6
let belly_W=size*8
let hips_H=size*3
let hips_W=size*8
let leg_H=size*10
let leg_W=size*3
let arm_H=size*15
let arm_W=size*2.5
let head_H=size*6
let head_W=size*6


let eye_H=size*1
let eye_W=size*1



  const chest = new PIXI.Graphics();
  chest.lineStyle(1, 0x000000, 1);
  chest.beginFill(skinColor);
  chest.drawRect(0, 0, chest_W, chest_H);
  chest.endFill();
  chest.x=-chest_W/2
  chest.y=0
  bodyContainer.addChild(chest);
  bodyParts={...bodyParts,chest:chest}



  const belly = new PIXI.Graphics();
  belly.lineStyle(1, 0x000000, 1);
  belly.beginFill(skinColor);
  belly.drawRect(0, 0, belly_W, belly_H);
  belly.endFill();
  belly.x=-belly_W/2
  belly.y=chest.y+chest_H
  bodyContainer.addChild(belly);
  bodyParts={...bodyParts,belly:belly}



  const hips = new PIXI.Graphics();
  hips.lineStyle(1, 0x000000, 1);
  hips.beginFill(skinColor);
  hips.drawRect(0,0, hips_W, hips_H);
  hips.endFill();
  hips.x=-hips_W/2
  hips.y=belly.y+belly_H
  bodyContainer.addChild(hips);
  bodyParts={...bodyParts,hips:hips}




  const leg_left = new PIXI.Graphics();
  leg_left.lineStyle(1, 0x000000, 1);
  leg_left.beginFill(skinColor);
  leg_left.drawRect(0, 0, leg_W, leg_H);
  leg_left.endFill();
  leg_left.x=hips.x
  leg_left.y=hips.y+hips_H
  bodyContainer.addChild(leg_left);
  bodyParts={...bodyParts,leg_left:leg_left}


  const leg_rigth = new PIXI.Graphics();
  leg_rigth.lineStyle(1, 0x000000, 1);
  leg_rigth.beginFill(skinColor);
  leg_rigth.drawRect(0, 0, leg_W, leg_H);
  leg_rigth.endFill();
  leg_rigth.x=hips.x+hips_W-leg_W
  leg_rigth.y=hips.y+hips_H
  bodyContainer.addChild(leg_rigth);
  bodyParts={...bodyParts,leg_rigth:leg_rigth}




  const arm_left = new PIXI.Graphics();
  arm_left.lineStyle(1, 0x000000, 1);
  arm_left.beginFill(skinColor);
  arm_left.drawRect(0, 0, arm_W, arm_H);
  arm_left.endFill();
  arm_left.x=chest.x-arm_W
  arm_left.y=chest.y
  bodyContainer.addChild(arm_left);
  bodyParts={...bodyParts,arm_left:arm_left}


  const arm_rigth = new PIXI.Graphics();
  arm_rigth.lineStyle(1, 0x000000, 1);
  arm_rigth.beginFill(skinColor);
  arm_rigth.drawRect(0, 0, arm_W, arm_H);
  arm_rigth.endFill();
  arm_rigth.x=chest.x+chest_W
  arm_rigth.y=chest.y
  bodyContainer.addChild(arm_rigth);
  bodyParts={...bodyParts,arm_rigth:arm_rigth}



  const head = new PIXI.Graphics();
  head.lineStyle(1, 0x000000, 1);
  head.beginFill(skinColor);
  head.drawRect(0,0, head_W, head_H);
  head.endFill();
  head.x=-head_W/2
  head.y=chest.y-head_H
  bodyContainer.addChild(head);
  bodyParts={...bodyParts,head:head}
 



  const eye_left = new PIXI.Graphics();
  eye_left.lineStyle(1, 0x000000, 1);
  eye_left.beginFill(eyeColor);
  eye_left.drawRect(0, 0, eye_W, eye_H);
  eye_left.endFill();
  eye_left.x=head.x+head_W/5
  eye_left.y=head.y+head_H/4*1
  bodyContainer.addChild(eye_left);
  bodyParts={...bodyParts,eye_left:eye_left}


  const eye_rigth = new PIXI.Graphics();
  eye_rigth.lineStyle(1, 0x000000, 1);
  eye_rigth.beginFill(eyeColor);
  eye_rigth.drawRect(0, 0, eye_W, eye_H);
  eye_rigth.endFill();
  eye_rigth.x=head.x+head_W/5*3
  eye_rigth.y=head.y+head_H/4*1
  bodyContainer.addChild(eye_rigth);
  bodyParts={...bodyParts,eye_rigth:eye_rigth}














return bodyParts



};
