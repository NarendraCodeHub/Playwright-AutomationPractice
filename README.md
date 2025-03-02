# Playwright-AutomationPractice
This repository contains end-to-end automation tests for Practice Automation using Playwright with JavaScript. It covers various test scenarios, including form interactions, UI validations, and navigation flows, ensuring a seamless user experience.

### **Tech Stack:**  
- **Automation Tool:** Playwright  
- **Language:** JavaScript  
- **Test Runner:** Playwright Test   
- **Reporting:** Playwright HTML Reports  

### **Features:**  
✔ Cross-browser testing (Chromium, Firefox, WebKit)  
✔ Headless & headed execution modes   
✔ Parallel test execution  
✔ Detailed test reports  

### **Setup & Run Tests:**  
1. Clone the repository:  
   ```sh
   git clone https://github.com/NarendraCodeHub/Playwright-AutomationPractice.git
   cd Playwright-AutomationPractice
   ```
2. Install dependencies:  
   ```sh
   npm install
   ```
3. Run tests:  
   ```sh
   npx playwright test
   ```
4. View reports:  
   ```sh
   npx playwright show-report
   ```
   
## Allure Report Setup and Commands

| **Step**                  | **Command**                                        |
|---------------------------|----------------------------------------------------|
| Install dependencies      | `npm i -D @playwright/test allure-playwright`      |
| Run tests with Allure     | `npx playwright test --reporter=allure-playwright` |
| Generate report           | `npx allure generate allure-results --clean`       |
| Open report               | `npx allure open`                                  |

## Allure Report Issues and Fixes

| **Issue**                   | **Fix**                                                      |
|-----------------------------|--------------------------------------------------------------|
| Command not found           | `npm i -g allure-commandline`                                |
| No reports found            | `npx allure generate allure-results --clean`                 |
| 404 Error when opening      | `allure serve allure-results`                                |
| Still not working           | `rm -rf allure-results allure-report && npx playwright test` |


🚀 **Contributions are welcome!** Feel free to raise issues or submit pull requests.
