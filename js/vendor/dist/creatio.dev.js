"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var creatio; // Declare the instance variable

function setup() {
  // createCanvas(400, 400); // Example canvas size
  creatio = new Creatio(knob); // Pass only the knob object
}

var Creatio =
/*#__PURE__*/
function () {
  function Creatio(knob) {
    var absoluteKnobs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Creatio);

    this.knob = knob; // Store the knob object

    this.absoluteKnobs = absoluteKnobs; // Store the new knobs object

    this.knobVariables = Object.keys(knob); // Get variable names for knobs

    this.absoluteKnobVariables = Object.keys(absoluteKnobs); // Get variable names for new knobs

    this.values = new Array(this.knobVariables.length).fill(0);
    this.absoluteValues = new Array(this.absoluteKnobVariables.length).fill(0);
    this.lastValues = new Array(this.knobVariables.length).fill(0); // Track last values for knobs

    this.midiKnobInputs = [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43];
    this.absoluteKnobInputs = [44, 45, 46, 47];
    this.showValues = true; // Track visibility of values

    this.setupMidi(); // Initialize values based on the current state of the knobs

    this.initializeValues();
    this.colorPalettes = [["#f3f3f3", "#2F3022"], ["#bf473a", "#ed3b31", "#f8ca1b", "#8c874b"], ["#f19b4e", "#7f6640", "#dc5845", "#637055", "#e4d6c8", "#929e79"], ["#e6bc8a", "#da4742", "#202125", "#909062", "#dba380", "#dcc6b9"], ["#151015", "#511a28", "#8e563a", "#fcfbfa", "#bf9969", "#718282"], ["#e3cfb7", "#dba260", "#887d41", "#938d47", "#c46148"], ["#73924d", "#eb9f48", "#b19564", "#aabcb2", "#f0e3d7", "#6b4b2b"], ["#cec6bf", "#363021", "#c3a369", "#be1a23"], ["#e3d2c7", "#c91b34", "#f9c784", "#d9a068"], ["#eadfde", "#f13641", "#445168", "#fccd50", "#d89150"], ["#f0ebe1", "#d8ccb3", "#cd2a41", "#8bc08f", "#f69fac", "#c4714c"], ["#e8e4d4", "#e3c585", "#344e18", "#d1c2c3", "#503d4b"], ["#f9f5ec", "#d8ae6a", "#d4824b", "#588c92", "#89bfb3", "#b55847"], ["#dad7c3", "#c7895a", "#343530", "#899c63", "#60827d", "#d6b58a"], ["#cb4c42", "#786b3d", "#7b5b44", "#f5f4ed", "#687266", "#ca8b84"], ["#e5e9e9", "#da2034", "#8db4bb", "#4f6a31", "#6ab26d", "#e4bc89"], ["#efb984", "#f6a56b", "#98473f", "#544354", "#db6349"], ["#3c3e46", "#ddded7", "#c07552", "#5b6984", "#809c73", "#c3ae98"], ["#e22a42", "#fcb518", "#7cb360", "#9d91cc"], ["#fdf8f1", "#914954", "#f59363", "#a8a78b", "#1e1f1f"], ["#f7f8f9", "#c1434f", "#a6dab9", "#3a4d79"], ["#585046", "#eadaaf", "#d06f55"], ["#362b27", "#f5f2ee", "#623132", "#dba258", "#baa463"], ["#92c093", "#b7a6d2"], ["#646d4d", "#fac71a", "#e94943", "#8accd8"], ["#f69356", "#fcc982", "#9caba3", "#f2f1e1", "#524d35"], ["#fffbf4", "#313f5f", "#cd464c", "#fca8bd", "#fa718d"], ["#ff8978", "#fccc6f", "#4facc2", "#3292b7", "#7879ab"], ["#f7cfd6", "#fd8591", "#fadfe3", "#3a7147", "#2b2828"], ["#f6a769", "#3e654d", "#4561a6", "#404e99"], ["#ffffff", "#516940", "#e9566d"], ["#fda9b9", "#82ccd0", "#3cb1de"], ["#fb6953", "#a37a4a", "#4899c8", "#356a85"], ["#4d5948", "#a79955", "#ef382d"], ["#c4413b", "#f35a2e", "#7db481", "#39436b"], ["#ddd453", "#addfba", "#4da57f"], ["#ecdfac", "#436775", "#458d7f", "#795446"], ["#e9ecf3", "#4ba3bc", "#db482e", "#33aa92"], ["#f98c25", "#68afa6", "#a2576e", "#faf4e5"], ["#62aa75", "#5d5f60", "#2e6345", "#e7e3d8", "#6c4e3d"], ["#ebe7e0", "#68bdc1", "#f8be44", "#5c6a92", "#a9625e"], ["#e9f1f6", "#db353d", "#6a8e89", "#34504a", "#6a87cc"], ["#efc4ab", "#2e241c", "#ea7843", "#ab9948", "#f6e7de"], ["#d3dedc", "#5ab9d6", "#2988ac", "#f3612c", "#daab82"], ["#4d4638", "#f77843", "#fbc836", "#d8b85a", "#6c6e47", "#b0e3ee"], ["#fefbf9", "#db5b44", "#87b4af", "#39446f", "#f7db8b"], ["#d1d0c9", "#353724", "#42415e", "#bf3e30", "#c8b757"], ["#f5da30", "#338ab6", "#8a8740", "#73563f", "#332321", "#e0dfdf"], ["#f7f6e5", "#9ad6f5", "#678970", "#a14453"], ["#ec4c38", "#aa5f3c", "#385645", "#2d5b6c"], ["#e84343", "#c38d73", "#b68542", "#bbc273", "#4395c7", "#7186c0"], ["#9781c3", "#90cb74", "#fed855", "#eb2039"], ["#fabc65", "#8e7f54", "#6f9598", "#3e64b1", "#30463d", "#1d1d2e"], ["#ba3f4c", "#eb213b", "#e2d1a5", "#fccb7d", "#80cddd"], ["#e54644", "#faf9f8", "#1a1a17"], ["#337544", "#e8d8cd", "#f8e3e1", "#f5f6f7"], ["#f9fafc", "#fac0d9", "#95bc7c", "#4eb7e7"], ["#f0ebe2", "#48a076", "#856fb1", "#55604f"], ["#f1e5d5", "#8d73ad", "#fb939d"], ["#f5e5d4", "#ac98c4", "#f19f49", "#e63b26", "#7aaf4f"], ["#f6fbf7", "#8fceea", "#be5b41", "#5d75aa"], ["#f7b4b3", "#cdd2c5", "#95b0a0", "#f9836f", "#6898a0"], ["#e2d7b9", "#7f5a41", "#7a3d38", "#616a6a", "#a97950", "#1a1316"], ["#83834f", "#e0c786", "#30363d", "#db2f38", "#66989c", "#e9ded1"], ["#abb163", "#e9e1cb", "#9b7c4a", "#74a7a0", "#e46641", "#5a5925"], ["#7aa467", "#695643", "#9a7b55", "#d4393a", "#ddb19e", "#394b3a"], ["#f6532d", "#cec4a4", "#3d4532", "#5e9682", "#becbbc", "#f7ac66"], ["#dd8458", "#76b661", "#ddd66d", "#0f0b0c", "#4d493b", "#f3f4ee"], ["#81bb91", "#dfc6a2", "#8c603f", "#f7c884"], ["#81bb91", "#dfc6a2", "#8c603f", "#f7c884"]];
  }

  _createClass(Creatio, [{
    key: "setupMidi",
    value: function setupMidi() {
      var _this = this;

      console.log("creatio v.1.1");

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
      for (var i = 0; i < this.midiKnobInputs.length; i++) {
        this.lastValues[i] = this.knob[this.knobVariables[i]] || 0; // Initialize last values for knobs

        this.values[i] = this.lastValues[i]; // Set initial values for knobs
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

      if (data1 < 44) {
        var knobIndex = this.midiKnobInputs.indexOf(data1);

        if (data2 < 64) {
          this.values[knobIndex] -= this.knob[this.knobVariables[knobIndex]] * 0.07; // Decrement by one-fifth
        } else if (data2 > 64) {
          this.values[knobIndex] += this.knob[this.knobVariables[knobIndex]] * 0.07; // Increment by one-fifth
        }

        this.knob[this.knobVariables[knobIndex]] = this.values[knobIndex]; // Update the variable in the object

        this.lastValues[knobIndex] = data2; // Store the current data2 as the last value
      } else if (data1 >= 44) {
        var _knobIndex = this.absoluteKnobInputs.indexOf(data1);

        if (data2 < 64) {
          this.absoluteValues[_knobIndex] -= 1;

          if (data1 == 44 && this.absoluteValues[_knobIndex] < 0) {
            this.absoluteValues[_knobIndex] = this.colorPalettes.length - 1;
          }
        } else if (data2 > 64) {
          this.absoluteValues[_knobIndex] += 1;

          if (data1 == 44 && this.absoluteValues[_knobIndex] >= this.colorPalettes.length) {
            this.absoluteValues[_knobIndex] = 0;
          }
        }

        this.absoluteKnobs[this.absoluteKnobVariables[_knobIndex]] = this.absoluteValues[_knobIndex]; // Update the variable in the object

        this.lastValues[_knobIndex] = data2; // Store the current data2 as the last value
      }
    }
  }, {
    key: "keyPressed",
    value: function keyPressed() {
      if (key === "H" || key === "h") {
        this.showValues = !this.showValues; // Toggle visibility
      }

      if (key === "S" || key === "s") {
        save("mySVG.svg"); // give file name

        console.log("saved .svg");
      }
    }
  }, {
    key: "displayValues",
    value: function displayValues() {
      push();

      if (this.showValues) {
        translate(10, 10);
        fill(255); // Set fill color to white for the rectangle

        rect(0, 0, 200, 15 + this.knobVariables.length * 20 + this.absoluteKnobVariables.length * 20); // Adjust rectangle height for new knobs

        noStroke();
        fill(0); // Set fill color to black for the text
        // Display standard knob values

        for (var i = 0; i < this.knobVariables.length; i++) {
          var variableName = this.knobVariables[i];
          var variableValue = this.knob[variableName]; // Access the value from the object

          text("".concat(variableName, ": ").concat(variableValue.toFixed(2)), 10, 20 + i * 20);
        } // Display new knob values


        for (var _i2 = 0; _i2 < this.absoluteKnobVariables.length; _i2++) {
          var absoluteVariableName = this.absoluteKnobVariables[_i2];
          var absoluteVariableValue = this.absoluteKnobs[absoluteVariableName]; // Access the value from the new knobs object

          text("".concat(absoluteVariableName, ": ").concat(absoluteVariableValue), 10, 20 + (this.knobVariables.length + _i2) * 20); // Display new knob values
        }
      }

      pop();
    }
  }]);

  return Creatio;
}(); // Bind the keyPressed function to the p5.js instance


function keyPressed() {
  console.log("Key pressed:", key); // Log the key that was pressed

  if (creatio) {
    // Check if the instance is defined
    creatio.keyPressed(); // Now this should work
  }
}

function draw() {
  background(215); // Draw vertical lines

  for (var i = 0; i < knob.lineCount; i++) {
    var x = width / knob.lineCount * i; // Calculate x position for each line

    line(x, height / 2 - knob.lineLength / 2, x, height / 2 + knob.lineLength / 2); // Draw the line
  }

  creatio.displayValues(); // Display the current values for both knobs and sliders
}