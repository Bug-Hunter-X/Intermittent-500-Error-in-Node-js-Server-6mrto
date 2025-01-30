# Intermittent 500 Error in Node.js Server

This repository demonstrates a common issue in Node.js servers where asynchronous operations can lead to unhandled errors and unexpected 500 responses. The `bug.js` file contains a simplified server that randomly fails with an internal server error. The solution, provided in `bugSolution.js`, demonstrates proper error handling to address this issue.

## How to reproduce

1. Clone the repository.
2. Run `node bug.js`.
3. Send multiple requests to `http://localhost:3000`. Observe that some requests will return a 500 error.

## Solution

The `bugSolution.js` file provides a solution with improved error handling, preventing the 500 error and providing more informative responses.