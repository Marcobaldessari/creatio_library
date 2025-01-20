let midiController;
let variables = {
  lineCount: 10, // Number of vertical lines
  lineLength: 200, // Length of each line
  cazzp: 2,
};

function setup() {
  createCanvas(630, 1000);
  midiController = new MidiController(variables); // Pass the variables object
}

function draw() {
  background(215);

  // Draw vertical lines
  for (let i = 0; i < variables.lineCount; i++) {
    let x = (width / variables.lineCount) * i; // Calculate x position for each line
    line(
      x,
      height / 2 - variables.lineLength / 2,
      x,
      height / 2 + variables.lineLength / 2
    ); // Draw the line
  }

  midiController.displayValues(); // Display the current values
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
