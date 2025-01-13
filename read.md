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

# Day 3

## Middleware

```javascript
app.use(middleware) // use the middleware the whole app
app.get("/route_name", (req, res, next) => {
  // your logics
  next()
}, (req, res) => return res) // specific route
```

# Day4 & Day 5

## Discuss what is relational database and prism set up