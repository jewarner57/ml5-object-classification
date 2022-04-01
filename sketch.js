let video;
let detector;
let results = [];

function preload() {
    detector = ml5.objectDetector('cocossd')
}

function setup() {
    createCanvas(1500, 1000)
    video = createCapture(VIDEO)
    detector.detect(video, goDetections)
}

function draw() {
    background(255)
    image(video, 0, 0)

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

function goDetections(error, resultList) {
    if (error) {
        console.error(error)
    }

    results = resultList

    detector.detect(video, goDetections)
}

