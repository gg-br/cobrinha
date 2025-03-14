import { getInputDirection } from "./input.js"

export const cobraSpeed = 5

const cobraBody = [
    {x:11, y:11}
]

let newSegment = 0

export function update(){
    addSegments()

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

export function expandSnake(amount){
    newSegment += amount
}

export function addSegments(){
    for (let i = 0; i < newSegment; i++){
        cobraBody.push({ ...cobraBody[cobraBody.length - 1]})
    }

    newSegment = 0
}

export function onCobra(position, {ignoreHead = false}= {}){
    return cobraBody.some((segment, index) =>{
        if (ignoreHead && index == 0) return
        return position.x == segment.x && position.y == segment.y
    })
}

export function getCobraHead(){
    return cobraBody[0]
}

export function cobraColisao(){
    return onCobra(getCobraHead(),{
        ignoreHead: true
    } )
}