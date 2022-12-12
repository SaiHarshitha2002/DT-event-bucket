const exp=require('express')

const dramatrixApi=exp.Router();

dramatrixApi.use(exp.json())

const expressAsyncHandler=require('express-async-handler')

dramatrixApi.get('/all-todos', expressAsyncHandler(async (request,response)=>{
    //console.log("HIIIIII")
    const workCollection=request.app.get("dramatrixCollection");
    let works=await workCollection.find().toArray();
    response.send({payload:works});
}))

dramatrixApi.post('/add-todo',expressAsyncHandler(async (request,response)=>{
    console.log("request recieved")
    const workCollection=request.app.get("dramatrixCollection");
    let newTodo=request.body;
    await workCollection.insertOne(newTodo)
    response.send("added todo successfully")
}))

dramatrixApi.delete('/remove/:id',expressAsyncHandler(async (request,response)=>{
    const ID=+(request.params.id)
    const workCollection=request.app.get("dramatrixCollection");
    await workCollection.deleteOne({id:ID})
    response.send('removed Successfully')
}))

module.exports=dramatrixApi;