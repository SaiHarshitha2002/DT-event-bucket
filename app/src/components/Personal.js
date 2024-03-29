import React, { useEffect } from 'react';
import axios from 'axios';
import {useState} from 'react';
import { useForm } from 'react-hook-form';
import image from '../images/livewire.jpg'
function Personal(props) {  
  let [Birthdays,setBirthdays]=useState([])
  useEffect(()=>{
    getBirthdays();
  },[])
  const getBirthdays=()=>{
    axios.get("http://localhost:4040/personal/all-todos")
    .then((response)=> {
      console.log(response); 
      setBirthdays(Array.from(response.data.payload))})
    .catch(err=>alert(err))
  }
  let {register,handleSubmit}=useForm()
  let [emptyTask,setEmptyTask]=useState(false);
  const removetodo=(index)=>{
    axios.delete(`http://localhost:4040/personal/remove/${index}`)
    .then(response=>getBirthdays())
    .catch(err=>alert(err))
  }
  const addtodo=(obj)=>{
    if(obj.task==="" || obj.date===''){
      setEmptyTask(true);
    }
    else{
    obj.id=Birthdays.length  
    axios.post("http://localhost:4040/personal/add-todo",obj)
    .then(getBirthdays())
    .catch(err=>alert(err))
    setEmptyTask(false)
  }
  window.location.reload();
}
  return <div class='container m-5'>
  <div style={{minHeight:"400px"}}>
  {Birthdays.length===0 ? <h1 class='text-danger text-[20px]'>No Events</h1> :
  <table class="table">
    <thead>
      <tr>
        <th>Sno</th>
        <th>Task</th>
        <th>date</th>
      </tr>
    </thead>
    <tbody>
      {
        Birthdays.map((element,index)=>
          <tr>
            <td>{index+1}</td>
            <td>{element.task}</td>
            <td>{element.date}</td>
            {props.props==="Admin" &&    <td> <button class="btn btn-danger" onClick={()=>removetodo(element.id)}>X</button> </td> }
          </tr>
        )
      }
    </tbody>
  </table>}
  </div>
  {emptyTask && <p>*Cannot add a empty task</p>}
  {props.props==="Admin" &&
   <form onSubmit={handleSubmit(addtodo)} >
     <div class="row">
     <div className="col-sm-1 pb-2"><img src={image} alt="" className='display-block mb-5' style={{height:"60px"}} /></div>
       <div class="col-sm-6">
         <input type="text" id="" class="form-control mt-2 ms-4" placeholder='Add your task' {...register("task")} />
       </div>
       <div className="col-sm-3">
         <input type="date" id="#" className='form-control mt-2' {...register("date")} />
       </div>
       <div class="col-sm-2">
         <button class="btn btn-success mt-2" type="submit">+</button>
       </div>
     </div>
   </form>
  }
</div>
  
}

export default Personal;
