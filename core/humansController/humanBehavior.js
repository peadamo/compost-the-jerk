export const humanBehavior = (human) => {
    console.log( human)

    human.x++


    updatePos(human)


}




const updatePos = (human) => {
    


    human.sprite.x=human.x
    human.sprite.y=human.y



}