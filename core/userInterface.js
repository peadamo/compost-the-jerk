import { gameContainer } from "./containers.js";
import { _H, _W } from "./core.js";



export  const crushBastards = new PIXI.Text("Bastardos Tirurados = 0");
export  const toxicxWasted = new PIXI.Text("Toxicos en el agua = 0");

export const startUserInterface=()=>{



    const basicText = new PIXI.Text('Tritura al bastardo');

    basicText.x = _W/3
    basicText.y = 20
    basicText.zIndex=10
    gameContainer.addChild(basicText);



    crushBastards.x =0
    crushBastards.y = 20
    crushBastards.zIndex=10
    gameContainer.addChild(crushBastards);

    toxicxWasted.x = _W/3*2
    toxicxWasted.y = 20
    toxicxWasted.zIndex=10
    gameContainer.addChild(toxicxWasted);






}