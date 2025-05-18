import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import pg from "pg";
import methodOverride from "method-override";



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();
const port = 3000;

app.use(methodOverride("_method"));
app.use(express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");


const db= new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "osama",
  password:"1235",
  port: 5432,
});

db.connect().then(() => {
  console.log("Connected to the database");
}).catch((err) => {
  console.error("Database connection error:", err);
});


// Routes
app.get("/",async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM posts ORDER BY id;");
  res.render("index", { posts: result.rows });
  } catch (err) {
    console.error("Error fetching posts:", err);
    res.status(500).json({ error: err.message });
  }});



// Get post by ID

app.get("/posts/:id", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM posts WHERE id=$1;",[id]);
    if(result.rows.length >0) {
      res.json(result.rows);
    }else {
      res.status(404).json({ error: "Post not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create new post
app.get("/new", (req, res) => {
  res.render("new");  
});
app.post("/new", async (req, res) => {
  const { title, content, auther } = req.body;
  console.log(req.body);

  try {
    const result = await db.query(
      "INSERT INTO posts (title, content, auther) VALUES ($1, $2, $3) RETURNING *",
      [title, content, auther]
    );
        res.redirect("/");


    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// Edit post
app.get("/edit/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const result = await db.query("SELECT * FROM posts WHERE id = $1", [id]);
    if (result.rows.length > 0) {
      res.render("edit", { post: result.rows[0] });
    } else {
      res.status(404).send("Post not found");
    }
  } catch (err) {
    res.status(500).send("Server error");
  }
});


app.post("/edit/:id",async (req, res) => {
  const id=parseInt(req.params.id);
  const { title, content, auther } = req.body;
   try{
    const result = await db.query(
      "UPDATE posts SET title=$1, content=$2, auther=$3,date=NOW() WHERE id=$4 RETURNING *",
      [title, content, auther, id]
    );
    if (result.rows.length > 0) {
res.redirect("/");
    } else {
      res.status(404).json({ error: "Post not found" });
    }
   }catch(err){

     res.status(500).json({ error: err.message });
   }

});





app.post("/edit/:id",async (req, res) => {

 const id=parseInt(req.params.id);
  const { title, content, auther } = req.body;
   try{
    const fields=[];
    const values=[];
    let count=1;
    if(title){
      fields.push(`title=$${count++}`);
      values.push(title);
    }
    if(content){
      fields.push(`content=$${count++}`);
      values.push(content);
    }
    if(auther){
      fields.push(`auther=$${count++}`);
      values.push(auther);
    }
    values.push(id);

    const result = await db.query(
      `UPDATE posts SET ${fields.join(", ")},date=NOW() WHERE id=$${count} RETURNING *`,
      values
    );
    if (result.rows.length > 0) {
      res.status(200).json(result.rows[0]);
    } else {
      res.status(404).json({ error: "Post not found" });
    }
   }catch(err){

     res.status(500).json({ error: err.message });
   }
});


// Delete post

app.post("/delete",async (req, res) => {
   const id=parseInt(req.body.id);
  try{
    const result = await db.query("DELETE FROM posts WHERE id=$1 RETURNING *", [id]);
    if (result.rows.length > 0) {
      res.redirect("/"); 
    } else {
      res.status(404).json({ error: "Post not found" });
    }
  }catch(err){
    res.status(500).json({ error: err.message });
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
