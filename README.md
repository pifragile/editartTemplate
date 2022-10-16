# EditART Template Instructions
## Create your art
### Do:
- Draw your art in `drawArt()` in `index.js` using p5js functions.
- Draw on graphics object `pg` which has a size of cs x cs.
- Only static images are supported.
- Make a sketch that renders fast for the best user experience.

### Don't:
- Do not override the p5js `setup` or `draw` function, everything has to be done in `drawArt`.
- You dont have to worry about window resizing, do not override the `windowResized` function.
- Don't use any source of randomness other than the one described below.
- Don't edit any files other than `index.js` and `index.html`. They will be reset to default before deployment.
- If you use any libraries, include all source files in the project. Do not load any dependencies from the internet.


> **_IMPORTANT:_** Every single part of the output must ONLY depend on the values `m0`..`m4`. Otherwise the pieces will change after minting.

## Available variables
- `pg`: graphics object to draw on
- `cs`: canvas size
- `m0`, `m1`, `m2`, `m3`, `m4` slider values

## Randomness

If you need randomness, you can use the functions `randomM0()`..`randomM4()`
these functions provide randomness seeded by the respective values `m0`..`m4`.  
> **_NOTE:_** You can set the `randomSeed` variable in `index.html` to any string you like in order to distinguish your randomness from the one of other projects.

## Testing
In order to test your project with the EditART platform, start a local development server of your project and paste its address in [the sandbox](https://www.editart.xyz/sandbox) and you can start playing around with the sliders.


## Project ready or questions?
Is you have a finished project or any questions, send me a DM on twitter [@pifragile](https://twitter.com/pifragile). Looking forward to hearing from you!
