// let creatio;

let knob = {
  lineCount: 10, // Number of vertical lines
  lineLength: 200, // Length of each line
  currentPalette: 6,
};

let slider = {
  test: 1,
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  creatio = new Creatio(knob, slider); // Pass the knob and slider objects
}

function draw() {
  let strokeColor = creatio.colorPalettes[knob.currentPalette][0];
  let backgroundColor = creatio.colorPalettes[knob.currentPalette][1];
  background(backgroundColor);
  stroke(strokeColor);

  // Draw vertical lines
  for (let i = 0; i < knob.lineCount; i++) {
    let x = (width / knob.lineCount) * i; // Calculate x position for each line
    line(
      x,
      height / 2 - knob.lineLength / 2,
      x,
      height / 2 + knob.lineLength / 2
    ); // Draw the line
  }

  creatio.displayValues(); // Display the current values
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
