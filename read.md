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

# Day4 & Day 5 & Day 6

## Discuss what is relational database and prism set up

# Day 7

## handle database with express

- Create Prisma Client

```javascript
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;
```

- Prisma Schema & Migrations

```prisma
model Book {
  id      Int    @id @default(autoincrement())
  name    String @unique
  author  String
  release String
  price   Float
}

```

- Handle db with express

```js
server.post("/create-book", async (req, res) => {
  try {
    const { name, author, release, price } = req.body;

    if (!name || !author || !release || !price) {
      return res.status(400).json({ message: "Invalid Data" });
    }

    const isNameAlreadyExist = await prisma.book.findUnique({
      where: {
        name,
      },
    });

    if (isNameAlreadyExist) {
      return res.status(400).json({ message: "Book name is already exist!" });
    }

    await prisma.book.create({
      data: {
        name,
        author,
        release,
        price,
      },
    });

    return res.status(200).json({ message: "Book created sucessful!" });
  } catch (error) {
    console.log("Error is ", error.message);
    return res.status(500).json({ message: "Interval server error!" });
  }
});
```
