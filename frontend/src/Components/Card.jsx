import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import Button from "@mui/material/Button";

const baseUrl = 'http://127.0.0.1:5000/api/v1'
const baseDel = 'http://127.0.0.1:5000/api/v1/'
const baseGet = 'http://127.0.0.1:5000/api/v1/'



function Card(props){
    const [todo, settodo] = useState([])
    useEffect(async function(){
       const result = await axios.get(baseUrl);
       settodo(result.data); 
    },[])


function handleDel(event){
 axios.delete(baseDel + event.target.id).then(function(response){
     console.log(response)
 }).catch(function(err){
     console.log(err);
 })
 window.location.reload(false);
}

function handleEdit(event){
    axios.get(baseGet + event.target.id).then(function(response){
        props.fnc(response.data)
    }).catch(function(err){
        console.log(err);
    })
}
    return (
        <div className="center">
        <div className= "column">
            <div className="card" >
                <ul>  
                  <li>
                    <label>
                        {todo.map(function(item){
                            return (
                                <div key={item.todo}>
                                    <input type="checkbox" className="strikethrough" />
                                    <h5>{item.todo}</h5>
                                    <Button id={item._id} onClick={handleEdit} type="submit" style={{margin: '8px'}} variant="contained">EDIT</Button>
                                    <Button id={item._id} onClick={handleDel} type="submit" variant="contained">DELETE</Button>
                                </div>
                                )})}
                    </label>
                  </li> 
                </ul>
            </div>
        </div>
    </div>
        )}
    export default Card;
    // <div>
    //     {todo.map(function(item){
    //         return (
    //             <h1>{item.todo}</h1>
    //         )
    //     })}
    // </div>

    