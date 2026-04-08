# Overview

This project is designed to help me strengthen my skills as a software engineer by practicing core full-stack development concepts using TypeScript, Node.js, and web technologies. The goal is to build an interactive file management system, apply client-server communication, and document the development process.

The software is a web-based File Uploader and Downloader application that runs in the browser with a Node.js backend server. The application allows users to upload files, view a list of stored files, and download files from the server. It demonstrates handling file system operations, routing, API development, and frontend-backend integration.

The purpose of creating this software is to build a strong foundation in backend and frontend integration, practice working with file systems, apply asynchronous programming concepts, and prepare for more advanced full-stack applications in future modules.

# Project Structure
file-system-project
│
├── src/
│ ├── index.ts # Main entry point of the application
│ ├── Uploader.ts # Handles file upload logic
│ ├── Downloader.ts # Handles file download logic
│ ├── FileManager.ts # Manages file storage and retrieval
│ └── utils/ # Helper functions (if applicable)
│
├── storage/ # Stores uploaded files
├── downloads/ # Stores downloaded files
├── public/
│ └── index.html # Frontend UI
│
├── package.json # Project dependencies and scripts
├── tsconfig.json # TypeScript configuration
└── README.md # Project documentation


[Software Demo Video](https://www.loom.com/share/8b7cd8aa175b480681e7ba6648ed6a83)

# Features Demonstrated

* Variables, Expressions, and Conditionals  
* Loops and Array Methods (`forEach`, `map`, recursion for search logic)  
* Functions for core features such as `upload()`, `download()`, and file listing  
* Recursion (used in file search functionality)  
* File System Operations using Node.js `fs/promises`  
* DOM Manipulation (frontend dynamic updates)  
* Event Handling (button clicks and user input)  
* Asynchronous Programming with `async/await`  
* REST-like API endpoints (`/upload`, `/files`, `/download/:filename`)  
* Error Handling using `try...catch` for file operations and API calls  
* Client-server communication using `fetch`  

# How to Run

1. Open the project folder (`file-system-project`) on your computer.  
2. Install dependencies by running:
npm install

3. Ensure TypeScript types are installed:

npm install --save-dev @types/node

4. Start the server:

npm start

5. Open your browser and navigate to:

http://localhost:5000

6. Use the web interface to upload, view, and download files.

# Development Environment

I used **Visual Studio Code** as my code editor and **Git** for version control. The project was developed on a Windows system.

The programming language used is **TypeScript**, which runs on top of Node.js. The backend uses **Node.js** with built-in file system modules (`fs/promises`) to handle file operations. The frontend uses standard web technologies including **HTML, CSS, and JavaScript**, and communicates with the backend using HTTP requests.

# Useful Websites

* [Node.js Documentation](https://nodejs.org/en/docs/) – Reference for Node.js APIs and modules  
* [TypeScript Documentation](https://www.typescriptlang.org/docs/) – Guidance on TypeScript syntax and configuration  
* [MDN Web Docs](https://developer.mozilla.org/) – Reference for HTML, CSS, and JavaScript  
* [Stack Overflow](https://stackoverflow.com/) – Troubleshooting and debugging assistance  
* [GitHub Docs](https://docs.github.com/) – Version control and repository management  

Additional resources used:

* [BYU-I Course Materials](https://byui-cse.github.io/cse310-ww-course/modules/module_descriptions.html)  
* [Node.js fs/promises Documentation](https://nodejs.org/api/fs.html#fs_fs_promises_api)  
