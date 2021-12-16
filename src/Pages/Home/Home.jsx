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

    const [dataTask1,setDataTask1]=useState([])
    const [dataTask2,setDataTask2]=useState([])
    const [dataTask3,setDataTask3]=useState([])
    const [dataTask4,setDataTask4]=useState([])

    const [editNameTask,setEditNameTask]=useState('')
    const [editProgress,setEditProgress]=useState(0)
    const [indexEdit,setIndexEdit]=useState(0)
    const [indexDelete,setIndexDelete]=useState(0)


    const fetchData=()=>{
        Axios.get(`${API_URL}/all`)
        .then((res)=>{
            // console.log(res.data)
            setAllData(res.data)
        // }).catch((err)=>{
        //     console.log(err)
        })

        Axios.get(`${API_URL}/task_1`)
        .then((res)=>{
            console.log(res.data, 'task 1')
            console.log(res.data === null)
            setDataTask1(res.data)
            // console.log(res.data == [])
        }).catch((err)=>{
            console.log(err)
        })
        Axios.get(`${API_URL}/task_2`)
        .then((res)=>{
            console.log(res.data === [])
            console.log(res.data)
            setDataTask2(res.data)
        }).catch((err)=>{
            console.log(err)
        })
        Axios.get(`${API_URL}/task_3`)
        .then((res)=>{
            console.log(res.data)
            setDataTask3(res.data)
        }).catch((err)=>{
            console.log(err)
        })
        Axios.get(`${API_URL}/task_4`)
        .then((res)=>{
            console.log(res.data)
            setDataTask4(res.data)
        }).catch((err)=>{
            console.log(err)
        })

        // setLoadingFetch(false)
        
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
        const obj = {
            "group_task":indexTask,
            "taskName":nameTask,
            "progress":progressNum
        }

        if(indexTask === 1){
            Axios.post(`${API_URL}/task_1`,obj)
            .then((res)=>{
                Axios.get(`${API_URL}/task_1`)
                .then((res)=>{
                    setDataTask1(res.data)
                }).catch((err)=>{
                    console.log(err)
                })
                console.log(res.data)
            }).catch((err)=>{
                console.log(err)
            })
        }else if (indexTask === 2){
            Axios.post(`${API_URL}/task_2`,obj)
            .then((res)=>{
                Axios.get(`${API_URL}/task_2`)
                .then((res)=>{
                    setDataTask2(res.data)
                }).catch((err)=>{
                    console.log(err)
                })
                console.log(res.data)
            }).catch((err)=>{
                console.log(err)
            })
        }else if (indexTask === 3){
            Axios.post(`${API_URL}/task_3`,obj)
            .then((res)=>{
                Axios.get(`${API_URL}/task_3`)
                .then((res)=>{
                    setDataTask3(res.data)
                }).catch((err)=>{
                    console.log(err)
                })
                console.log(res.data)
            }).catch((err)=>{
                console.log(err)
            })
        }else {
            Axios.post(`${API_URL}/task_4`,obj)
            .then((res)=>{
                Axios.get(`${API_URL}/task_4`)
                .then((res)=>{
                    setDataTask4(res.data)
                }).catch((err)=>{
                    console.log(err)
                })
                console.log(res.data)
            }).catch((err)=>{
                console.log(err)
            })
        }


    } 
    const onSaveEdit=()=>{
        console.log('active')
        const data ={
            taskName:editNameTask,
            progress:editProgress
        }

        if(indexTask === 1){
            Axios.patch(`${API_URL}/task_1/${indexEdit}`,data)
            .then((res)=>{
                Axios.get(`${API_URL}/task_1`)
                .then((res)=>{
                    setDataTask1(res.data)
                }).catch((err)=>{
                    console.log(err)
                })
            }).catch((err)=>{
                console.log(err)
            })
        }else if (indexTask === 2){
            Axios.patch(`${API_URL}/task_2/${indexEdit}`,{
                "taskName":editNameTask,
                "progress":editProgress
            })
            .then((res)=>{
                Axios.get(`${API_URL}/task_2`)
                .then((res)=>{
                    setDataTask2(res.data)
                }).catch((err)=>{
                    console.log(err)
                })
            }).catch((err)=>{
                console.log(err)
            })
            
        }else if (indexTask === 3){
            Axios.patch(`${API_URL}/task_3/${indexEdit}`,{
                "taskName":editNameTask,
                "progress":editProgress
            })
            .then((res)=>{
                Axios.get(`${API_URL}/task_3`)
                .then((res)=>{
                    setDataTask3(res.data)
                }).catch((err)=>{
                    console.log(err)
                })
            }).catch((err)=>{
                console.log(err)
            })

        }else {
            Axios.patch(`${API_URL}/task_4/${indexEdit}`,{
                "taskName":editNameTask,
                "progress":editProgress
            })
            .then((res)=>{
                Axios.get(`${API_URL}/task_4`)
                .then((res)=>{
                    setDataTask4(res.data)
                }).catch((err)=>{
                    console.log(err)
                })
            }).catch((err)=>{
                console.log(err)
            })
        }
        setEditTask(false)
    }

    const createTask=(id)=>{
        console.log(id,' ini id 158')
        setModalTambah(true)
        setIndexTask(id)
    }
    const editTaskFunc=(id,index)=>{
        console.log(id)
        console.log(index)
        setIndexEdit(index)
        setIndexTask(id)
        setEditTask(true)
    }
    const deleteTaskFunc=(id,index)=>{
        console.log(id)
        setIndexDelete(index)
        setIndexTask(id)
        setDeleteTask(true)
    }

    const onDeleteEdit=()=>{
        console.log('delete berhasil')
        console.log(indexTask, ' ini index task')
   

        if(indexTask === 1 ){
            Axios.delete(`${API_URL}/task_1/${indexDelete}`)
            .then((res)=>{
                console.log(res.data)
                Axios.get(`${API_URL}/task_1`)
                .then((res)=>{
                    setDataTask1(res.data)
                }).catch((err)=>{
                    console.log(err)
                })
                // setDataTask1(res.data)
            })
        }else if (indexTask === 2){
            Axios.delete(`${API_URL}/task_2/${indexDelete}`)
            .then((res)=>{
                console.log(res.data)
                Axios.get(`${API_URL}/task_2`)
                .then((res)=>{
                    setDataTask2(res.data)
                }).catch((err)=>{
                    console.log(err)
                })
                // setDataTask1(res.data)
            })

        }else if (indexTask === 3){
            Axios.delete(`${API_URL}/task_3/${indexDelete}`)
            .then((res)=>{
                console.log(res.data)
                Axios.get(`${API_URL}/task_3`)
                .then((res)=>{
                    setDataTask3(res.data)
                }).catch((err)=>{
                    console.log(err)
                })
                // setDataTask1(res.data)
            })
        }else {
            Axios.delete(`${API_URL}/task_4/${indexDelete}`)
            .then((res)=>{
                console.log(res.data)
                Axios.get(`${API_URL}/task_4`)
                .then((res)=>{
                    setDataTask4(res.data)
                }).catch((err)=>{
                    console.log(err)
                })
                // setDataTask1(res.data)
            })
        }
        setDeleteTask(false)

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
        setEditNameTask(taskName)
    }
    const onEditProgress=(progress)=>{
        console.log(progress)
        setEditProgress(progress)
    }

    
    const toggle=()=>setModalTambah(false)
    const toggleEdit=()=>setEditTask(false)
    const toggleDelete=()=>setDeleteTask(false)

    const moveRight=(id,index)=>{
        console.log(id)
        console.log(index, ' ini index')
        if(id === 1){
            Axios.get(`${API_URL}/task_1?id=${index}`)
            .then((res)=>{
                console.log(res.data[0])
                const obj = {
                    "group_task":res.data[0].group_task,
                    "taskName":res.data[0].taskName,
                    "progress":res.data[0].progress
                }

                Axios.post(`${API_URL}/task_2`, obj)
                .then((res)=>{
                    Axios.get(`${API_URL}/task_2`)
                    .then((res)=>{
                        setDataTask2(res.data)
                    }).catch((err)=>{
                        console.log(err)
                    })
                })
            }).catch((err)=>{
                console.log(err)
            })
            Axios.delete(`${API_URL}/task_1/${index}`)
            .then((res)=>{
                console.log(res.data)
                Axios.get(`${API_URL}/task_1`)
                .then((res)=>{
                    setDataTask1(res.data)
                }).catch((err)=>{
                    console.log(err)
                })
                // setDataTask1(res.data)
            })
        }else if (id === 2){
            Axios.get(`${API_URL}/task_2?id=${index}`)
            .then((res)=>{
                console.log(res.data[0])
                const obj = {
                    "group_task":res.data[0].group_task,
                    "taskName":res.data[0].taskName,
                    "progress":res.data[0].progress
                }

                Axios.post(`${API_URL}/task_3`, obj)
                .then((res)=>{
                    Axios.get(`${API_URL}/task_3`)
                    .then((res)=>{
                        setDataTask3(res.data)
                    }).catch((err)=>{
                        console.log(err)
                    })
                })
            }).catch((err)=>{
                console.log(err)
            })
            Axios.delete(`${API_URL}/task_2/${index}`)
            .then((res)=>{
                console.log(res.data)
                Axios.get(`${API_URL}/task_2`)
                .then((res)=>{
                    setDataTask2(res.data)
                }).catch((err)=>{
                    console.log(err)
                })
                // setDataTask1(res.data)
            })

        }else if (id === 3){
            Axios.get(`${API_URL}/task_3?id=${index}`)
            .then((res)=>{
                console.log(res.data[0])
                const obj = {
                    "group_task":res.data[0].group_task,
                    "taskName":res.data[0].taskName,
                    "progress":res.data[0].progress
                }

                Axios.post(`${API_URL}/task_4`, obj)
                .then((res)=>{
                    Axios.get(`${API_URL}/task_4`)
                    .then((res)=>{
                        setDataTask4(res.data)
                    }).catch((err)=>{
                        console.log(err)
                    })
                })
            }).catch((err)=>{
                console.log(err)
            })
            Axios.delete(`${API_URL}/task_3/${index}`)
            .then((res)=>{
                console.log(res.data)
                Axios.get(`${API_URL}/task_3`)
                .then((res)=>{
                    setDataTask3(res.data)
                }).catch((err)=>{
                    console.log(err)
                })
                // setDataTask1(res.data)
            })
        }
    }


    const moveLeft=(id,index)=>{
        if(id === 2){
            Axios.get(`${API_URL}/task_2?id=${index}`)
            .then((res)=>{
                console.log(res.data[0])
                const obj = {
                    "group_task":res.data[0].group_task,
                    "taskName":res.data[0].taskName,
                    "progress":res.data[0].progress
                }

                Axios.post(`${API_URL}/task_1`, obj)
                .then((res)=>{
                    Axios.get(`${API_URL}/task_1`)
                    .then((res)=>{
                        setDataTask1(res.data)
                    }).catch((err)=>{
                        console.log(err)
                    })
                })
            }).catch((err)=>{
                console.log(err)
            })
            Axios.delete(`${API_URL}/task_2/${index}`)
            .then((res)=>{
                console.log(res.data)
                Axios.get(`${API_URL}/task_2`)
                .then((res)=>{
                    setDataTask2(res.data)
                }).catch((err)=>{
                    console.log(err)
                })
                // setDataTask1(res.data)
            })
        }else if (id === 3){
            Axios.get(`${API_URL}/task_3?id=${index}`)
            .then((res)=>{
                console.log(res.data[0])
                const obj = {
                    "group_task":res.data[0].group_task,
                    "taskName":res.data[0].taskName,
                    "progress":res.data[0].progress
                }

                Axios.post(`${API_URL}/task_2`, obj)
                .then((res)=>{
                    Axios.get(`${API_URL}/task_2`)
                    .then((res)=>{
                        setDataTask2(res.data)
                    }).catch((err)=>{
                        console.log(err)
                    })
                })
            }).catch((err)=>{
                console.log(err)
            })
            Axios.delete(`${API_URL}/task_3/${index}`)
            .then((res)=>{
                console.log(res.data)
                Axios.get(`${API_URL}/task_3`)
                .then((res)=>{
                    setDataTask3(res.data)
                }).catch((err)=>{
                    console.log(err)
                })
                // setDataTask1(res.data)
            })

        }else if (id === 4){
            Axios.get(`${API_URL}/task_4?id=${index}`)
            .then((res)=>{
                console.log(res.data[0])
                const obj = {
                    "group_task":res.data[0].group_task,
                    "taskName":res.data[0].taskName,
                    "progress":res.data[0].progress
                }

                Axios.post(`${API_URL}/task_3`, obj)
                .then((res)=>{
                    Axios.get(`${API_URL}/task_3`)
                    .then((res)=>{
                        setDataTask3(res.data)
                    }).catch((err)=>{
                        console.log(err)
                    })
                })
            }).catch((err)=>{
                console.log(err)
            })
            Axios.delete(`${API_URL}/task_4/${index}`)
            .then((res)=>{
                console.log(res.data)
                Axios.get(`${API_URL}/task_4`)
                .then((res)=>{
                    setDataTask4(res.data)
                }).catch((err)=>{
                    console.log(err)
                })
                // setDataTask1(res.data)
            })
        }
    }

    const renderItem=()=>{
        const dataRender = dataTask1

        return dataRender.map((val,index)=>{
                return (
                <div className="main-task" key={index}>
                <p id="name-item">{val.taskName}</p>
                <div className="task-option">
                    <div className="option-left">
                        <div className="prog-bar">

                        {
                                val.progress === '100'?
                                <>
                                <ProgressBar now={val.progress}  variant="success" />
                                <AiFillCheckCircle id="icon"/>
                                </>
                                :
                                <>

                                <ProgressBar now={val.progress}  />
                                <p>{val.progress}%</p>
                                </>
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
                            <Grid.Row className="grid-row-mod"onClick={()=>moveRight(1,val.id)} >
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
                            <div className="row-mod-2" onClick={()=>editTaskFunc(1,val.id)}>
                                <p>Edit</p>                                       
                            </div>
                            </Grid.Row>
                            <Grid.Row className="grid-row-mod">
                            <div className="row-mod-1">
                                <AiOutlineDelete className="icon-mod"/>
                            </div>
                            <div className="row-mod-2" onClick={()=>deleteTaskFunc(1,val.id)}>
                                <p>Delete</p>
                            </div>
                            </Grid.Row>
                        </Grid>
                        </Popup>        
                </div>
            </div>
            )
           
        })

    }

    const renderItem2=()=>{
        const dataRender = dataTask2
        return dataRender.map((val,index)=>{
            console.log(val.group_task === 3) 
                return (
                <div className="main-task">
                <p id="name-item">{val.taskName}</p>
                <div className="task-option">
                    <div className="option-left">
                        <div className="prog-bar">

                        {
                                val.progress === '100'?
                                <>
                                <ProgressBar now={val.progress}  variant="success" />
                                <AiFillCheckCircle id="icon"/>
                                </>
                                :
                                <>

                                <ProgressBar now={val.progress}  />
                                <p>{val.progress}%</p>
                                </>
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
                            <Grid.Row className="grid-row-mod" onClick={()=>moveLeft(2,val.id)}>
                                <div className="row-mod-1">
                                    <AiOutlineArrowLeft className="icon-mod"/>
                                </div>
                                <div className="row-mod-2">
                                    <p>Move LEFT LEFT</p>
                                </div>
                            </Grid.Row>
                            <Grid.Row className="grid-row-mod" onClick={()=>moveRight(2,val.id)}>
                                <div className="row-mod-1">
                                    <AiOutlineArrowRight className="icon-mod"  />
                                </div>
                                <div className="row-mod-2">
                                    <p>Move Right</p>
                                </div>
                            </Grid.Row>
                            <Grid.Row className="grid-row-mod">
                            <div className="row-mod-1">
                                <AiOutlineEdit className="icon-mod"/>
                            </div>
                            <div className="row-mod-2" onClick={()=>editTaskFunc(2,val.id)}>
                                <p>Edit</p>                                       
                            </div>
                            </Grid.Row>
                            <Grid.Row className="grid-row-mod">
                            <div className="row-mod-1">
                                <AiOutlineDelete className="icon-mod"/>
                            </div>
                            <div className="row-mod-2" onClick={()=>deleteTaskFunc(2,val.id)}>
                                <p>Delete</p>
                            </div>
                            </Grid.Row>
                        </Grid>
                        </Popup>        
                </div>
            </div>
            )
            
      })
    }

    const renderItem3=()=>{
        const dataRender = dataTask3
        return dataRender.map((val,index)=>{
            console.log(val)    
                return (
                <div className="main-task">
                <p id="name-item">{val.taskName}</p>
                <div className="task-option">
                    <div className="option-left">
                        <div className="prog-bar">
                        {
                                val.progress === '100'?
                                <>
                                <ProgressBar now={val.progress}  variant="success" />
                                <AiFillCheckCircle id="icon"/>
                                </>
                                :
                                <>

                                <ProgressBar now={val.progress}  />
                                <p>{val.progress}%</p>
                                </>
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
                        <Grid.Row className="grid-row-mod" onClick={()=>moveLeft(3,val.id)}>
                                <div className="row-mod-1">
                                    <AiOutlineArrowLeft className="icon-mod"/>
                                </div>
                                <div className="row-mod-2">
                                    <p>Move Left</p>
                                </div>
                            </Grid.Row>
                            <Grid.Row className="grid-row-mod" onClick={()=>moveRight(3,val.id)}>
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
                            <div className="row-mod-2" onClick={()=>editTaskFunc(3,val.id)}>
                                <p>Edit</p>                                       
                            </div>
                            </Grid.Row>
                            <Grid.Row className="grid-row-mod">
                            <div className="row-mod-1">
                                <AiOutlineDelete className="icon-mod"/>
                            </div>
                            <div className="row-mod-2" onClick={()=>deleteTaskFunc(3,val.id)}>
                                <p>Delete</p>
                            </div>
                            </Grid.Row>
                        </Grid>
                        </Popup>        
                </div>
            </div>
            )  
      })
    }

    const renderItem4=()=>{
        const dataRender = dataTask4
        return dataRender.map((val,index)=>{
            console.log(val.group_task === 3) 
                return (
                <div className="main-task">
                <p id="name-item">{val.taskName}</p>
                <div className="task-option">
                    <div className="option-left">
                        <div className="prog-bar">

                            {
                                val.progress === '100'?
                                <>
                                <ProgressBar now={val.progress}  variant="success" />
                                <AiFillCheckCircle id="icon"/>
                                </>
                                :
                                <>

                                <ProgressBar now={val.progress}  />
                                <p>{val.progress}%</p>
                                </>
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
                            <Grid.Row className="grid-row-mod" onClick={()=>moveLeft(4,val.id)}>
                                <div className="row-mod-1">
                                    <AiOutlineArrowLeft className="icon-mod"/>
                                </div>
                                <div className="row-mod-2">
                                    <p>Move Left</p>
                                </div>
                            </Grid.Row>
                            <Grid.Row className="grid-row-mod">
                            <div className="row-mod-1">
                                <AiOutlineEdit className="icon-mod"/>
                            </div>
                            <div className="row-mod-2" onClick={()=>editTaskFunc(4,val.id)}>
                                <p>Edit</p>                                       
                            </div>
                            </Grid.Row>
                            <Grid.Row className="grid-row-mod">
                            <div className="row-mod-1">
                                <AiOutlineDelete className="icon-mod"/>
                            </div>
                            <div className="row-mod-2" onClick={()=>deleteTaskFunc(4,val.id)}>
                                <p>Delete</p>
                            </div>
                            </Grid.Row>
                        </Grid>
                        </Popup>        
                </div>
            </div>
            )
            
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
                                {
                                    dataTask1.length ?
                                    renderItem()
                                    :
                                    <input type="text" placeholder=" No Task Available" id="input-task" disabled />
                                }
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
                                
                                {
                                    dataTask2.length ?
                                    renderItem2()
                                    :
                                    <input type="text" placeholder=" No Task Available" id="input-task" disabled />
                                }
                              
                                

                            <div className="main-3" onClick={()=>createTask(2)}>
                                <GrAddCircle id="icon-2"/>
                                <p id="new-task">New Task</p>
                            </div>
                        </div>  

                        <div className="task-3">
                            <div className="task-name">
                                <p id="name-1">Group Task 3</p>
                            </div>
                                <p id="name-2">JULY - SEPTEMBER</p>

                                {
                                    dataTask3.length ?
                                    renderItem3()
                                    :
                                    <input type="text" placeholder=" No Task Available" id="input-task" disabled />
                                }
                             
                            <div className="main-3" onClick={()=>createTask(3)}>
                                <GrAddCircle id="icon-2"/>
                                <p id="new-task">New Task</p>
                            </div>
                        </div>  

                        <div className="task-4">
                            <div className="task-name">
                                <p id="name-1">Group Task 4</p>
                            </div>
                                <p id="name-2">OCTOBER - DECEMBER</p>
                                {
                                    dataTask4.length ?
                                    renderItem4()
                                    :
                                    <input type="text" placeholder=" No Task Available" id="input-task" disabled />
                                }
                            
                            <div className="main-3" onClick={()=>createTask(4)}>
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