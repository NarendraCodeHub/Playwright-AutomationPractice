# **Playwright-AutomationPractice**  

This repository contains end-to-end automation tests for **Practice Automation** using **Playwright with JavaScript**. It covers various test scenarios, including form interactions, UI validations, and navigation flows, ensuring a seamless user experience. 

---

## **Tech Stack**  

- **Automation Tool:** Playwright  
- **Language:** JavaScript  
- **Test Runner:** Playwright Test  
- **Reporting:** Playwright HTML Reports & Allure Reports  

---

## **Features**  

✔ Cross-browser testing (**Chromium, Firefox, WebKit**)  
✔ Supports **Headless & Headed execution**  
✔ Parallel test execution for **faster testing**  
✔ Detailed test reports (**HTML & Allure Reports**)  

---

## **Setup & Run Tests**  

1️⃣ **Clone the repository:**  
   ```sh
   git clone https://github.com/NarendraCodeHub/Playwright-AutomationPractice.git
   cd Playwright-AutomationPractice
   ```
2️⃣ **Install dependencies:**  
   ```sh
   npm install
   ```
3️⃣ **Run tests:**  
   ```sh
   npx playwright test
   ```
4️⃣ **View HTML Report:**  
   ```sh
   npx playwright show-report
   ```

---

## **Allure Report Setup & Commands**  

1️⃣ **Install dependencies:**  
   ```sh
   npm i -D @playwright/test allure-playwright
   ```  
2️⃣ **Run tests with Allure reporting:**  
   ```sh
   npx playwright test --reporter=allure-playwright
   ```  
3️⃣ **Generate Allure report:**  
   ```sh
   npx allure generate allure-results --clean
   ```  
4️⃣ **Open Allure report:**  
   ```sh
   npx allure open
   ```

---

## **Common Allure Report Issues & Fixes**  

| **Issue**                    | **Fix**                                                           |
|------------------------------|-------------------------------------------------------------------|
| `Command not found`          | Run: `npm i -g allure-commandline`                                |
| `No reports found`           | Run: `npx allure generate allure-results --clean`                 |
| `404 Error when opening`     | Run: `allure serve allure-results`                                |
| Still not working?           | Run: `rm -rf allure-results allure-report && npx playwright test` |

---

🚀 **Contributions are welcome!** Feel free to **raise issues** or **submit pull requests**.  

---
