import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

let authenticated = false;
// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve index.html on GET /
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Middleware to check password
const checkPassword = (req, res, next) => {
  const password = req.body.password;
  authenticated = false; // Reset authentication status

  if (password === "123@") {
authenticated=true;
} else {
    res.send("Wrong Password!");
}
next();
};

// Protected POST route
app.post("/submit", checkPassword, (req, res) => {
  console.log(req.body);
  res.sendFile(__dirname + "/public/index2.html");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
