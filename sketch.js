let img;

function preload() {
    img = loadImage('dog-cat.png')
}

function setup() {
    createCanvas(640, 480)
    image(img, 0, 0)
}

