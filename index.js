// DRAW YOUR ART in drawArt() using p5js functions
// Draw on graphics object pg which has a size of cs x cs.
// You dont have to worry about window resizing.
// Do not override the p5js setup function, everything has to be done in drawArt.

// Available variables:
// pg: graphics object to draw on
// cs: canvas size
// m0, m1, m2, m3, m4 slider values

// IMPORTANT: every single part of the output must ONLY be dependent on the values m0..m4.

// if you need randomness, you can use the functions randomM0()..randomM4()
// these functions provide randomness seeded by the respective values m0..m4
function drawArt() {
    // Example:
    pg.noStroke();
    pg.background(m0 * 360, 100, 100);
    pg.fill(m1 * 360, 100, 100);
    pg.circle(m2 * cs, m3 * cs, 0.2 * cs);
    for (let i = 0; i < 200; i++) {
        pg.circle(randomM4() * cs, randomM4() * cs, randomM4() * cs * 0.01);
    }
}
