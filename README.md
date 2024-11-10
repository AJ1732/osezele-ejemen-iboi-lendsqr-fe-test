# Lendsqr Admin Console - Frontend Assessment

This repository contains the frontend implementation of the Lendsqr Admin Console, developed as part of the Lendsqr job assessment. The project aims to mirror the provided Figma design with a focus on pixel-perfect rendering, responsive design, code quality, and performance.

## Table of Contents
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Design and Architecture](#design-and-architecture)


---

## Project Overview

The Lendsqr Admin Console is built with a focus on:
- **Visual Fidelity**: Pixel-perfect and responsive UI that mirrors the provided Figma design.
- **Code Quality**: Well-structured code adhering to React best practices.
- **Component Reusability**: Modular components following the atomic design principle.
- **Scalability**: Using state management and organized directory structure to support growth.

## Tech Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: SCSS Modules
- **State Management**: Context API
- **HTTP Client**: Axios

## Features

- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile.
- **Global State Management**: ContextAPI is used to manage global states efficiently.
- **Reusable Components**: Follows atomic design principles to create scalable and reusable components.
- **API Integration**: Axios for handling API calls with efficient data handling.

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (version 16+)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AJ1732/osezele-ejemen-iboi-lendsqr-fe-test.git
   cd osezele-ejemen-iboi-lendsqr-fe-test
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Project

To start the development server:
```bash
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:3000`.

## Project Structure

```plaintext
/src
|-- app                 # Next.js App Router configuration
|-- components          # Reusable UI components
|-- context             # Context API state management 
|-- data                # Static data files
|-- scss                # SCSS modules for styling
|-- types               # TypeScript types and interfaces
|-- utils               # Utility functions and custom hooks
```

## Design and Architecture

The app follows **React design patterns** for scalability and maintainability:
- **Atomic Design**: Components are broken down into smaller, reusable parts.
- **Compound Components**: Used for flexible component customization.
- **Provider Pattern**: Encapsulates context API state management in a central context provider.
- **Custom Hooks**: Encapsulates reusable logic in `/utils`.

```

### Example Test Scenarios
- **Component Rendering**: Tests to check if components render correctly.
- **API Calls**: Mocked API calls for both success and failure cases.
- **UI Behavior**: Positive and negative test cases for user interactions.