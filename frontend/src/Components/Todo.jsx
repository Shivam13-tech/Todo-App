import { useState,useEffect } from "react";
import React from "react";
import axios from "axios";


import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";

const baseUrl = 'http://127.0.0.1:5000/api/v1'
const baseUpdate = 'http://127.0.0.1:5000/api/v1/'


function Todo(props){

   console.log(props)
    const [textdata, settextdata] = useState({
        fname: ''
    });

    useEffect(function(){
        settextdata(function(prevValue){
            return {
                fname: props.data
            }
        })
    },[props.data]);



    function handlechange(event){
        let {value} = event.target
        settextdata(function(prevValue){
            // console.log(prevValue)
            return{
                 fname: value
            }
        })
    }

    
    function handleEdit(){
        axios.patch(baseUpdate + props.item, {
            todo: textdata.fname
        })
    }

    function handlesubmit(event){
        event.preventDefault();
        axios.post(baseUrl, {
            todo: textdata.fname
        }).then(function(response){
            console.log(response)
        })
        settextdata({
            fname: ''
        })
        window.location.reload(false);
        // console.log(textdata.fname)
    }

    return (
        <div>
            <form className="form">
            <TextField onChange={handlechange} type="text" style={{marginTop: '30px',marginBottom: '10px', width: '30%'}} value={textdata.fname} placeholder="Enter text..." id="outlined-basic" fullWidth label="Todo" variant="outlined" />
            <br />
            <Button onClick={handlesubmit} type="submit" style={{margin: '15px'}} variant="contained">Add-TODO</Button>
            <Button onClick={handleEdit} type="submit" variant="contained">Edit-TODO</Button>
            </form>
        </div>
    )
}

export default Todo;