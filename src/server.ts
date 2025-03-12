import express from "express";
import dotenv from "dotenv";
import path from "path";
import pageRouter from './routes/routes'

dotenv.config();
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../src/views"));

app.use('/', pageRouter)
app.use(express.static(path.join(__dirname, "public")));



app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});// This is your server file :)
