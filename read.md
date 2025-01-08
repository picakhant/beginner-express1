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
