
import express from "express"; // "type": "module"
import { MongoClient } from 'mongodb'
import * as dotenv from 'dotenv'
import moviesidRouter from './router/moviesid.router.js';
import useridRouter from './router/userid.router.js'; //we can change name
import signinRouter from './router/login.router.js';
import forgetRouter from './router/forgetpassword.router.js';
import cors from "cors";
import bodyParser from "body-parser";
// import cors from "cors";

// import bcrypt   from ' bcrypt'
dotenv.config()
const app = express();

// console.log(process.env.mongo_url)

const PORT = process.env.PORT;
// const mongo_url = 'mongodb://127.0.0.1';
const mongo_url =(process.env.mongo_url)
export const client = new MongoClient(mongo_url);
await client.connect();
  console.log('mongo is connected!!');

 app.use(cors ())
 app.use(bodyParser.json());
 app.use(express.json())

  
app.get("/", function (request, response) {
  response.send(" this is get page🙋‍♂️, 🌏 🎊✨🤩");
});

app.use("/users",signinRouter);
app.use("/moviesid",moviesidRouter);
app.use("/",forgetRouter);
app.use("/userid",useridRouter);

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

