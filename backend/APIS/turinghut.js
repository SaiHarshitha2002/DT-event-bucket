const exp=require('express')

const turingHutApi=exp.Router();

turingHutApi.use(exp.json())

const expressAsyncHandler=require('express-async-handler')

turingHutApi.get('/all-todos', expressAsyncHandler(async (request,response)=>{
    //console.log("HIIIIII")
    const workCollection=request.app.get("turinghutCollection");
    let works=await workCollection.find().toArray();
    response.send({payload:works});
}))

turingHutApi.post('/add-todo',expressAsyncHandler(async (request,response)=>{
    console.log("request recieved")
    const workCollection=request.app.get("turinghutCollection");
    let newTodo=request.body;
    await workCollection.insertOne(newTodo)
    response.send("added todo successfully")
}))

turingHutApi.delete('/remove/:id',expressAsyncHandler(async (request,response)=>{
    const ID=+(request.params.id)
    const workCollection=request.app.get("turinghutCollection");
    await workCollection.deleteOne({id:ID})
    response.send('removed Successfully')
}))

module.exports=turingHutApi;