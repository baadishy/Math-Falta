const express = require("express");
const { writeFile, readFile } = require("fs/promises");
const cors = require("cors");
const app = express();

async function users(req, res, next) {
  let users;
  try {
    return users = JSON.parse(await readFile("./users.json", "utf8"));
  } catch (err) {
    return users = [
      {
        username: "felemonfawzy@admin.com",
        title: "admin",
        password: "theAdminFelemonFawzy",
      },
    ];
  } finally {
    res.users = users
    next()
  }
}

app.use(express.json(), cors(), users);

app.get("/users", async (req, res) => {
  res.json(res.users)
});

app.post("/addUser", async (req, res) => {
  try {
    let users = res.users
    const newUser = req.body;
    users.push(newUser);
    await writeFile("./users.json", JSON.stringify(users));
    res.status(200).send("data sent");
  } catch (err) {
    console.log(err);
  }
});

app.listen(3000);
