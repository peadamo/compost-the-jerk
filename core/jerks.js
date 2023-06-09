import { gameContainer, mouseposition } from "./containers.js";
import {
  isJerkSelected,
  set_isJerkSelected,
  set_selectedJerkIndex,
  tickerCounter,
} from "./core.js";
import { aliveToxicArray, toxicArray } from "./toxicWaste.js";

export const jerksArray = [];
export const aliveJerksArray = [];

let jerkCounter = 0;

export const newJerk = (x, y) => {
  let jerkCode = jerkCounter;

  const jerkBody = new PIXI.Graphics();
  jerkBody.beginFill(0xffffff, 0.01);
  jerkBody.drawRect(0, 0, 40, 40);
  jerkBody.x = x - 10;
  jerkBody.y = y - 10;
  jerkBody.endFill();
  jerkBody.zIndex = 4;

  gameContainer.addChild(jerkBody);
  jerkBody.interactive = true;

  // const jerkBodyView = new PIXI.Graphics();
  // jerkBodyView.beginFill(0x000000, 1);
  // jerkBodyView.drawRect(10, 10, 20, 20);
  // // jerkBodyView.x = jerkBody.x
  // // jerkBodyView.y = jerkBody.y
  // jerkBodyView.endFill();
  // jerkBodyView.zIndex = 2;
  let fixScale=30/888


  const jerkBodyView = PIXI.Sprite.from(`./assets/bastard1.png`)
  jerkBodyView.scale.x=fixScale
  jerkBodyView.scale.y=fixScale

  jerkBodyView.zIndex = 4;

  jerkBody.addChild(jerkBodyView);

  //
  jerkBody.on("mousedown", (event) => {
    set_isJerkSelected(true);

    set_selectedJerkIndex(jerkCode);
    jerksArray[jerkCode].state = "dragged";

    if (jerksArray[jerkCode].hasToxic) {
      toxicArray[jerksArray[jerkCode].toxicCode].free = true;
      toxicArray[jerksArray[jerkCode].toxicCode].sprite.angle = 0;

      jerksArray[jerkCode].hasToxic = false;
      jerksArray[jerkCode].toxicCode = undefined;
    }
  });

  jerkBody.on("mouseup", (event) => {
    set_isJerkSelected(false);

    set_selectedJerkIndex(undefined);

    if (jerksArray[jerkCode].x < 100) {
      jerksArray[jerkCode].state = "falling";
    } else {
      jerksArray[jerkCode].state = "running";
    }
  });

  //
  jerkBody.on("touchstart", (event) => {
    set_isJerkSelected(true);

    set_selectedJerkIndex(jerkCode);
    jerksArray[jerkCode].state = "dragged";

    if (jerksArray[jerkCode].hasToxic) {
      toxicArray[jerksArray[jerkCode].toxicCode].free = true;
      jerksArray[jerkCode].hasToxic = false;
      jerksArray[jerkCode].toxicCode = undefined;
    }
  });

  jerkBody.on("touchend", (event) => {
    set_isJerkSelected(false);

    set_selectedJerkIndex(undefined);

    if (jerksArray[jerkCode].x < 100) {
      jerksArray[jerkCode].state = "falling";
    } else {
      jerksArray[jerkCode].state = "running";
    }
  });
  //   jerkBody.on("mouseout", (event) => {
  //     if (isJerkSelected) {
  //       set_isJerkSelected(false);

  //       set_selectedJerkIndex(undefined);
  //     }
  //   });

  jerksArray.push({
    code: jerkCode,
    x: x,
    y: y,
    sprite: jerkBody,
    state: "running",
    hasToxic: false,
    toxicCode: undefined,
  });
  aliveJerksArray.push(jerksArray[jerkCode]);
  jerkCounter++;
};

export const clickAndDragJerk = (jerkIndex) => {
  const jerk = jerksArray[jerkIndex];
  jerk.x = mouseposition.x;
  jerk.y = mouseposition.y;
};

export const jerkUpdatePos = (jerk) => {
  jerk.sprite.x = jerk.x - 10;
  jerk.sprite.y = jerk.y - 10;
};

export const jerkActionController = (jerk) => {
  switch (jerk.state) {
    case "running":
      action_run(jerk);
      break;

    case "dragged":
      action_dragged(jerk);
      break;

    case "falling":
      action_fall(jerk);
      break;

    default:
      break;
  }
};

const action_run = (jerk) => {
  if (jerk.hasToxic) {
    jerk.x++;
    toxicArray[jerk.toxicCode].x = jerk.x + 30;
    toxicArray[jerk.toxicCode].y = jerk.y - 15;
  } else {
    searchToxic(jerk);
  }
};

const action_dragged = (jerk) => {};

const action_fall = (jerk) => {
  jerk.y++;
  jerk.sprite.rotation=jerk.sprite.rotation+0.01
};

export const crushTheJerk = (jerk) => {
  let jerkToKillIndex = aliveJerksArray.findIndex((e) => e.code === jerk.code);

  //elimino la imagen

  gameContainer.removeChild(jerk.sprite);

  //lo saco del array de jerks vivos
  aliveJerksArray.splice(jerkToKillIndex, 1);
};

export const theJerkWin = (jerk) => {
  let jerkToKillIndex = aliveJerksArray.findIndex((e) => e.code === jerk.code);

  //elimino la imagen

  gameContainer.removeChild(jerk.sprite);

  //lo saco del array de jerks vivos
  aliveJerksArray.splice(jerkToKillIndex, 1);

  let toxicToKillIndex = aliveToxicArray.findIndex(
    (e) => e.code === jerk.toxicCode
  );

  //elimino la imagen

  gameContainer.removeChild(toxicArray[jerk.toxicCode].sprite);

  //lo saco del array de toxics vivos
  aliveToxicArray.splice(toxicToKillIndex, 1);
};

const searchToxic = (jerk) => {
  let toxicDistance = 9999999999;
  let closestToxicIndex = undefined;
  //busca el toxico mas cercano
  for (let index = 0; index < toxicArray.length; index++) {
    const toxic = toxicArray[index];

    if (toxic.free) {
      let distance = Math.floor(
        Math.pow(
          Math.pow(toxic.x - jerk.x, 2) + Math.pow(toxic.y - jerk.y, 2),
          0.5
        )
      );

      if (distance <= toxicDistance) {
        toxicDistance = distance;
        closestToxicIndex = toxic.code;
      }
    }
  }

  if (toxicDistance < 10) {
    jerk.hasToxic = true;
    jerk.toxicCode = closestToxicIndex;
    toxicArray[closestToxicIndex].free = false;

    toxicArray[closestToxicIndex].sprite.angle=90

  } else {
    if (closestToxicIndex !== undefined) {
      if (toxicArray[closestToxicIndex].x > jerk.x) {
        jerk.x++;
      } else {
        jerk.x -= 1;
      }
      if (toxicArray[closestToxicIndex].y > jerk.y) {
        jerk.y++;
      } else {
        jerk.y -= 1;
      }
    }
  }
};
