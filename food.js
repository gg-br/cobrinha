import { onCobra, expandSnake } from "./cobra"

let food = {
    x:2,
    y:8
}

const expansionRate = 1

export function update(){
    if (onCobra(food)){
        expandSnake(expansionRate)
        food = getRandomFoodPosition()
    }
}

export function draw(gameBoard){
    const foodElement = document.createElement('div')
    foodElement.style.gridColumnStart = food.x
    foodElement.style.gridRowStart = food.y
    foodElement.classList.add('comida')
    gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition(){
    let newFoodPosition

    while (newFoodPosition = null || onCobra(newFoodPosition)){
        newFoodPosition = randomGridPosition()
    }

    return newFoodPosition
}