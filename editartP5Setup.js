// DO NOT EDIT THIS FILE
// IT WILL BE RESET TO DEAFULT BEFORE DEPLOYMENT

let pg;
let cs = 2000;


function draw() {
    seedRandomness();
    pg.clear();
    drawArt();
    setImage();
    triggerPreview();
    parent.postMessage("editArtSketchLoaded", "*");
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        save();
    }
}

function windowResized() {
    setImage();
}

function setup() {
    noLoop();
    is = min(windowHeight, windowWidth);
    createCanvas(is, is);
    pg = createGraphics(cs, cs);
    pg.colorMode(HSB);
    pg.pixelDensity(1);
}

function setImage() {
    clear();
    is = min(windowHeight, windowWidth);
    resizeCanvas(is, is, true);
    copy(pg, 0, 0, cs, cs, 0, 0, is, is);
}
