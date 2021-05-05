import React, { useState,useEffect } from 'react';
import './home.css'
import logo  from './../../Assets/gorillalogo.png'
import {AiFillCheckCircle,AiOutlineArrowRight,AiOutlineEdit,AiOutlineDelete,AiOutlineArrowLeft} from 'react-icons/ai'
import {BsThreeDots} from 'react-icons/bs'
import {GrAddCircle} from 'react-icons/gr'
import {RiErrorWarningLine} from 'react-icons/ri'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Axios from 'axios'
import { Button as ButtonSemantic, Popup,Grid } from 'semantic-ui-react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { API_URL } from '../../Helpers/apiUrl';
export default function Home(){

    const [modalTambah,setModalTambah]=useState(false)
    const [editTask,setEditTask]=useState(false)
    const [deleteTask,setDeleteTask]=useState(false)


    const [indexTask,setIndexTask]=useState(0)
    const [nameTask,setNameTask]=useState('')
    const [progressNum,setProgressNum]=useState(0)

    const [progressBar,setProgressBar]=useState(90)

    const [loadingFetch,setLoadingFetch]=useState(true)

    const [allData,setAllData]=useState([])



    const fetchData=()=>{
        Axios.get(`${API_URL}/all`)
        .then((res)=>{
            console.log(res.data)
            
            setAllData(res.data)
        }).catch((err)=>{
            console.log(err)
        })
        setLoadingFetch(false)
    }
    useEffect(()=>{
        fetchData()
    },[])



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
    const deleteTaskFunc=(id)=>{
        console.log(id)
        setDeleteTask(true)
    }

    const onDeleteEdit=()=>{
        console.log('delete berhasil')
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
    const toggleDelete=()=>setDeleteTask(false)



    const renderItem=()=>{
        const dataRender = allData

        return dataRender.map((val,index)=>{
            console.log(val.group_task === 1) 
            if(val.group_task === 1){
                return (
                <div className="main-task">
                <p id="name-item">{val.taskName}</p>
                <div className="task-option">
                    <div className="option-left">
                        <div className="prog-bar">

                            <ProgressBar now={val.progress} />
                            {
                                val.progress === 100?
                                <AiFillCheckCircle id="icon"/>
                                :
                                <p>{val.progress}%</p>
                            }
                        </div>
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
                            <div className="row-mod-2" onClick={()=>editTaskFunc(index)}>
                                <p>Edit</p>                                       
                            </div>
                            </Grid.Row>
                            <Grid.Row className="grid-row-mod">
                            <div className="row-mod-1">
                                <AiOutlineDelete className="icon-mod"/>
                            </div>
                            <div className="row-mod-2" onClick={()=>deleteTaskFunc(index)}>
                                <p>Delete</p>
                            </div>
                            </Grid.Row>

                        </Grid>
                        </Popup>        
                </div>
            </div>
            )
            }
        })

    }

    if(loadingFetch){
        <p>LOADING</p>
    }

    return (
        <>

        <Modal isOpen={deleteTask} toggle={toggleDelete} id="modal-box-delete">
            <ModalHeader toggle={toggleDelete} id="delete-task">
                <RiErrorWarningLine id="icon-warning"/>
                <p>Delete Task</p>
            </ModalHeader>
            <ModalBody id="delete-body">
               <p>Are you sure want to delete this task?
                    your action can’t be reverted.</p>
            </ModalBody>
            <ModalFooter id="footer-delete">
                <Button color="primary" onClick={toggleDelete}>Cancel</Button>
                <Button color="primary" onClick={onDeleteEdit}>delete Task</Button>
            </ModalFooter>
         </Modal>

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
                        <input type="number" placeholder="0%" id="input-modal-progress"onChange={(e)=>onEditProgress(e.target.value)} max={100} maxLength={3}/>
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
                                
                                {renderItem()}
                            {/* <div className="main-task">
                                <p id="name-item">Re Designed Your life! no More Pills</p>
                                <div className="task-option">
                                    <div className="option-left">
                                        <div className="prog-bar">

                                            <ProgressBar now={progressBar} />
                                            {
                                                progressBar === 100?
                                                <AiFillCheckCircle id="icon"/>
                                                :
                                                <p>{progressBar}%</p>
                                            }
                                        </div>
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
                                                <div className="row-mod-2" onClick={()=>deleteTaskFunc(1)}>
                                                    <p>Delete</p>
                                                </div>
                                                </Grid.Row>

                                            </Grid>
                                            </Popup>
                                    
                                </div>
                            </div> */}
                            
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
                                <input type="text" placeholder=" No Task Available" id="input-task"  />
                            
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

       
                        {renderItem()}
                    </div>
                </div>

            </div>

        </>
    )
}