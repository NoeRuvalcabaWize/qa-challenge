# Frontend Automation Project with Playwright

## Project Overview
This project implements a frontend automation framework using Playwright with TypeScript. It follows best practices such as the Page Object Model (POM), structured folder organization, and coding standards to ensure maintainability and scalability.

---

## Features and Design Highlights
### Framework Design
- **Page Object Model (POM):** Encapsulates page interactions into reusable components.
- **Folder Structure:** Organized directories for tests, page objects, and utilities.

### Coding Standards
- **Eslint:** Ensures consistent code quality and static analysis.
- **Naming Conventions:** Descriptive and standardized names for methods, classes, and tests.
- **Abstraction:** Encapsulation and reusable components for efficient development.

### Best Practices
- Use of **unique selectors** and avoidance of absolute selectors.
- Avoid hardcoded data and magic numbers; use `.env` files or config files for sensitive data.
- **Single Assertion per Test:** Enhances test clarity.
- **No Assertions in Page Objects:** Keeps concerns separated.
- Dynamic task names and data-driven tests.

### Reporting and CI/CD Integration
- Automated reporter integration.
- **CI/CD Integration:** Configurable with tools like Jenkins, CircleCI, or GitHub Actions.
- Slack notifications for build updates.
- **BrowserStack Integration:** Cross-platform/browser testing.

---

## Test Scenarios
### Login Tests
1. **Successful Login**: Test using credentials stored in `.env` file.
2. **Unsuccessful Login**: Define multiple negative scenarios.

### Task Management Tests
1. **Create a New Task:** Validate task creation.
2. **Bulk Task Creation:** Create and validate 10 dynamic tasks.

---

## Setup and Usage

### Prerequisites
- Node.js
- Playwright
- TypeScript

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure `.env` file:
   Add environment variables for sensitive data, e.g., credentials.

4. Generate the `storageState.json` file:
   ```bash
   npx playwright codegen --save-storage=storageState.json
   ```

### Running Tests
1. Run a single test:
   ```bash
   npx playwright test tests/<test-name>.spec.ts
   ```

2. Run all tests:
   ```bash
   npx playwright test
   ```

3. Generate a report:
   ```bash
   npx playwright show-report
   ```

4. Debug tests:
   ```bash
   npx playwright test --debug
   ```

---

## Folder Structure
```
project-root
├── tests/                # Test scripts
├── pages/                # Page objects
├── utils/                # Utility functions
├── reports/              # Test reports
├── storageState.json     # Saved login session
├── .env                  # Environment variables
├── .eslintrc.js          # Eslint configuration
└── playwright.config.ts  # Playwright configuration
```

---

## Important Notes
- Avoid explicit waits whenever possible.
- Use data providers and config files for proper data management.
- Include dynamic and descriptive names for test data and scripts.

---

## CI/CD Integration
- Integrate tests into your CI/CD pipeline for automated execution.
- Set up notifications (e.g., Slack) for build and test results.

---

## Additional Tasks
Prepare a slides presentation covering:
- Project overview
- Tool integration
- Advantages and disadvantages
- Framework structure and flow diagram.

