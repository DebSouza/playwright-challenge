# README - Playwright Tests in JavaScript

This repository contains automated tests for the website http://www.automationpractice.pl/index.php using the Playwright framework in JavaScript. Below, you will find detailed instructions on how to set up the environment and run the tests on different operating systems.

## Prerequisites

Before you begin, make sure you have the following prerequisites installed on your machine:

* **Node.js:** Ensure you have Node.js installed. You can check the installed version by running the command `node -v` in your terminal. If you don't have it, you can download and install the LTS (Long Term Support) version of Node.js from: [https://nodejs.org/en](https://www.google.com/url?sa=E&source=gmail&q=https://nodejs.org/en)

* **Package manager (npm or yarn):** Node.js usually comes with npm (Node Package Manager) installed by default. You can check the version by running the command `npm -v`. If you prefer to use yarn, you can install it globally with the command `npm install -g yarn`.

## Playwright Installation

1. **Clone this repository:**
   git clone [git@github.com:DebSouza/playwright-challenge.git](https://github.com/DebSouza/playwright-challenge)

2. **Navigate to the project directory:**
    cd [directory name]

3. **Install project dependencies:**
    npm install 
    # or
    yarn install
This command will install Playwright and other dependencies listed in the package.json file.



## Running the tests
The tests are located in the tests directory and are written in JavaScript. To run the tests, follow the instructions below for your operating system:

### Windows
1. Open the terminal in the project root.
2. Execute the following command:
     npx playwright test
This command will run all tests in the tests directory using the Chromium browser.

### Linux
1. Open the terminal in the project root.
2. Execute the following command:
    npx playwright test
This command will run all tests in the tests directory using the Chromium browser.


### macOS
1. Open the terminal in the project root.
2. Execute the following command:
    npx playwright test
This command will run all tests in the tests directory using the Chromium browser.


## Execution Options
You can customize the test execution with the following options:

### Run tests on a specific browser:
You can customize the test execution with the following options:

- Run tests on a specific browser:
    npx playwright test --browser chromium
    npx playwright test --browser firefox
    npx playwright test --browser webkit

- Run tests in headed mode (with a graphical interface):
    npx playwright test --headed

- Run tests in debug mode:
    npx playwright test --debug

- Run a specific test:
    npx playwright test tests/test-name.spec.js

- Generate an HTML report:
    npx playwright test --reporter html

To open the report, run the command npx playwright show-report.


## Project Structure
- package.json: Project configuration file, containing dependencies and scripts.
- playwright.config.js: Playwright configuration file, where you can define options such as the default browser, timeout, etc.
- tests: Directory containing the test files.
- pages: Directory containing classes and selectors that represent the application pages.

## Writing tests
The tests are written in JavaScript and use the Playwright syntax. For more information on how to write tests with Playwright, see the official documentation: https://playwright.dev/

## Remarks
Make sure you have Node.js and npm (or yarn) installed correctly before you start.
If you have problems with the installation or execution of the tests, consult the official Playwright documentation or search for solutions online.