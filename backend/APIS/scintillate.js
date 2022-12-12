const exp=require('express')

const scintillateApi=exp.Router();

scintillateApi.use(exp.json())

const expressAsyncHandler=require('express-async-handler')

scintillateApi.get('/all-todos', expressAsyncHandler(async (request,response)=>{
    //console.log("HIIIIII")
    const workCollection=request.app.get("scintillateCollection");
    let works=await workCollection.find().toArray();
    response.send({payload:works});
}))

scintillateApi.post('/add-todo',expressAsyncHandler(async (request,response)=>{
    console.log("request recieved")
    const workCollection=request.app.get("scintillateCollection");
    let newTodo=request.body;
    await workCollection.insertOne(newTodo)
    response.send("added todo successfully")
}))

scintillateApi.delete('/remove/:id',expressAsyncHandler(async (request,response)=>{
    const ID=+(request.params.id)
    const workCollection=request.app.get("scintillateCollection");
    await workCollection.deleteOne({id:ID})
    response.send('removed Successfully')
}))

module.exports=scintillateApi;