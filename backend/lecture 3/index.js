import exprss from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import {fileURLToPath} from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = exprss();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
    });

    const checkpassword=(req, res, next) => {
        const password = req.body.password; 
      if (req.body.password === "123@") {
            next();
        } else {
            res.send("Wrong Password!");
        }
    }
app.post("/submit", checkpassword,(req, res) => {
  console.log(req.body);
  res.sendFile(__dirname + "/public/index2.html");
});
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.get("/about", (req, res) => {
//   res.send("About Page");
// });

// app.get("/login", (req, res) => {
//   res.send(
//     "<form action='/login' method='POST'><input type='email' email='email' placeholder='email'><input type='password' name='password' placeholder='Password'><button type='submit'>Login</button></form>"
//   );
// });

const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
