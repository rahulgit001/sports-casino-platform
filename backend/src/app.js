require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", require("./routes/auth.routes"));
app.use("/games", require("./routes/games.routes"));
app.use("/favorites", require("./routes/favorites.routes"));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`);
});
