import React, { useState,useEffect } from 'react';
import './home.css'
import logo  from './../../Assets/gorillalogo.png'
import {AiFillCheckCircle,AiOutlineArrowRight,AiOutlineEdit,AiOutlineDelete,AiOutlineArrowLeft} from 'react-icons/ai'
import {BsThreeDots} from 'react-icons/bs'
import {GrAddCircle} from 'react-icons/gr'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Axios from 'axios'
import { Button as ButtonSemantic, Popup,Grid } from 'semantic-ui-react'

export default function Home(){

    const [modalTambah,setModalTambah]=useState(false)
    const [editTask,setEditTask]=useState(false)

    const [indexTask,setIndexTask]=useState(0)
    const [nameTask,setNameTask]=useState('')
    const [progressNum,setProgressNum]=useState(0)


    const onSave=()=>{
        console.log('save btn')
        console.log(indexTask,'ini index task')
        console.log(nameTask,'ini name task')
        console.log(progressNum,' ini progress Num')
        setModalTambah(false)
    } 
    const onSaveEdit=()=>{
        console.log('active')
    }

    const createTask=(id)=>{
        setModalTambah(true)
        setIndexTask(id)
    }
    const editTaskFunc=(id)=>{
        console.log(id)
        setEditTask(true)
    }

    const onTaskName=(taskName)=>{
        console.log(taskName)
        setNameTask(taskName)
    }
    const onProgress=(progress)=>{
        console.log(progress)
        setProgressNum(progress)
    }



    const onEditTask=(taskName)=>{
        console.log(taskName)
    }
    const onEditProgress=(progress)=>{
        console.log(progress)
    }

    
    const toggle=()=>setModalTambah(false)
    const toggleEdit=()=>setEditTask(false)
    return (
        <>
        <Modal isOpen={editTask} toggle={toggleEdit} id="modal-box">
                <ModalHeader toggle={toggleEdit} id="create-task">
                    <p>Edit Task</p>
                </ModalHeader>
                <ModalBody>
                    <div className="body-name">
                        <p id="body-task-name">Task Name</p>
                        <input type="text" placeholder="Example: Build rocket to mars" id="input-modal-task" onChange={(e)=>onEditTask(e.target.value)}/>
                    </div>
                    <div className="body-progress">
                        <p id="body-task-name">Progress</p>
                        <input type="number" placeholder="0%" id="input-modal-progress"onChange={(e)=>onEditProgress(e.target.value)} />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggleEdit}>Cancel</Button>
                    <Button color="primary" onClick={onSaveEdit}>Save Task</Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={modalTambah} toggle={toggle} id="modal-box">
                <ModalHeader toggle={toggle} id="create-task">
                    <p>Create Task</p>
                </ModalHeader>
                <ModalBody>
                    <div className="body-name">
                        <p id="body-task-name">Task Name</p>
                        <input type="text" placeholder="Example: Build rocket to mars" id="input-modal-task" onChange={(e)=>onTaskName(e.target.value)}/>
                    </div>
                    <div className="body-progress">
                        <p id="body-task-name">Progress</p>
                        <input type="number" placeholder="0%" id="input-modal-progress"onChange={(e)=>onProgress(e.target.value)} />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Cancel</Button>
                    <Button color="primary" onClick={onSave}>Save Task</Button>
                </ModalFooter>
            </Modal>


        {/* batas modals */}
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
                                    <Popup
                                        trigger={
                                        <ButtonSemantic>
                                            <BsThreeDots id="icon-2"/>
                                        </ButtonSemantic>
                                        
                                        }
                                        flowing hoverable>
                                            <Grid centered divided columns={1} className="grid-modal">
                                                <Grid.Row className="grid-row-mod">
                                                    <div className="row-mod-1">
                                                        <AiOutlineArrowRight className="icon-mod"/>
                                                    </div>
                                                    <div className="row-mod-2">
                                                        <p>Move Right</p>
                                                    </div>
                                                </Grid.Row>
                                                <Grid.Row className="grid-row-mod">
                                                <div className="row-mod-1">
                                                    <AiOutlineEdit className="icon-mod"/>
                                                </div>
                                                <div className="row-mod-2" onClick={()=>editTaskFunc(1)}>
                                                    <p>Edit</p>                                       
                                                </div>
                                                </Grid.Row>
                                                <Grid.Row className="grid-row-mod">
                                                <div className="row-mod-1">
                                                    <AiOutlineDelete className="icon-mod"/>
                                                </div>
                                                <div className="row-mod-2">
                                                    <p>Delete</p>
                                                </div>
                                                </Grid.Row>

                                            </Grid>
                                            </Popup>
                                    {/* <BsThreeDots id="icon-2"/> */}
                                </div>
                            </div>
                            
                            <div className="main-3" onClick={()=>createTask(1)}>
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