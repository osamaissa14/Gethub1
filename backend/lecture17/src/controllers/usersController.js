import pool from "../config/db";

// create a new user
export const createUser = async (req, res) => {
    const { name, email } = req.body;
    try{

        await pool.query(
            "INSERT INTO users (name, email) VALUES ($1, $2)",
            [name, email]
        );
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}
    //read all users'
   export const getUsers = async (req, res) => {
    const result = await pool.query("SELECT * FROM users");   
    res.render("index.ejs", { users: result.rows });
}

//update user
export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
        await pool.query(
            "UPDATE users SET name = $1, email = $2 WHERE id = $3",
            [name, email, id]
        );
        res.redirect("/");
    } catch (error) {
        console.error("Error updating user:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}
 
//delete user
export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query("DELETE FROM users WHERE id = $1", [id]);
        res.redirect("/");
    } catch (error) {
        console.error("Error deleting user:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}