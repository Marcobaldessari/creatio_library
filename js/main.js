// let creatio;

let v = {
  lineCount: 10, // Number of vertical lines
  lineLength: 200, // Length of each line
};

let a = {
  currentPalette: 6,
  translateX: 0,
  translateY: 0,
  translateZ: 0,
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  creatio = new Creatio(v, a); // Pass the variables. v are variables that change proportionally, a are variables that increase/decrease by 1
}

function draw() {
  let strokeColor = creatio.colorPalettes[a.currentPalette][0];
  let backgroundColor = creatio.colorPalettes[a.currentPalette][1];
  background(backgroundColor);
  stroke(strokeColor);

  // Draw vertical lines
  for (let i = 0; i < v.lineCount; i++) {
    let x = (width / v.lineCount) * i; // Calculate x position for each line
    line(x, height / 2 - v.lineLength / 2, x, height / 2 + v.lineLength / 2); // Draw the line
  }

  creatio.displayValues(); // Display the current values
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
