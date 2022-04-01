let img;
let detector;

function preload() {
    img = loadImage('dog-cat.png')
    detector = ml5.objectDetector('cocossd')
}

function setup() {
    createCanvas(1500, 1000)
    image(img, 0, 0)

    detector.detect(img, goDetections)
}

function goDetections(error, results) {
    if (error) {
        console.error(error)
    }
    console.log(results)

    results.forEach((result) => {
        stroke(0, 255, 0)
        strokeWeight(5)
        noFill()
        rect(result.x, result.y, result.width, result.height)

        noStroke()
        fill(0, 255, 0)
        textSize(24)

        const label = `${result.label} - ${result.confidence.toFixed(2)}`
        text(label, result.x + 7, result.y + 24)
    })
}

