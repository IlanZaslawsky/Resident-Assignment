# Resident QA Automation Assignment

TypeScript + Playwright test automation for Senior QA Engineer position.

## What's Tested

**UI Tests**:
- Load Awara Sleep home page
- Load mattress product page
- Add mattress to cart & verify count

**API Tests**:
- Filter products by brand (Awara)
- Find specific product by name & brand

## Project Structure

```
├── pages/              # Page Object Model
├── tests/
│   ├── ui/            # UI tests
│   └── api/           # API tests
├── .github/workflows/ # CI/CD pipeline
└── playwright.config.ts
```

## Quick Start

```bash
npm install
npm run install:browsers
npm test
```

## Commands

| Command | Action |
|---------|--------|
| `npm test` | Run all tests |
| `npm run test:ui` | UI tests only |
| `npm run test:api` | API tests only |
| `npm run test:report` | View HTML report |

## CI/CD

GitHub Actions runs tests on every push/PR with:
- Browser caching
- Parallel execution
- Artifact upload
- Automatic retries

## Tech Stack

- Playwright 1.40+
- TypeScript 5.3+
- Node.js 18+
- Page Object Model pattern
