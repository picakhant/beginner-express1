import express from "express";

const app = express();

const myMiddleware = (req, res, next) => {
  console.log("Passed Into middleware");
  next();
};

// middleawre fro json data
app.use(express.json());
app.use(myMiddleware);

const fakeData = {
  id: 1,
  name: "IPhone 11 pro",
};

app.get("/", (req, res) => {
  return res.status(200).json(fakeData);
});

app.post("/", (req, res) => {
  // data from req body
  const { name } = req.body;

  // condition
  if (!name) {
    return res.status(400).json({ message: "Invalid Data" });
  }

  if (name.length < 2) {
    return res.status(400).json({ message: "Name Must be at least 2 chars" });
  }

  return res.status(200).json({ message: "Ok" });
});

app.get(
  "/about",
  (req, res, next) => {
    console.log("You Pass Into Middleware");
    next();
  },
  (req, res) => {
    return res.status(200).json({ message: "Ok" });
  }
);

app.post(
  "/admin/create-post",
  // data valid middleware
  (req, res, next) => {
    const { id, title, desc, authorId, authorRole } = req.body;

    if (!id || !title || !desc || !authorId || !authorRole) {
      return res.status(400).json({ message: "Invalid Data" });
    }
    next();
  },
  //authorization middleware
  (req, res, next) => {
    const { authorRole } = req.body;

    if (authorRole === "user") {
      return res.status(403).json({ message: "Only admin can access!" });
    }
    next();
  },
  // final function
  (req, res) => {
    return res.status(200).json({ message: "Post Created Successful" });
  }
);

app.listen(4000, () => {
  console.log("App is running on port 4000");
});
