[![Build and Test](https://github.com/tooniez/shopfront-e2e-exercise/actions/workflows/build.yml/badge.svg)](https://github.com/tooniez/shopfront-e2e-exercise/actions/workflows/build.yml)
[![CI - Shopfront E2E Test Suite](https://github.com/tooniez/shopfront-e2e-exercise/actions/workflows/ci.yml/badge.svg)](https://github.com/tooniez/shopfront-e2e-exercise/actions/workflows/ci.yml)

# Technical Assessment: End-to-End Test Automation

## Description

This project demonstrates my ability in setting up and executing end-to-end automated tests for an online shopping web application.

### Tasks

- [x] **Test Plan**: Write a brief test plan outlining important end-to-end test scenarios for the application. Explain the reasons for your choices. [#3](https://github.com/tooniez/shopfront-e2e-exercise/issues/3)
- [x] **Test Automation Framework**: Choose a test automation framework suitable for this application. Explain why you have chosen it over others. [#2](https://github.com/tooniez/shopfront-e2e-exercise/issues/2)
- [x] **Automated Test Creation**: Write automated test scripts for at least two scenarios. 
- [x] **Test Reporting**: After executing the tests, generate a report indicating whether each test has passed or failed. [#11](https://github.com/tooniez/shopfront-e2e-exercise/issues/11)
- [x] **Maintenance**: Write a brief explanation of how you would maintain these tests as the application grows and evolves. [12](https://github.com/tooniez/shopfront-e2e-exercise/issues/12)

## Project

A Github public project was created to demonstrate roughly the type of Issues/Pull Requests to establish the foundations of an Automated E2E Test Framework.

- [automation-e2e-shopfront-project](https://github.com/users/tooniez/projects/13/)

#### Milestones

- [Planning](https://github.com/tooniez/shopfront-e2e-exercise/milestone/1)
- [Implementation](https://github.com/tooniez/shopfront-e2e-exercise/milestone/2)


# Test Scripts

3 example test scripts were created as part of this exercise

- login [#10](https://github.com/tooniez/shopfront-e2e-exercise/issues/10)
- products/cart, recorded user flow with Codegen [#14](https://github.com/tooniez/shopfront-e2e-exercise/issues/14)


# Test Reporting

In this exercise, this repository is configured using 2 Github [Actions](https://github.com/tooniez/shopfront-e2e-exercise/actions). Each action is configured with a Workflow Dispatch option enabling the option to trigger manually.

1. [Build and Tet](https://github.com/tooniez/shopfront-e2e-exercise/actions/workflows/build.yml)

The Build and Test action:

- runs the Shopfront test suite on Push to any branch
- runs test suite with junit reporter

2. [CI - Shopfront E2E Test Suite](https://github.com/tooniez/shopfront-e2e-exercise/actions/workflows/ci.yml)

The CI - Shpofront E2e Test Suite action is:

- run the Shopfront test suite on Pull Request against `main` branch
- runs the test suite with default HTML reporter
- uploads test report to action for download

# Maintenance

See our [CONTRIBUTING](docs/CONTRIBUTING.md) for brief details related maintenance of test this framework


## Submission Guidelines

- Upload the source code and documentation to a repository on GitHub.
- Share the test reports in any preferred format.
- Email the completed work to the hiring manager/tech lead.

## Additional Information

If you have any questions or need clarifications, feel free to reach out in this repository or this [ama](http://github.com/tooniez/ama) 📧

## 📝 License

Copyright © 2023 [tooniez](https://github.com/tooniez). <br />
This project is [MIT](https://github.com/tooniez/tooniez/blob/main/LICENSE) licensed.
