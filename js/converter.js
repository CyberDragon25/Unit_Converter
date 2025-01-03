document.getElementById("convertButton").addEventListener("click", function () {
  const inputValue = parseFloat(document.getElementById("inputValue").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;

  let conversionFactor = {
    meters: 1,
    kilometers: 0.001,
    miles: 0.000621371,
  };

  if (isNaN(inputValue)) {
    document.getElementById("result").textContent =
      "Please enter a valid number!";
    return;
  }

  const result =
    (inputValue * conversionFactor[fromUnit]) / conversionFactor[toUnit];
  document.getElementById(
    "result"
  ).textContent = `${inputValue} ${fromUnit} = ${result.toFixed(2)} ${toUnit}`;
});
