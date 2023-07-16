# 🎉 Contribution Guidelines 🎉

Thank you for considering contributing to this exercise! 👏

Before submitting a pull request, please review the following guidelines: 📝

## 💻 Maintenance

This guide provides instructions on how to maintain and extend this test framework. 🤝

## 💡 Issues and Pull Requests

Please create a new issue before submitting a pull request. This will help us understand your proposed changes and discuss the best implementation approach. 🤔

When creating a pull request, ensure that your changes: 🛠️
- Adhere to the style guide 📜
- Include tests (if applicable) 🧪
- Provide clear and concise commit messages 💬
- Do not break the existing functionality of the project ❌
- Add appropriate documentation (if applicable) 📚

## 🧪 Test Script Naming Convention

Some initial points to note for maintaining test framework:

- Please use abbreviated test case names as `{{feature}} - {{functionality}}`
- Structure tests using `test.describe` blocks whenever possible
- Keep test scripts isolated to avoid flakiness and limit inheritance to a maximum of 1

## 📜 Project Structure

- The `lib` directory contains various helpers for tests
- The `pages` directory contains locators and custom commands for each page under test
- The `tests` directory contains subfolders for api and e2e tests

## 📚 References

- [Playwright - Best Practices](https://playwright.dev/docs/best-practices/)
- [Playwright - Writing Tests](https://playwright.dev/docs/writing-tests/)

