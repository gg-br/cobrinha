import { update as updateCobra, draw as drawCobra, cobraSpeed } from './cobra.js'

const gameBoard = document.getElementById('gameBoard')

let lastRenderTime = 0

requestAnimationFrame(main)

function main(currenTime){
    requestAnimationFrame(main)

    const secondsSinceLastRender = (currenTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / cobraSpeed) return

    lastRenderTime = currenTime

    update()
    draw()
}

function update(){
    updateCobra()
}

function draw(){
    drawCobra(gameBoard)
}