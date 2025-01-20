let midiControllerInstance; // Declare the instance variable

function setup() {
  // createCanvas(400, 400); // Example canvas size
  const variableObject = { var1: 0, var2: 0 }; // Example variable object
  midiControllerInstance = new MidiController(variableObject); // Create an instance
}

class MidiController {
  constructor(variableObject) {
    this.variableObject = variableObject; // Store the variable object
    this.variables = Object.keys(variableObject); // Get variable names
    this.values = new Array(this.variables.length).fill(0);
    this.lastValues = new Array(this.variables.length).fill(0); // Track last values
    this.midiInputs = [16, 17, 18, 19, 20, 21, 22, 23]; // MIDI knob inputs
    this.showValues = true; // Track visibility of values
    this.setupMidi();

    // Initialize values based on the current state of the knobs
    this.initializeValues();
  }

  setupMidi() {
    if (navigator.requestMIDIAccess) {
      navigator
        .requestMIDIAccess()
        .then((midiAccess) => {
          const inputs = midiAccess.inputs;
          inputs.forEach((input) => {
            input.onmidimessage = this.handleMidiMessage.bind(this);
          });
        })
        .catch((error) => {
          console.error("MIDI Access Error:", error);
        });
    } else {
      console.error("Web MIDI API is not supported in this browser.");
    }
  }

  initializeValues() {
    // Set initial values based on the current state of the MIDI knobs
    for (let i = 0; i < this.midiInputs.length; i++) {
      this.lastValues[i] = this.variableObject[this.variables[i]] || 0; // Initialize last values
      this.values[i] = this.lastValues[i]; // Set initial values
    }
  }

  handleMidiMessage(message) {
    const [status, data1, data2] = message.data;
    console.log(
      `MIDI Message: Status: ${status}, Data1: ${data1}, Data2: ${data2}`
    ); // Log the MIDI message

    const knobIndex = this.midiInputs.indexOf(data1);
    if (knobIndex !== -1) {
      // Check the value of data2 to determine increment or decrement
      if (data2 === 1) {
        this.values[knobIndex] +=
          this.variableObject[this.variables[knobIndex]] * 0.05; // Increment by one-fifth
      } else if (data2 === 65) {
        this.values[knobIndex] -=
          this.variableObject[this.variables[knobIndex]] * 0.05; // Decrement by one-fifth
      }

      // Update the corresponding variable in the object
      if (this.variables[knobIndex]) {
        this.variableObject[this.variables[knobIndex]] = this.values[knobIndex]; // Update the variable in the object
      }

      // Store the current data2 as the last value (optional, if you want to track changes)
      this.lastValues[knobIndex] = data2;
    }
  }

  keyPressed() {
    if (key === "H" || key === "h") {
      this.showValues = !this.showValues; // Toggle visibility
    }
    if (key === "S" || key === "s") {
      save("mySVG.svg"); // give file name
      console.log("saved .svg");
    }
  }

  displayValues() {
    if (this.showValues) {
      translate(10, 10);
      // Check if values should be displayed
      fill(255); // Set fill color to white for the rectangle
      rect(0, 0, 200, 15 + this.variables.length * 20); // Draw rectangle behind the text

      fill(0); // Set fill color to black for the text
      for (let i = 0; i < this.variables.length; i++) {
        const variableName = this.variables[i];
        const variableValue = this.variableObject[variableName]; // Access the value from the object

        // Limit to 2 decimal places
        text(`${variableName}: ${variableValue.toFixed(2)}`, 10, 20 + i * 20);
      }
    }
  }
}

// Bind the keyPressed function to the p5.js instance
function keyPressed() {
  console.log("Key pressed:", key); // Log the key that was pressed
  if (midiController) {
    // Check if the instance is defined
    midiController.keyPressed(); // Now this should work
  }
}
