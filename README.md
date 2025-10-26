# Resident QA Automation Assignment

A simple QA automation solution for the Senior QA Automation Engineer position at Resident, using JavaScript/TypeScript with Playwright framework.

### 1. UI Test
- **Technology**: JavaScript/TypeScript with Playwright
- **User-Agent**: E2EUI-Tests
- **Test Steps**:
  1. Open https://qa.awarasleep.com/ → verify page opens
  2. Navigate to /mattress page (equivalent to clicking "Shop Mattress" button) → verify navigation to /mattress
  3. Add mattress to cart → verify mattress added to cart

### 2. API Test
- **Technology**: JavaScript/TypeScript with Playwright API testing
- **Base URL**: https://qa-api.residenthome.com/
- **Test Steps**:
  1. GET /products?brand=awara → verify data length > 0
  2. GET /products?name=the-awara-hybrid-mattress-30&lang=en&brand=awara → verify data length = 1
- **Status Verification**: All endpoints return 200 status

## Project Structure

```
resident-qa-automation-assignment/
├── .github/workflows/ci.yml          # GitHub Actions CI/CD
├── tests/
│   ├── ui/awara-sleep-ui.spec.ts    # UI test
│   └── api/resident-home-api.spec.ts # API test
├── package.json                      # Dependencies
├── playwright.config.ts              # Playwright configuration
├── tsconfig.json                     # TypeScript configuration
└── README.md                         # This file
```

## Quick Start

### Prerequisites
- Node.js 18.x or higher
- npm package manager

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd resident-qa-automation-assignment

# Install dependencies
npm install

# Install Playwright browsers
npm run install:browsers
```

## Running Tests

### Run All Tests
```bash
npm test
```

### Run UI Tests Only
```bash
npm run test:ui
```

### Run API Tests Only
```bash
npm run test:api
```

### View Test Report
```bash
npm run test:report
```

## Test Results

The project uses Playwright's built-in HTML reporter for test results visualization. After running tests, you can view the detailed HTML report with:

```bash
npm run test:report
```

This will open a comprehensive HTML report showing:
- Test execution results
- Screenshots on failure
- Video recordings
- Test traces and debugging information

## CI/CD Pipeline

The GitHub Actions workflow (`.github/workflows/ci.yml`) provides:
- Automated testing on each commit
- Multi-browser testing (Chrome, Firefox, Safari)
- Test artifact upload
- Playwright HTML report generation