"use strict";

var creatio;
var knob = {
  lineCount: 10,
  // Number of vertical lines
  lineLength: 200 // Length of each line

};
var slider = {
  currentPalette: 6
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  creatio = new Creatio(knob, slider); // Pass the knob and slider objects
}

function draw() {
  // let strokeColor = creatio.colorPalettes[slider.currentPalette][0];
  // let backgroundColor = creatio.colorPalettes[slider.currentPalette][1];
  // background(backgroundColor);
  // stroke(strokeColor);
  // Draw vertical lines
  for (var i = 0; i < knob.lineCount; i++) {
    var x = width / knob.lineCount * i; // Calculate x position for each line

    line(x, height / 2 - knob.lineLength / 2, x, height / 2 + knob.lineLength / 2); // Draw the line
  }

  creatio.displayValues(); // Display the current values
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}