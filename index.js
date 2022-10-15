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
