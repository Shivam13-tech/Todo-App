import React from "react";
import { useState } from "react";
import Header from "./Header";
import Todo from "./Todo";
import Card from "./Card";




function App(){

    const [value, setvalue] = useState({
        todo: '',
        id: ''
    })

    function propbot(arg){
        
        setvalue(function(prevValue){
            return {
                todo: arg.todo,
                id: arg._id
            }
        })
        console.log(arg);
    }

    return (
        <div>
            <Header />
            <Todo data={value.todo} item={value.id}/>
            <Card fnc={propbot}/>
        </div>
    )
}


export default App;