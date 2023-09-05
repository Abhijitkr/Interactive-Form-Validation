# Interactive Form Validation README

![Interactive Form Validation README Logo](https://mashupcorner.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/20160412170240/icon-sencha-test-archiver.png)

This README provides an overview and explanation of the HTML, CSS, and JavaScript code for an interactive form validation web application.

## Table of Contents

- [Description](#description)
- [Usage](#usage)
- [HTML Structure](#html-structure)
- [CSS Styling](#css-styling)
- [JavaScript Functionality](#javascript-functionality)
- [Live Project](#live-project)
- [YouTube Video](#youtube-video)

---

## Description

This web application is designed to create an interactive form for user registration with real-time input validation. It ensures that users provide valid data for their username, email, and password fields before they can submit the form. The validation process includes checking for empty fields, valid email format, and password complexity.

---

## Usage

To use this web application, follow these steps:

1. Clone or download the repository to your local machine.
2. Open the HTML file (`index.html`) in a web browser.
3. Fill out the form with your desired username, email, password, and confirm password.
4. As you enter information into each field, real-time validation will occur:
   - A green checkmark icon (`✔`) will appear when the input is valid.
   - A red exclamation mark icon (`⚠`) will appear when there is an error.
   - An error message will be displayed below the input field.
5. Once all inputs are valid, the "Submit" button will become clickable.
6. Click the "Submit" button to submit the form.

---

## HTML Structure

The HTML structure of the web page consists of a form for user registration with the following key elements:

- Username input field
- Email input field
- Password input field
- Confirm Password input field
- Error messages for each input field
- Submit button

---

## CSS Styling

The CSS (Cascading Style Sheets) code in the `style.css` file is responsible for styling the web page. It includes the following key styling elements:

- Background gradient for the page
- Form styling with rounded corners and padding
- Input field styling with border and padding
- Focus styles for input fields
- Success and error styling for input fields
- Styling for icons (checkmark and exclamation mark)
- Button styling with a background color and hover effect

---

## JavaScript Functionality

The JavaScript code in the `script.js` file provides the interactive form validation functionality. Here are the main functions and their purposes:

- `checkInput()`: Validates each input field for username, email, password, and confirm password. It checks for empty fields and calls specific validation functions.
- `setError(input, msg)`: Sets an error state for the input field, displays an error message, and changes the input border color to red.
- `setSuccess(input)`: Sets a success state for the input field, hides the error message, and changes the input border color to green.
- `checkEmail(val)`: Validates the email format using a regular expression.
- `checkPass(val)`: Validates the password complexity using a regular expression.

The JavaScript also listens for a click event on the "Submit" button, preventing form submission if any of the input fields are invalid.

---

## Live Project

You can access the live version of this project by following this [link](https://abhijitkr.github.io/Interactive-Form-Validation/).

---

## YouTube Video

Watch a video demonstration of this interactive form validation web application on YouTube by clicking [here](https://www.youtube.com/watch?v=yourvideoid).

---

This interactive form validation web application helps ensure that user-provided data meets specific criteria, enhancing the user experience by providing immediate feedback. Users will receive clear guidance on how to correct any input errors, resulting in a smoother registration process.
