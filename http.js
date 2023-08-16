const users = [
  {
    id: "1",
    email: "user1@example.com",
    password: "password1",
  },
  {
    id: "2",
    email: "user2@example.com",
    password: "password2",
  },
  {
    id: "3",
    email: "user3@example.com",
    password: "password3",
  },
  {
    id: "4",
    email: "user4@example.com",
    password: "password4",
  },
  {
    id: "5",
    email: "user5@example.com",
    password: "password5",
  },
];
const express = require("express");
const app = express();
const port = 3000;

const { v4: uuid } = require("uuid");
app.use(express.json());
const bcrypt = require("bcrypt");
const saltRounds = 10;
//---------------------------------//

// const data = require("./data");
// const fs = require("fs");

// const hashMiddleware = (req, res, next) => {
//   const { email, password } = req.body;
//   const hash = bcrypt.hashSync(password, saltRounds);
//   password = hash;
//   next();
// };

// fs.writeFile("data.js", data, (err) => {
//   if (err) throw err;
//   console.
// });

//---------------------------------//

function withoutEncryption(password, hash) {
  const outHash = bcrypt.compareSync(password, hash);
  return outHash;
}

function hash(password, saltRounds) {
  const hash = bcrypt.hashSync(password, saltRounds);
  return hash;
}
users.forEach((element) => {
  element.password = hash(element.password, saltRounds);
});

app.get("/", (req, res) => {
  res.send(users);
});

app.get("/:id", (req, res) => {
  const userId = req.params.id;
  const userSearch = users.find((user) => user.id === userId);
  console.log(userId);
  if (!userSearch) {
    return res.status(404).json({ error: "User not found" });
  }
  res.send(userSearch);
});

app.post("/", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  const newUser = { id: uuid(), email, password: hash(password, saltRounds) };
  users.push(newUser);
  res.send(users);
  log("The file has been saved!");
});

app.put("/:id", (req, res) => {
  const userId = req.params.id;
  const index = users.findIndex((user) => user.id === userId);
  const userSearch = users.find((user) => user.id === userId);
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  if (!userSearch) {
    return res.status(404).json({ error: "User not found" });
  }
  users[index] = { id: userId, email, password };
  res.send(users);
  log("The file has been saved!");
});

app.delete("/:id", (req, res) => {
  const userId = req.params.id;
  const index = users.findIndex((user) => user.id === userId);
  const userSearch = users.find((user) => user.id === userId);
  if (!userSearch) {
    return res.status(404).json({ error: "User not found" });
  }
  users.splice(index, 1);
  res.send(users);
  return res.status(200).send(`User ${userId} delete`);
});

app.post("/Search", (req, res) => {
  const { email, password } = req.body;
  const index1 = users.findIndex((user) => user.email === email);
  if (!email || !password) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  const userFound = users.find(
    (element) =>
      bcrypt.compareSync(password, element.password) && element.email === email
  );

  if (userFound) {
    return res.send(`User found, ID:${users[index1].id}`);
  } else {
    return res.status(404).json({ error: "User not found" });
  }
});

app.listen(port, () => console.log(`Server started on port ${port}`));
