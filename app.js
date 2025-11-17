const express = require("express");
const app = express();
const path = require("path");
const sequelize = require("./models");
const userRoutes = require("./routes/UserRoute");

app.use(express.json());
app.use(express.static(path.join(__dirname, "views")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.use("/users", userRoutes);

sequelize.sync().then(() => console.log("DB synced"));

app.listen(3000, () => console.log("Server running on 3000"));
