function setup() {
    createCanvas(1300, 900);
    fill(0);
    background(247, 157, 0);
}

function draw() {

}

function mousePressed() {

    if (!sorted) {
        ellipse(mouseX, mouseY, 5, 5);
        points.push({ x: mouseX, y: mouseY, avail: true });
    }
    return false;
}

function keyPressed() {
    if (!sorted) {
        layers();
    }

    return false;
}