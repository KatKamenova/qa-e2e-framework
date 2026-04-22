# QA E2E Testing Framework

This project demonstrates a basic end-to-end UI testing setup using Playwright.

## Tech Stack

- Playwright (TypeScript)

## Project Structure

qa-e2e-framework/
│
├── tests/
│ └── ui/
│ ├── login.spec.ts
│ ├── navigation.spec.ts
│ └── validation.spec.ts
│
├── pages/
│ └── LoginPage.ts
│
├── data/
│ └── testData.json
│
├── utils/
│ └── helpers.ts
│
├── playwright.config.ts
├── package.json
└── README.md

## Getting Started

### 1. Install dependencies

npm install

### 2. Run tests

npx playwright test

## Test Coverage

- Login (valid & invalid scenarios)
- Basic navigation (e.g. inventory page)
- Simple UI validations

## Notes

- Uses Page Object Model (POM) for better structure
- Test data is stored in JSON format
- Focus is on readability and maintainability
