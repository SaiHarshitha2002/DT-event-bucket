const exp=require('express')

const specialEventsApi=exp.Router();

specialEventsApi.use(exp.json())

const expressAsyncHandler=require('express-async-handler')

specialEventsApi.get('/all-todos', expressAsyncHandler(async (request,response)=>{
    //console.log("HIIIIII")
    const workCollection=request.app.get("specialEventsCollections");
    let works=await workCollection.find().toArray();
    response.send({payload:works});
}))

specialEventsApi.post('/add-todo',expressAsyncHandler(async (request,response)=>{
    console.log("request recieved")
    const workCollection=request.app.get("specialEventsCollections");
    let newTodo=request.body;
    await workCollection.insertOne(newTodo)
    response.send("added todo successfully")
}))

specialEventsApi.delete('/remove/:id',expressAsyncHandler(async (request,response)=>{
    const ID=+(request.params.id)
    const workCollection=request.app.get("specialEventsCollections");
    await workCollection.deleteOne({id:ID})
    response.send('removed Successfully')
}))

module.exports=specialEventsApi;