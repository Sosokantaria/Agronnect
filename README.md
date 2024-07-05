# Agronnect

Welcome to Agronnect! This project is a Vue 3 application built with TypeScript and styled using Tailwind CSS. Agronnect leverages a JSON server to manage and watch data stored in a JSON file.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/) (v14.x or higher)
- [Yarn](https://yarnpkg.com/) (v1.22.x or higher)
- [JSON Server](https://www.npmjs.com/package/json-server) (globally installed)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/Sosokantaria/agronnect.git

   ```

2. Navigate to the project directory:

cd agronnect 3. Install the dependencies:
yarn install

## Running the Project

To run the project, you'll need two terminal windows or tabs:

1. In the first terminal, start the Vue.js development server:

```sh
yarn serve
```

2. In the second terminal, start the JSON server to watch the data:

```sh
json-server --watch data/archive.json
```

Now, you can access the Vue.js application at `http://localhost:8080` and the JSON server at `http://localhost:3000`.

## Technologies Used

- Vue 3: A progressive JavaScript framework for building user interfaces.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
- Tailwind CSS: A utility-first CSS framework for quickly building custom designs.
- JSON Server: A full fake REST API tool for development, used here to mock data from `archive.json`.

## Project Structure

Here's a brief overview of the project structure:

```php
├── data
│   └── archive.json        # JSON file for the JSON server
├── public
│   └── index.html          # HTML template
├── src
│   ├── assets              # Static assets
│   ├── components          # Vue components
│   ├── router              # Vue router
│   ├── types               # Vue types
│   ├── views               # Vue views
│   ├── App.vue             # Main App component
│   └── main.ts             # Entry point for the application
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Project dependencies and scripts
└── yarn.lock               # Lock file for Yarn
```
