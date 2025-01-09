import express from "express";

const app = express();

// middleawre fro json data
app.use(express.json());

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
  console.log("Request is  ", req);

  // condition
  if (!name) {
    return res.status(400).json({ message: "Invalid Data" });
  }

  if (name.length < 2) {
    return res.status(400).json({ message: "Name Must be at least 2 chars" });
  }

  return res.status(200).json({ message: "Ok" });
});

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
