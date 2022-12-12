const exp=require('express')

const creativeArtsApi=exp.Router();

creativeArtsApi.use(exp.json())

const expressAsyncHandler=require('express-async-handler')

creativeArtsApi.get('/all-todos', expressAsyncHandler(async (request,response)=>{
    //console.log("HIIIIII")
    const workCollection=request.app.get("creativeArtsCollection");
    let works=await workCollection.find().toArray();
    response.send({payload:works});
}))

creativeArtsApi.post('/add-todo',expressAsyncHandler(async (request,response)=>{
    console.log("request recieved")
    const workCollection=request.app.get("creativeArtsCollection");
    let newTodo=request.body;
    await workCollection.insertOne(newTodo)
    response.send("added todo successfully")
}))

creativeArtsApi.delete('/remove/:id',expressAsyncHandler(async (request,response)=>{
    const ID=+(request.params.id)
    const workCollection=request.app.get("creativeArtsCollection");
    await workCollection.deleteOne({id:ID})
    response.send('removed Successfully')
}))

module.exports=creativeArtsApi;