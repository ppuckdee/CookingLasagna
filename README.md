# Cooking Timer Utility README

## **Overview**
This Cooking Timer Utility is a simple, interactive web tool designed to assist in kitchen timing tasks. Built with JavaScript, it calculates the **remaining time needed in the oven**, the **preparation time based on the number of lasagna layers**, and the **total working time** considering both prep and cook times. It's perfect for chefs and home cooks who want to manage their cooking process more efficiently.

## **Features**
- **Remaining Time Calculation:** Calculate how much longer your dish needs to stay in the oven to reach the expected cooking duration.
- **Preparation Time Calculation:** Determine the preparation time based on the number of layers in your dish.
- **Total Time Calculation:** Compute the total time required for both preparing and cooking your dish.
- **User-Friendly Interface:** Simple input fields and buttons to easily get your cooking times.

## **How to Use**
1. **Remaining Minutes in Oven:** Enter the number of minutes the dish has already been in the oven and click the corresponding button to calculate the remaining minutes.
2. **Preparation Time:** Input the number of layers in your dish to calculate the prep time.
3. **Total Working Time:** Enter both the number of layers and the actual minutes in the oven to calculate the total working time required.

## **Installation**
This utility does not require installation. Simply include the provided JavaScript code in your web project, and integrate it with your HTML.

### Example of HTML Integration
To use this utility, ensure you have input fields and buttons in your HTML. Here is a basic example:
```html
<input id="timeInput" type="text" placeholder="Minutes in Oven">
<button id="calculateButton">Calculate Remaining Time</button>
<div id="result"></div>

<input id="layerInput" type="text" placeholder="Number of Layers">
<button id="calculateButton2">Calculate Prep Time</button>
<div id="result2"></div>

<!-- For Total Time Calculation -->
<button id="calculateButton3">Calculate Total Time</button>
<div id="result3"></div>
