"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var midiControllerInstance; // Declare the instance variable

function setup() {
  createCanvas(400, 400); // Example canvas size

  var variableObject = {
    var1: 0,
    var2: 0
  }; // Example variable object

  midiControllerInstance = new MidiController(variableObject); // Create an instance
}

var MidiController =
/*#__PURE__*/
function () {
  function MidiController(variableObject) {
    _classCallCheck(this, MidiController);

    this.variableObject = variableObject; // Store the variable object

    this.variables = Object.keys(variableObject); // Get variable names

    this.values = new Array(this.variables.length).fill(0);
    this.lastValues = new Array(this.variables.length).fill(0); // Track last values

    this.midiInputs = [16, 17, 18, 19, 20, 21, 22, 23]; // MIDI knob inputs

    this.showValues = true; // Track visibility of values

    this.setupMidi(); // Initialize values based on the current state of the knobs

    this.initializeValues();
  }

  _createClass(MidiController, [{
    key: "setupMidi",
    value: function setupMidi() {
      var _this = this;

      if (navigator.requestMIDIAccess) {
        navigator.requestMIDIAccess().then(function (midiAccess) {
          var inputs = midiAccess.inputs;
          inputs.forEach(function (input) {
            input.onmidimessage = _this.handleMidiMessage.bind(_this);
          });
        })["catch"](function (error) {
          console.error("MIDI Access Error:", error);
        });
      } else {
        console.error("Web MIDI API is not supported in this browser.");
      }
    }
  }, {
    key: "initializeValues",
    value: function initializeValues() {
      // Set initial values based on the current state of the MIDI knobs
      for (var i = 0; i < this.midiInputs.length; i++) {
        this.lastValues[i] = this.variableObject[this.variables[i]] || 0; // Initialize last values

        this.values[i] = this.lastValues[i]; // Set initial values
      }
    }
  }, {
    key: "handleMidiMessage",
    value: function handleMidiMessage(message) {
      var _message$data = _slicedToArray(message.data, 3),
          status = _message$data[0],
          data1 = _message$data[1],
          data2 = _message$data[2];

      console.log("MIDI Message: Status: ".concat(status, ", Data1: ").concat(data1, ", Data2: ").concat(data2)); // Log the MIDI message

      var knobIndex = this.midiInputs.indexOf(data1);

      if (knobIndex !== -1) {
        // Check the value of data2 to determine increment or decrement
        if (data2 === 1) {
          this.values[knobIndex] += this.variableObject[this.variables[knobIndex]] * 0.05; // Increment by one-fifth
        } else if (data2 === 65) {
          this.values[knobIndex] -= this.variableObject[this.variables[knobIndex]] * 0.05; // Decrement by one-fifth
        } // Update the corresponding variable in the object


        if (this.variables[knobIndex]) {
          this.variableObject[this.variables[knobIndex]] = this.values[knobIndex]; // Update the variable in the object
        } // Store the current data2 as the last value (optional, if you want to track changes)


        this.lastValues[knobIndex] = data2;
      }
    }
  }, {
    key: "keyPressed",
    value: function keyPressed() {
      if (key === "H" || key === "h") {
        this.showValues = !this.showValues; // Toggle visibility
      }
    }
  }, {
    key: "displayValues",
    value: function displayValues() {
      if (this.showValues) {
        translate(10, 10); // Check if values should be displayed

        fill(255); // Set fill color to white for the rectangle

        rect(0, 0, 200, 15 + this.variables.length * 20); // Draw rectangle behind the text

        fill(0); // Set fill color to black for the text

        for (var i = 0; i < this.variables.length; i++) {
          var variableName = this.variables[i];
          var variableValue = this.variableObject[variableName]; // Access the value from the object
          // Limit to 2 decimal places

          text("".concat(variableName, ": ").concat(variableValue.toFixed(2)), 10, 20 + i * 20);
        }
      }
    }
  }]);

  return MidiController;
}(); // Bind the keyPressed function to the p5.js instance


function keyPressed() {
  console.log("Key pressed:", key); // Log the key that was pressed

  if (midiController) {
    // Check if the instance is defined
    midiController.keyPressed(); // Now this should work
  }
}