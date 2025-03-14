import { update as updateCobra, draw as drawCobra, cobraSpeed, getCobraHead, cobraColisao } from './cobra.js'
import { update as updateFood, draw as drawFood} from './food.js'
import { outsideGrid } from './grid.js'

const gameBoard = document.getElementById('gameBoard')

let lastRenderTime = 0
let gameOver = false

requestAnimationFrame(main)

function main(currenTime){
    if (gameOver) {
        if (confirm('Se fodeu')){
            location = '/'
        }
        return
    }

    requestAnimationFrame(main)

    const secondsSinceLastRender = (currenTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / cobraSpeed) return

    lastRenderTime = currenTime

    update()
    draw()
}

function update(){
    updateCobra()
    updateFood()
    checkDeath()
}

function draw(){
    gameBoard.innerHTML = ""
    drawCobra(gameBoard)
    drawFood(gameBoard)
}

function checkDeath(){
    gameOver = outsideGrid(getCobraHead()) || cobraColisao()
}