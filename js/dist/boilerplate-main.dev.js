"use strict";

var midiController;
var knob = {
  lineAmount: 85,
  lineResolution: 100,
  noiseScaleX: 0.1,
  noiseScaleY: 0.1,
  noiseStrength: 50,
  noiseSeed: 1
};
var slider = {
  currentPalette: 0
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  midiController = new MidiController(knob, slider); // Pass the knob and slider objects
}

function draw() {
  push();
  var strokeColor = midiController.colorPalettes[slider.currentPalette][0];
  var backgroundColor = midiController.colorPalettes[slider.currentPalette][1];
  background(backgroundColor);
  stroke(strokeColor);
  pop();
  midiController.displayValues(); // Display the current values
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}