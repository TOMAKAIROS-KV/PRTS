let selectedEmployee = document.querySelector(".eresult");
let employeeInfo = document.getElementById("employeeInfo");

var empData;

var employeeData = [
    {
    FirstName: "Thomas",
    LastName: "Collins",
    Age: 27,
    Gender: "Male",
    Occupation: "Cashier", 
    Positive: 0,
    Negative: 0,
    },
    {
    FirstName: "Karlie",
    LastName: "Shay",
    Age: 23,
    Gender: "Female",
    Occupation: "Lead Cashier",
    Positive: 0,
    Negative: 0,    
    },
    {
    FirstName: "Brenna",
    LastName: "Morrison",
    Age: 25,
    Gender: "Female",
    Occupation: "Cashier",
    Positive: 0,
    Negative: 0,    
    },
    {
    FirstName: "Jack",
    LastName: "Daniels",
    Age: 30,
    Gender: "Male",
    Occupation: "Senior Lead Cashier",
    Positive: 0,
    Negative: 0,    
    },
];

var originalPositive;
var originalNegative;

function displayEmployeeInfo(i) {
    empData = employeeData[i];
    originalPositive = empData.Positive;
    originalNegative = empData.Negative;
  
    employeeInfo.innerHTML =
      `<div id="eData">
      First Name: ${empData.FirstName}<br>
      Last Name: ${empData.LastName}<br>
      Age: ${empData.Age}<br>
      Gender: ${empData.Gender}<br>
      Occupation: ${empData.Occupation}<br><br>
      (+)Reports: ${empData.Positive}<br>
      (-)Reports: ${empData.Negative}<br>
      </div>
      <div id="rating">
        <h4>Select today's report:</h4>
        <label for="ratingPR"><input id="ratingPR" type="radio" name="rating" value="Positive" required>Positive (+)</label>
        <label for="ratingNR"><input id="ratingNR" type="radio" name="rating" value="negative" required>Negative (-)</label>
            <div id="reportHere" style="display: none;">
                <label for="textInput">Summarize your report:</label>
                <textarea type="text" id="textInput" placeholder="Enter in your report." required> </textarea>
                <button id="submitBtn" type="submit">Submit</button>
            </div>
        </div>
    `;
    const ratingPR = document.getElementById("ratingPR");
    const ratingNR = document.getElementById("ratingNR");
    const reportHere = document.getElementById("reportHere");

    function showReportHere() {
        reportHere.style.display = "flex";
      }
    
    ratingPR.addEventListener("change", showReportHere);

    ratingNR.addEventListener("change", showReportHere);

    const submitBtn = document.getElementById("submitBtn");
    submitBtn.addEventListener("click", handleSubmit);
}

var selectedResult = function () {
    var selectedValue = selectedEmployee.value;
    var i;
    
    if (selectedValue === "4267") {
        i = 0;
    } else if (selectedValue === "4349") {
        i = 1;
    } else if (selectedValue === "4587") {
        i = 2;
    } else if (selectedValue === "4897") {
        i = 3;
    }
    
    displayEmployeeInfo(i);
}

selectedEmployee.addEventListener("change", selectedResult);