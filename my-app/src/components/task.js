import { useEffect, useState } from 'react'
import './cssFile/task.css'








function Task(){

const [tasks , setTasks] = useState([])
// const [date , setDate ] = useState('')
const [show,setshow] = useState('hide')


// useEffect(()=>{
//         fetch('http://localhost:3000/task/2024-01-07')
//         .then(res => res.json())
//         .then(data=>{
//             setTasks(data)
//             console.log(data)
//         })
//         .catch(err => console.log(err))
//     })


useEffect(()=>{
    document.getElementById('plus-task').addEventListener('click',()=>{
        if(show ==='hide'){
            document.querySelectorAll('.task').forEach(element => {
                element.style.display='none'
            });
            document.getElementById('container-add-task').style.display='flex'
            setshow('show')
        }else if(show === 'show'){
            document.querySelectorAll('.task').forEach(element => {
                element.style.display='flex'
            });
            document.getElementById('container-add-task').style.display='none'
            setshow('hide')
        }
    })
})

  


    return(
        <div className='container-tasks'>
            <div className='nav-task'>
                <h1 className='title-task'>Task</h1>
                <button className='plus-task' id='plus-task'>+</button>
            </div>
            <div className='tasks'>
                
               {tasks.map((item, index)=>(
                 <div className='task' id='task'>
                 <button className='selectTask'>
                         <svg className='svg1' xmlns="http://www.w3.org/2000/svg" width="19" height="15" viewBox="0 0 19 15" fill="none">
                  <g clip-path="url(#clip0_22_226)">
                      <path d="M15.4292 3.14375L16.5218 4.01875L6.57905 11.9812L2.20863 8.48125L3.30123 7.60625L6.57905 10.2313L15.4292 3.14375ZM15.4292 1.375L6.57905 8.4625L3.30123 5.8375L0 8.48125L6.57905 13.75L18.7304 4.01875L15.4292 1.375Z" fill="white"/>
                  </g>
                  <defs>
                      <clipPath id="clip0_22_226">
                      <rect width="18.7304" height="15" fill="white"/>
                      </clipPath>
                  </defs>
                          </svg>
                 </button>
            
                 <div className='div-txt-task'>
                 <label className='txt-task'>{item.title}</label>
                 <label className='date-task'>{item.timeStart}pm - {item.timeEnd}pm</label>
                 </div>
                  
              </div>
               ))}


            <form class='container-add-task' id='container-add-task' action='localhost:3000/addTask' method='POST' >
                <input className='input-title' type='text' name='title' placeholder='Title'></input>
                <textarea name='desc' placeholder='Add description of task'></textarea>
                <div>
                <label className=''>date start:</label>
                <input className='input-time' type='time' name='timeStart'></input>
                <label className=''>date start:</label>
                <input className='input-time' type='time' name='timeEnd'></input>
                </div>
                <input  type='text' value='true' name='condition' style={{'display':'none'}}></input><br></br>
                <input className='btn-submit' type='submit' value={'Add task'}></input>
            </form>
            </div>
        </div>
    )
}

export default Task