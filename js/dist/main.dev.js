"use strict";

var midiController;
var variables = {
  lineCount: 10,
  // Number of vertical lines
  lineLength: 200,
  // Length of each line
  knob3: 0,
  knob4: 0,
  knob5: 0,
  knob6: 0,
  knob7: 0,
  knob8: 0,
  currentPalette: 6,
  slider2: 1,
  slider3: 1,
  slider4: 1,
  slider5: 1,
  slider6: 1,
  slider7: 1,
  slider8: 1
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  midiController = new MidiController(variables); // Pass the variables object
}

function draw() {
  background(215); // Draw vertical lines

  for (var i = 0; i < variables.lineCount; i++) {
    var x = width / variables.lineCount * i; // Calculate x position for each line

    line(x, height / 2 - variables.lineLength / 2, x, height / 2 + variables.lineLength / 2); // Draw the line
  }

  midiController.displayValues(); // Display the current values
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}