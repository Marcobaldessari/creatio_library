let midiController;

let knob = {
  lineCount: 10, // Number of vertical lines
  lineLength: 200, // Length of each line
};

let slider = {
  currentPalette: 6,
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  midiController = new MidiController(knob, slider); // Pass the knob and slider objects
}

function draw() {
  let strokeColor = midiController.colorPalettes[slider.currentPalette][0];
  let backgroundColor = midiController.colorPalettes[slider.currentPalette][1];
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

  midiController.displayValues(); // Display the current values
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
