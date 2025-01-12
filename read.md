# Day 1

# Set up Environment

- npm init -y
- npm i express
- node_modules, package.json, package-local.json
- index.js

# Package JSON

- type to module --> "type":"module"

# Create Express Server

```javascript
import express from "express";
const app = express();
const port = 3000;
app.listen(port, () => console.log("App is Running"));
```

# Run the server

```bash
node index.js
```

# Handle Request

```javaScript
app.get("/", (req, res, next) => res.send("Hello"))
```

# Day 2

## Install NodeMon

```bash
npm i -D nodemon
```

```JSON
 "devDependencies": {
    "nodemon": "^3.1.9"
  }

  "scripts": {
    "dev": "nodemon index.js"
  },
```
Learn more on the [official website]([https://example.com](https://appwrite.io/docs/quick-starts/nextjs)).
