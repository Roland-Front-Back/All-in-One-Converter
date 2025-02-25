const userInput = document.getElementById("user-input");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const select1 = document.getElementById("select-1");
const select2 = document.getElementById("select-2");
const textLabel = document.getElementById("text-label");

// Conversion functions
const decimalToBinary = (input) => input.toString(2);
const decimalToOctal = (input) => input.toString(8);
const decimalToHexadecimal = (input) => input.toString(16).toUpperCase();
const binaryToDecimal = (input) => parseInt(input, 2);
const binaryToOctal = (input) => parseInt(input, 2).toString(8);
const binaryToHexadecimal = (input) => parseInt(input, 2).toString(16).toUpperCase();
const binaryToText = (input) => {
  const cleanedInput = input.replace(/\s/g, "");
  const binaryCodes = cleanedInput.match(/.{1,8}/g);
  if (!binaryCodes || !/^[01]+$/.test(cleanedInput)) {
    throw new Error("Input must be a valid binary string (0s and 1s).");
  }
  return binaryCodes
    .map((binary) => String.fromCharCode(parseInt(binary.padStart(8, "0"), 2)))
    .join("");
};
const textToBinary = (input) => {
  return input
    .split("")
    .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
    .join(" ");
};

// New conversion functions
const octalToDecimal = (input) => parseInt(input, 8);
const octalToBinary = (input) => parseInt(input, 8).toString(2);
const octalToHexadecimal = (input) => parseInt(input, 8).toString(16).toUpperCase();
const hexadecimalToDecimal = (input) => parseInt(input, 16);
const hexadecimalToBinary = (input) => parseInt(input, 16).toString(2);
const hexadecimalToOctal = (input) => parseInt(input, 16).toString(8);

// Updated checkConversionMethod
const checkConversionMethod = () => {
  const fromType = select1.value;
  const toType = select2.value;
  const inputValue = userInput.value;

  // Handle binary and decimal input
  let decimalInput;
  if (fromType === "binary") {
    if (!/^[01]+$/.test(inputValue)) {
      alert("Please enter a valid binary number (0s and 1s).");
      return;
    }
    decimalInput = parseInt(inputValue, 2);
  } else if (fromType === "octal") {
    if (!/^[0-7]+$/.test(inputValue)) {
      alert("Please enter a valid octal number (0-7).");
      return;
    }
    decimalInput = parseInt(inputValue, 8);
  } else if (fromType === "hexadecimal") {
    if (!/^[0-9A-Fa-f]+$/.test(inputValue)) {
      alert("Please enter a valid hexadecimal number (0-9, A-F).");
      return;
    }
    decimalInput = parseInt(inputValue, 16);
  } else if (fromType !== "text") {
    decimalInput = parseInt(inputValue, 10);
    if (isNaN(decimalInput)) {
      alert("Please enter a valid number");
      return;
    }
  }

  // Handle all conversions
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

    case "binary":
      switch (toType) {
        case "decimal":
          output.textContent = binaryToDecimal(inputValue);
          break;
        case "octal":
          output.textContent = binaryToOctal(inputValue);
          break;
        case "hexadecimal":
          output.textContent = binaryToHexadecimal(inputValue);
          break;
        case "text":
          output.textContent = binaryToText(inputValue);
          break;
        default:
          output.textContent = "This conversion is not implemented yet";
      }
      break;

    case "octal":
      switch (toType) {
        case "decimal":
          output.textContent = octalToDecimal(inputValue);
          break;
        case "binary":
          output.textContent = octalToBinary(inputValue);
          break;
        case "hexadecimal":
          output.textContent = octalToHexadecimal(inputValue);
          break;
        default:
          output.textContent = "This conversion is not implemented yet";
      }
      break;

    case "hexadecimal":
      switch (toType) {
        case "decimal":
          output.textContent = hexadecimalToDecimal(inputValue);
          break;
        case "binary":
          output.textContent = hexadecimalToBinary(inputValue);
          break;
        case "octal":
          output.textContent = hexadecimalToOctal(inputValue);
          break;
        default:
          output.textContent = "This conversion is not implemented yet";
      }
      break;

    case "text":
      switch (toType) {
        case "binary":
          output.textContent = textToBinary(inputValue);
          break;
        default:
          output.textContent = "This conversion is not implemented yet";
      }
      break;

    default:
      output.textContent = "This conversion is not implemented yet";
  }
};

// Event listeners
convertBtn.addEventListener("click", checkConversionMethod);
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkConversionMethod();
  }
});
select1.addEventListener("change", () => {
  output.textContent = "";
});
select2.addEventListener("change", () => {
  output.textContent = "";
});