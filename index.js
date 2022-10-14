let pg;
let cs = 2000;

function setup() {
    is = min(windowHeight, windowWidth);
    createCanvas(is, is);
    pg = createGraphics(cs, cs);
    pg.colorMode(HSB);
    pg.pixelDensity(1);
}

function setImage() {
    clear();
    is = min(windowHeight, windowWidth);
    resizeCanvas(is, is);
    copy(pg, 0, 0, cs, cs, 0, 0, is, is);
}

function drawArt() {
    // DRAW YOUR ART HERE using p5js
    // using the variables m0, m1, m2, m3, m4
    // every single part of the output must ONLY be dependent on the values m0..m4.
    // if you need randomness, you can use the functions randomM0()..randomM4()
    // these functions provide randomness seeded by the respective values m0..m4

    // Example:
    pg.noStroke();
    pg.background(m0 * 360, 100, 100);
    pg.fill(m1 * 360, 100, 100);
    pg.circle(m2 * cs, m3 * cs, 0.2 * cs);
    for (let i = 0; i < 200; i++) {
        pg.circle(randomM4() * cs, randomM4() * cs, randomM4() * cs * 0.01);
    }

}
function draw() {
    noLoop();
    pg.clear();
    drawArt();
    setImage();
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        save();
    }
}

function windowResized() {
    setImage();
}
