import express from "express";
import {client} from '../index.js';
const router=express.Router()



router.post("",async function (request, response) {
    const data=request.body;
    console.log(data);

// db.userid.insertmany(data)
     const result= await client
        .db("seats")
       .collection("seats")
        .insertMany(data)
    response.send(result);
  });

//   router.post("",async function (request, response) {
//     const data=request.body;
//     console.log(data);

// // db.userid.insertmany(data)
//      const result= await client
//         .db("seats")
//        .collection("seats")
//         .updateMany(data)
//     response.send(result);
//   });
      
   router.put("",async function (request, response) {
      const data=request.body;
    //   const {id}=request.params;
    //   console.log(id)
      console.log(data);
    
    // db.moviesid.updateone({id:id},{$set:data})
       const result= await client
          .db("seats")
         .collection("seats")
         .updateMany(
            { seat: { $in:data } },
            { $set: { class:"dddHDJHNCJ" } },
            { multi: true }
           )
      response.send(result);
    });

    router.delete("/delete",async function (request, response) {
        const data=request.body;
        console.log(data);
    
    // db.moviesid.insertmany(data)
         const result= await client
            .db("seats")
           .collection("seats")
            .deleteMany(data)
        response.send(result);
      });


    router.get("",async function (request, response) {

        // db.moviesid.find({})
        // cursor--pagination(20)|cursor->array(toArray())
        const movie= await client
        .db("seats")
        .collection("seats")
        .find(
            {}
           
         )
        .toArray();
            response.send(movie);
          });

//     router.delete("",async function (request, response) {
//         const data=request.body;
//         console.log(data);
    
//     // db.moviesid.insertmany(data)
//          const result= await client
//             .db("seats")
//            .collection("seats")
//             .deleteMany(data)
//         response.send(result);
//       });
      export default router;