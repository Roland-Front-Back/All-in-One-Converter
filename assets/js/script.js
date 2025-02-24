const userInput = document.getElementById("user-input");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const select1 = document.getElementById("select-1");
const select2 = document.getElementById("select-2");
const textLabel = document.getElementById("text-label");

// convert decimal to binary
const decimalToBinary = (input) => {
  if (input < 0) {
    throw new Error("Input must be a non-negative integer.");
  }
  return input.toString(2);
};

// Converts decimal to octal
const decimalToOctal = (input) => {
  if (input < 0) {
    throw new Error("Input must be a non-negative integer.");
  }
  return input.toString(8);
};

// Converts decimal to hexa
const decimalToHexadecimal = (input) => {
  if (input < 0) {
    throw new Error("Input must be a non-negative integer.");
  }
  return input.toString(16).toUpperCase(); // Convert to hex and make it uppercase
};

// Handles the conversion method
const checkConversionMethod = () => {
  const fromType = select1.value;
  const toType = select2.value;
  const inputValue = userInput.value;

  const decimalInput = parseInt(inputValue);
  if (isNaN(decimalInput)) {
    alert("Please enter a valid number.");
    return;
  }

  switch (fromType) {
    case "decimal":
      switch (toType) {
        case "binary":
          output.textContent = decimalToBinary(decimalInput);
          break;
        case "octal":
          output.textContent = decimalToOctal(decimalInput);
          break;
        case "hexadecimal":
          output.textContent = decimalToHexadecimal(decimalInput);
          break;
        default:
          output.textContent = "This conversion is not implemented yet";
      }
      break;

    default:
      output.textContent = "This conversion is not implemeted yet!";
  }
};

// Uodate input label and type based on selection
const updateInputField = () => {
  const selectedType = select1.value;
  textLabel.textContent = `Enter a ${selectedType} number;`;

  // Update input field type and attributes based on selection
  if (selectedType === "text") {
    userInput.type = "text";
    userInput.removeAttribute("min");
  } else {
    userInput.type = "number";
    userInput.min = "0";
  }

  output.textContent = "";
  output.min = "0";
};

convertBtn.addEventListener("click", checkConversionMethod);

userInput.addEventListener("keydown", (e) => {
  // checks if e para with the key value is equal to string "Enter"
  if (e.key === "Enter") {
    checkConversionMethod(); // calls this function to accept the input by the Enter button
  }
});

// Validates selection before conversion
select1.addEventListener("change", () => {
  output.textContent = "";
});

select2.addEventListener("change", () => {
  output.textContent = "";
});
// TO-DO: make the select function to each conversion arrow
// TO-DO: make the other conversion work
// TO-DO: changes the behavior of the input when the conversion is text to different method
