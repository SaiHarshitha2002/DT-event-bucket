import axios from 'axios';
import React, { useEffect, useState } from 'react';
//import {toall} from "./Work"
function All() {
  let [turingHut,setTuringHut]=useState([]);
  let [vjtheatro,setVjTheatro]=useState([]);
  let [dramatrix,setDramatrix]=useState([]);
  let [stentorion,setStentorion]=useState([]);
  let [creativeArts,setCreativeArts]=useState([]);
  let [cresendro,setCresendo]=useState([]);
  let [diurnalis,setDurnalis]=useState([]);
  let [liveWire,setLiveWire]=useState([]);
  let [specialEvents,setSpecialEvents]=useState([]);
  let [nrithyaTarag,setNrithyaTarag]=useState([]);
  const getTuringHut=()=>{
    axios.get("http://localhost:4040/turingHut/all-todos")
    .then((response)=> {
      console.log(response); 
      setTuringHut(Array.from(response.data.payload))})
    .catch(err=>alert(err))
  }
////////////////////////////
const getvjtheatro=()=>{
  axios.get("http://localhost:4040/work/all-todos")
  .then((response)=> {
    console.log(response); 
    setVjTheatro(Array.from(response.data.payload))})
  .catch(err=>alert(err))
}
const getdramatrix=()=>{
  axios.get("http://localhost:4040/dramatrix/all-todos")
  .then((response)=> {
    console.log(response); 
    setDramatrix(Array.from(response.data.payload))})
  .catch(err=>alert(err))
}
const getStentorian=()=>{
  axios.get("http://localhost:4040/scintillate/all-todos")
  .then((response)=> {
    console.log(response); 
    setStentorion(Array.from(response.data.payload))})
  .catch(err=>alert(err))
}
const getCreativeArts=()=>{
  axios.get("http://localhost:4040/creativearts/all-todos")
  .then((response)=> {
    console.log(response); 
    setCreativeArts(Array.from(response.data.payload))})
  .catch(err=>alert(err))
}
const getCResendo=()=>{
  axios.get("http://localhost:4040/cresendo/all-todos")
  .then((response)=> {
    console.log(response); 
    setCresendo(Array.from(response.data.payload))})
  .catch(err=>alert(err))
}
const getDiurnalis=()=>{
  axios.get("http://localhost:4040/birthdays/all-todos")
  .then((response)=> {
    console.log(response); 
    setDurnalis(Array.from(response.data.payload))})
  .catch(err=>alert(err))
}







  /////////////////////////////////
  const getLiveWire=()=>{
    // console.log("This is called")
     axios.get("http://localhost:4040/personal/all-todos")
     .then(response=> {
      setLiveWire(Array.from(response.data.payload))
     // console.log(response)
     })
     .catch(err=>alert(err))
   }
   const getSpecialEvents=()=>{
    axios.get("http://localhost:4040/specialEvents/all-todos")
    .then(response=>setSpecialEvents(Array.from(response.data.payload)))
    .catch(err=>alert(err))
  }
  const getnrithyaTarag=()=>{
    axios.get("http://localhost:4040/wishlist/all-todos")
    .then((response)=>{
      console.log(response);
      setNrithyaTarag(Array.from(response.data.payload))})
    .catch(err=>alert(err))
  }
  useEffect(()=>{
    getCResendo()
    getDiurnalis()
    getLiveWire()
    getSpecialEvents()
    getStentorian()
    getTuringHut()
    getdramatrix()
    getnrithyaTarag()
    getvjtheatro()
    getCreativeArts()
  },[])
  return <div>
  <div class='container-md m-5'>
  <table class="table text-center" >
        <thead>
          <tr>
            <th  style={{width:"300px"}}>Event</th> 
            <th className=''> <span className='ms-4'> Date</span></th>
            <th> <span className=''> Club</span></th>
          </tr>
        </thead>
        </table>
      <div >
      {cresendro.length===0 ?<div></div> :
     <table className='table'>
        <tbody>
          {
            cresendro.map((element,index)=>
              <tr>
              <td  style={{width:"300px"}}><span >{element.task}</span></td>
              
              <td  style={{width:"300px"}}><span >{element.date}</span></td>
                <td className=''>Cresendo</td>
              </tr>
            )
          }
        </tbody>
      </table>}
      </div>

  
   <div >
      {vjtheatro.length===0 ?<div></div> :
      <table class="table">
        
        <tbody>
          {
            vjtheatro.map((element,index)=>
              <tr>
              <td  style={{width:"300px"}}><span >{element.task}</span></td>
              <td  style={{width:"300px"}}><span >{element.date}</span></td>
                <td>VJTheatro</td>
              </tr>
            )
          }
        </tbody>
      </table>}
      </div>


      <div >
      {turingHut.length===0 ?<div></div> :
      <table class="table">
       
        <tbody>
          {
            turingHut.map((element,index)=>
              <tr>
              <td  style={{width:"300px"}}><span >{element.task}</span></td>
              <td  style={{width:"300px"}}><span >{element.date}</span></td>
                <td>TuringHut</td>
              </tr>
            )
          }
        </tbody>
      </table>}
      </div>
  

      <div >
      {dramatrix.length===0 ?<div></div> :
      <table class="table">
       
        <tbody>
          {
            dramatrix.map((element,index)=>
              <tr>
              <td  style={{width:"300px"}}><span >{element.task}</span></td>
              <td  style={{width:"300px"}}><span >{element.date}</span></td>
                <td>Dramatrix</td>
              </tr>
            )
          }
        </tbody>
      </table>}
      </div>


      <div >
      {stentorion.length===0 ?<div></div> :
      <table class="table">
       
        <tbody>
          {
            stentorion.map((element,index)=>
              <tr>
              <td  style={{width:"300px"}}><span >{element.task}</span></td>
              <td  style={{width:"300px"}}><span >{element.date}</span></td>
                <td>Stentorion</td>
              </tr>
            )
          }
        </tbody>
      </table>}
      </div>

      <div >
      {creativeArts.length===0 ?<div></div> :
      <table class="table">
       
        <tbody>
          {
            creativeArts.map((element,index)=>
              <tr>
              <td  style={{width:"300px"}}><span >{element.task}</span></td>
              <td  style={{width:"300px"}}><span >{element.date}</span></td>
                <td>CreativeArts</td>
              </tr>
            )
          }
        </tbody>
      </table>}
      </div>

      <div >
      {diurnalis.length===0 ?<div></div> :
      <table class="table">
       
        <tbody>
          {
            diurnalis.map((element,index)=>
              <tr>
              <td  style={{width:"300px"}}><span >{element.task}</span></td>
              <td  style={{width:"300px"}}><span >{element.date}</span></td>
                <td>Diurnalis</td>
              </tr>
            )
          }
        </tbody>
      </table>}
      </div>


      <div >
      {liveWire.length===0 ?<div></div> :
      <table class="table">
        
        <tbody>
          {
            liveWire.map((element,index)=>
              <tr>
              <td  style={{width:"300px"}}><span >{element.task}</span></td>
              <td  style={{width:"300px"}}><span >{element.date}</span></td>
                <td>LiveWire</td>
              </tr>
            )
          }
        </tbody>
      </table>}
      </div>

      <div >
      {specialEvents.length===0 ?<div></div> :
      <table class="table">
        
        <tbody>
          {
            specialEvents.map((element,index)=>
              <tr>
              <td  style={{width:"300px"}}><span >{element.task}</span></td>
              <td  style={{width:"300px"}}><span >{element.date}</span></td>
                <td>SpecialEvent</td>
              </tr>
            )
          }
        </tbody>
      </table>}
      </div>

      <div >
      {nrithyaTarag.length===0 ?<div></div> :
      <table class="table">
       
        <tbody>
          {
            nrithyaTarag.map((element,index)=>
              <tr>
              <td  style={{width:"300px"}}><span >{element.task}</span></td>
              <td  style={{width:"300px"}}><span >{element.date}</span></td>
                <td>NrithyaTarag</td>
              </tr>
            )
          }
        </tbody>
      </table>}
      </div>

    </div>
  </div>;

}

export default All;
