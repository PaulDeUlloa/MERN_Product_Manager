const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
require("./config/mongoose.config");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes/product.routes")(app);

//To ensure our server is working correctly we will have this message below display in our terminal.

app.listen(port, () => console.log(`✨Listening on port: ${port}`));
