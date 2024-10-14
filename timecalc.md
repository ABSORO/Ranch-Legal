---
title: Time & Fine Calculator
nav_order: 4
---

# Time and Fine Calculator

Use this calculator to determine the total sentencing time and fines based on selected charges from the State of Monroe Penal Code.

## How Sentencing Time is Calculated

- **Charges Listed in Days:**
  - Total days are summed.
  - If total days are less than 401, the sentencing time remains in days.
  - If total days are 401 or more, the sentencing time is converted to years:
    - 401 - 500 Days: 1 Year
    - 501 - 600 Days: 2 Years
    - And so on, incrementing by 1 year for each additional 100 days.
- **Charges with Fixed Sentencing in Years:**
  - Fixed years are added directly to the total years.
  - Not converted into days.

**Note:** Charges listed as years in the penal code are treated as 1440 days (24h) each. Charges not listed as years are added up using the conversion method described above.

## Instructions

1. Use the search bar to find specific charges by keywords or charge codes.
2. Select charges from the dropdown list to add them to your calculation.
3. View the selected charges, total sentencing time, and total fines.
4. Use the "Clear Selection" button to start over.

Please select charges to begin calculating your total sentencing time and fines.

<div id="calculator">
  <div class="dropdown">
    <input type="text" id="search" placeholder="Search for charges...">
    <div id="dropdown-content"></div>
  </div>
  <div id="selectedCharges"></div>
  <div id="totalSentence"></div>
  <div id="totalFine"></div>
  <button id="clearButton">Clear Selection</button>
</div>

---
title: Time & Fine Calculator
nav_order: 4
---

# Time and Fine Calculator

(Keep all the existing content up to the <script> tag)

<div id="calculator">
  <div class="dropdown">
    <input type="text" id="search" placeholder="Search for charges...">
    <div id="dropdown-content"></div>
  </div>
  <div id="selectedCharges"></div>
  <div id="totalSentence"></div>
  <div id="totalFine"></div>
  <button id="clearButton">Clear Selection</button>
</div>

<script src="{{ site.baseurl }}/assets/js/calculator.js"></script>
