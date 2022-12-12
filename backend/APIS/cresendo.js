const exp=require('express')

const cresendoApi=exp.Router();

cresendoApi.use(exp.json())

const expressAsyncHandler=require('express-async-handler')

cresendoApi.get('/all-todos', expressAsyncHandler(async (request,response)=>{
    //console.log("HIIIIII")
    const workCollection=request.app.get("cresendoCollection");
    let works=await workCollection.find().toArray();
    response.send({payload:works});
}))

cresendoApi.post('/add-todo',expressAsyncHandler(async (request,response)=>{
    console.log("request recieved")
    const workCollection=request.app.get("cresendoCollection");
    let newTodo=request.body;
    await workCollection.insertOne(newTodo)
    response.send("added todo successfully")
}))

cresendoApi.delete('/remove/:id',expressAsyncHandler(async (request,response)=>{
    const ID=+(request.params.id)
    const workCollection=request.app.get("cresendoCollection");
    await workCollection.deleteOne({id:ID})
    response.send('removed Successfully')
}))

module.exports=cresendoApi;