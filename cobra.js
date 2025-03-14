export const cobraSpeed = 1

const cobraBody = [{
    x:11, y:11
 }]

export function update(){
    for (let i = cobraBody.length - 2; i >= 0; i--){
        cobraBody[i + 1] = { ...cobraBody[i]}
    }
    cobraBody[0].x += 1
    cobraBody[0].y += 0
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

