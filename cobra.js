import { getInputDirection } from "./input.js"

export const cobraSpeed = 5

const cobraBody = [
    {x:11, y:11},
    {x:10, y:11},
    {x:9, y:11},
]

export function update(){
    const inputDirection = getInputDirection()

    for (let i = cobraBody.length - 2; i >= 0; i--){
        cobraBody[i + 1] = { ...cobraBody[i]}
    }

    cobraBody[0].x += inputDirection.x
    cobraBody[0].y += inputDirection.y
}

export function draw(gameBoard){
    cobraBody.forEach(segment => {
        const cobraElement = document.createElement('div')
        cobraElement.style.gridColumnStart = segment.x
        cobraElement.style.gridRowStart = segment.y
        cobraElement.classList.add('cobra')
        gameBoard.appendChild(cobraElement)
    })
}

