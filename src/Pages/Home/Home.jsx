import React, { useState } from 'react';
import './home.css'
import logo  from './../../Assets/gorillalogo.png'
import {AiFillCheckCircle} from 'react-icons/ai'
import {BsThreeDots} from 'react-icons/bs'
import {GrAddCircle} from 'react-icons/gr'
export default function Home(){

    return (
        <>
            <div className="box-home">
                <div className="side-header">
                    <img src={logo} id="logo-header" alt=""/>
                </div>
                <div className="home-main">
                    <div className="main-1">
                        <p>Product Roadmap</p>
                    </div>
                    <div className="main-2">
                        {/* RENDER ITEM  */}
                        <div className="task-1">
                            <div className="task-name">
                                <p id="name-1">Group Task 1</p>
                            </div>
                                <p id="name-2">JANUARY - MARCH</p>

                            <div className="main-task">
                                <p id="name-item">Re Designed Your life! no More Pills</p>
                                <div className="task-option">
                                    <div className="option-left">
                                        <div id="loading">

                                        </div>
                                        <AiFillCheckCircle id="icon"/>
                                    </div>
                                    <BsThreeDots id="icon-2"/>
                                </div>
                            </div>
                            <div className="main-task">
                                <p id="name-item">Re Designed Your life! no More Pills</p>
                                <div className="task-option">
                                    <div className="option-left">
                                        <div id="loading">

                                        </div>
                                        <AiFillCheckCircle id="icon"/>
                                    </div>
                                    <BsThreeDots id="icon-2"/>
                                </div>
                            </div>
                         
                            
                            <div className="main-3">
                                <GrAddCircle id="icon-2"/>
                                <p id="new-task">New Task</p>
                            </div>
                        </div>  

                        <div className="task-2">
                            <div className="task-name">
                                <p id="name-1">Group Task 2</p>
                            </div>
                                <p id="name-2">APRIL - JUNE</p>
                                <input type="text" placeholder=" No Task Available" id="input-task" />
                            
                            <div className="main-3">
                                <GrAddCircle id="icon-2"/>
                                <p id="new-task">New Task</p>
                            </div>
                        </div>  

                        <div className="task-3">
                            <div className="task-name">
                                <p id="name-1">Group Task 3</p>
                            </div>
                                <p id="name-2">JULY - SEPTEMBER</p>
                                <input type="text" placeholder=" No Task Available" id="input-task" />
                            
                            <div className="main-3">
                                <GrAddCircle id="icon-2"/>
                                <p id="new-task">New Task</p>
                            </div>
                        </div>  

                        <div className="task-4">
                            <div className="task-name">
                                <p id="name-1">Group Task 4</p>
                            </div>
                                <p id="name-2">OCTOBER - DECEMBER</p>
                                <input type="text" placeholder=" No Task Available" id="input-task" />
                            
                            <div className="main-3">
                                <GrAddCircle id="icon-2"/>
                                <p id="new-task">New Task</p>
                            </div>
                        </div>  

       

                    </div>
                </div>

            </div>

        </>
    )
}