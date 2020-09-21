const canvas = document.getElementById('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext('2d')


const rectSize = 20


const draw = () => {

    const xRects = Math.floor(window.innerWidth / rectSize)
    const yRects = Math.floor(window.innerHeight / rectSize)

    const rFactor = Math.floor(255 / yRects)
    const gFactor = Math.floor(255 / xRects)    
    const bFactor = Math.floor(255 / (xRects + yRects))

    
    //console.log(`${xRects}, ${yRects}`)
    //console.log(factor)

    for (let i = 0; i <= yRects; i++) {
        for (let j = 0; j <= xRects; j++) {
            console.log(`${i * rFactor}, ${j * gFactor}, ${(i+j) * bFactor}`)
            ctx.fillStyle = `rgb(${i * rFactor}, ${j * gFactor}, ${(i+j) * bFactor})`
            ctx.fillRect(j * rectSize, i * rectSize, rectSize, rectSize)
        }
    }

    //ctx.font = '100px Courier New'
    //ctx.fillText('Rectangles Palette', 200, 300)
}

// const draw = () => {
//     for (let i = 0; i < 60; i++) {
//         for (let j = 0; j < 60; j++) {
//             //console.log(`${i * 5}, ${j * 5}, ${(i+j) * 50}`)
//             ctx.fillStyle = `rgb(${i * 5}, ${j * 5}, ${(i+j) * 50})`
//             ctx.fillRect(j * rectSize, i * rectSize, rectSize, rectSize)
//         }
//     }

//     ctx.font = '100px Courier New'
//     ctx.fillText('Test', 200, 300)
// }

draw()


const debounce = (func) => {
    let timer
    return (event) => {
        if (timer) { clearTimeout(timer) }
        timer = setTimeout(func, 100, event)
    }
  }
  
  window.addEventListener('resize', debounce(() => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    draw()
  }))