
import express from "express"; // "type": "module"
import { MongoClient } from 'mongodb'
import * as dotenv from 'dotenv'
// import moviesRouter from "./router.movies.js"; //we can change name
dotenv.config()
const app = express();

console.log(process.env.mongo_url)

const PORT = process.env.PORT;

// const mongo_url = 'mongodb://127.0.0.1';
const mongo_url =(process.env.mongo_url)
const client = new MongoClient(mongo_url);
await client.connect();
  console.log('mongo is connected!!');

  app.use(express.json())

  
app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});


app.get("/moviesid",async function (request, response) {

  // db.moviesid.find({})
  // cursor--pagination(20)|cursor->array(toArray())
  const movie= await client
  .db("b42mongo")
  .collection("moviesid")
  .find({})
  .toArray();
      response.send(movie);
    });
  
    app.get("/moviesid/:id", async function (request, response) {
      const {id}=request.params;
      console.log(id);
      // const movies=movie.filter((mv)=>mv.id===id);
  
      // db.moviesid.findone({id:"100"})
      
      // const movies=movie.find((mv)=>mv.id===id);
      const movies= await client
      .db("b42mongo")
      .collection("moviesid")
      .findOne({id:id})
      console.log(movies);
      movies?response.send(movies):response.status(404).send({message:"movie not found"})
    });
  
    // express.json()--middle wear
    app.post("/moviesid",async function (request, response) {
      const data=request.body;
      console.log(data);
  
  // db.moviesid.insertmany(data)
       const result= await client
          .db("b42mongo")
         .collection("moviesid")
          .insertMany(data)
      response.send(result);
    });
  
    app.delete("/moviesid/:id", async function (request, response) {
      const {id}=request.params;
     console.log(id)
  // db.moviesid.deleteone({id:"100"})
     const result= await client
     .db("b42mongo")
    .collection("moviesid")
     .deleteOne({id:id})
  console.log(result);
  result.deletedCount>=1
  ?response.send("movie deleted"):response.status(404).send({message:"movie not found"})
    });
  
  
  //update
  
  app.put("/moviesid/:id",async function (request, response) {
    const data=request.body;
    const {id}=request.params;
    console.log(id)
    console.log(data);
  
  // db.moviesid.updateone({id:id},{$set:data})
     const result= await client
        .db("b42mongo")
       .collection("moviesid")
        .updateOne({id:id},{$set:data})
    response.send(result);
  });

// app.use("/moviesid",moviesRouter)
app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
