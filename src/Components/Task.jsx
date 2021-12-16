import React, { Component } from 'react';
import {GrAddCircle} from 'react-icons/gr'


export default function Task({arr}){
    return arr.map(()=>{
        return (
            <>
                <div className="task-2">
                    <div className="task-name">
                        <p id="name-1">Group Task 33332</p>
                    </div>
                        <p id="name-2">APRIL - JUNE</p>
                        <input type="text" placeholder=" No Task Available" id="input-task" />
                    
                    <div className="main-3">
                        <GrAddCircle id="icon-2"/>
                        <p id="new-task">New Task</p>
                    </div>
                </div>  
            </>
        )
    })

}