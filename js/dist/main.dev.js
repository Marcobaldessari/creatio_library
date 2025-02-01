"use strict";

// let creatio;
var knob = {
  lineCount: 10,
  // Number of vertical lines
  lineLength: 200 // Length of each line

};
var ints = {
  currentPalette: 6,
  test: 1
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  creatio = new Creatio(knob, ints); // Pass the knob and slider objects
}

function draw() {
  var strokeColor = creatio.colorPalettes[ints.currentPalette][0];
  var backgroundColor = creatio.colorPalettes[ints.currentPalette][1];
  background(backgroundColor);
  stroke(strokeColor); // Draw vertical lines

  for (var i = 0; i < knob.lineCount; i++) {
    var x = width / knob.lineCount * i; // Calculate x position for each line

    line(x, height / 2 - knob.lineLength / 2, x, height / 2 + knob.lineLength / 2); // Draw the line
  }

  creatio.displayValues(); // Display the current values
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}