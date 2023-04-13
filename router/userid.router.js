import express from "express";
import {client} from '../index.js';
const router=express.Router()

router.get("",async function (request, response) {

    // db.userid.find({})
    // cursor--pagination(20)|cursor->array(toArray())
    const userid= await client
    .db("userid")
    .collection("userids")
    .find({})
    .toArray();
        response.send(userid);
      });
  
      router.post("",async function (request, response) {
        const data=request.body;
        console.log(data);
    
    // db.userid.insertmany(data)
         const result= await client
            .db("userid")
           .collection("userids")
            .insertOne(data)
        response.send(result);
      });
  
  
        //update
      
        router.put("/:id",async function (request, response) {
          const data=request.body;
          const {id}=request.params;
          console.log(id)
          console.log(data);
        
        // db.moviesid.updateone({id:id},{$set:data})
           const result= await client
              .db("userid")
             .collection("userids")
              .updateOne({id:id},{$set:data})
          response.send(result);
        });
  
        router.get("/:id", async function (request, response) {
          const {id}=request.params;
          console.log(id);
          // const movies=movie.filter((mv)=>mv.id===id);
      
          // db.moviesid.findone({id:"100"})
          
          // const movies=movie.find((mv)=>mv.id===id);
          const find_id= await client
          .db("userid")
          .collection("userids")
          .findOne({id:id})
          console.log(find_id);
          find_id?response.send(find_id):response.status(404).send({message:"movie not found"})
        });

        router.delete("/:id", async function (request, response) {
          const {id}=request.params;
         console.log(id)
      // db.moviesid.deleteone({id:"100"})
         const result= await client
         .db("userid")
        .collection("userids")
         .deleteOne({id:id})
      console.log(result);
      result.deletedCount>=1
      ?response.send("userid deleted"):response.status(404).send({message:"id not found"})
        });
        export default router;