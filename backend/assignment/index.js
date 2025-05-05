import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

let posts = [];
let postId = 1;

app.get("/", (req, res) => {
  res.render("index", { posts });
});

app.get("/new", (req, res) => {
  res.render("new");
});

app.post("/posts", (req, res) => {
  const { title, content } = req.body;
  posts.push({ id: postId++, title, content });
  res.redirect("/");
});

app.get("/edit/:id", (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  res.render("edit", { post });
});

app.post("/edit-form", (req, res) => {
  const id = req.body.id;

  let post = null;
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id == id) {
      post = posts[i];
      break;
    }
  }

  if (post) {
    res.render("edit", { post });
  } else {
    res.send("Post not found.");
  }
});



app.post("/delete", (req, res) => {
  const id = req.body.id;
  const updatedPosts = [];

  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id != id) {
      updatedPosts.push(posts[i]);
    }
  }

  posts = updatedPosts;
  res.redirect("/");
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
