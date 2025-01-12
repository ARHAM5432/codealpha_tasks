// File: main.js

document.addEventListener("DOMContentLoaded", () => {
  const inputBox = document.getElementById("input_Box");
  const buttons = document.querySelectorAll(".buttons button");
  const operators = ["+", "-", "*", "/", "%"];
  
  let input = "";

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const value = event.target.innerText || event.target.querySelector("i").className;

      if (value === "AC") {
        // Clear everything
        input = "";
        inputBox.value = "0";
      } else if (value === "DEL") {
        // Delete last character
        input = input.slice(0, -1);
        inputBox.value = input || "0";
      } else if (value === "=" || value.includes("equal-line")) {
        // Calculate the result
        try {
          // Replace operator symbols for calculation
          const safeInput = input.replace(/×/g, "*").replace(/÷/g, "/");
          input = eval(safeInput).toString();
          inputBox.value = input;
        } catch (err) {
          inputBox.value = "Error";
          input = "";
        }
      } else if (value.includes("percent-line")) {
        // Handle percentage
        input = (parseFloat(input) / 100).toString();
        inputBox.value = input;
      } else if (operators.includes(value) || !isNaN(parseInt(value)) || value === "." || value === "00") {
        // Add number, operator, or decimal
        input += value.replace("×", "*").replace("÷", "/");
        inputBox.value = input;
      } else if (value.includes("add-line")) {
        input += "+";
        inputBox.value = input;
      } else if (value.includes("subtract-fill")) {
        input += "-";
        inputBox.value = input;
      } else if (value.includes("close-line")) {
        input += "*";
        inputBox.value = input;
      } else if (value.includes("divide-line")) {
        input += "/";
        inputBox.value = input;
      }
    });
  });
});
