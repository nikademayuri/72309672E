Average Calculator Microservice
This is a Node.js server that fetches numbers from another API, keeps the latest unique numbers (up to 10), and calculates their average.

How to run
Install Node.js.

Open terminal and go to the project folder.

Run:

bash
Copy code
npm install
node mock-third-party.js  # start mock API in one terminal
node index.js             # start main server in another terminal
Visit:
http://localhost:9876/numbers/e
(change e to p, f, or r)

Features
Fetches numbers from 3rd party API

Keeps last 10 unique numbers

Calculates average of stored numbers

Handles errors/timeouts gracefully

Author
Mayuri Nikade
