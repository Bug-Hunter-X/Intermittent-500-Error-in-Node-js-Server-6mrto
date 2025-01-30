const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  setTimeout(() => {
    try {
      if (Math.random() < 0.5) {
        // Simulate a successful request
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Success!');
      } else {
        // Simulate an error and handle it gracefully
        const error = new Error('Simulated Error');
        console.error('Error:', error); // Log the error for debugging
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error - Please try again later.');
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    }
  }, 100); // Simulate some delay
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});