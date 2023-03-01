
import express from "express"; // "type": "module"
import { MongoClient } from 'mongodb'
import * as dotenv from 'dotenv'
import moviesidRouter from './router/moviesid.router.js';
import useridRouter from './router/userid.router.js'; //we can change name
import cors from "cors";
// import bcrypt   from ' bcrypt'
dotenv.config()
const app = express();

console.log(process.env.mongo_url)

const PORT = process.env.PORT;

// const mongo_url = 'mongodb://127.0.0.1';
const mongo_url =(process.env.mongo_url)
export const client = new MongoClient(mongo_url);
await client.connect();
  console.log('mongo is connected!!');

 app.use(cors())

  app.use(express.json())

  
app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});

      
app.use("/moviesid",moviesidRouter);
app.use("/userid",useridRouter);

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
