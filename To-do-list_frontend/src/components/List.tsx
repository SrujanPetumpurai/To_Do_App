import './List.scss'
import { useState } from "react"
import Task from './Task';
import Profile from './Profile'
export default function List(){
    type Task ={
        task_name:string,
        task_description:string,
        completed:boolean
    }
    let [filter,setFilter]=useState<'all'|'completed'|'Uncompleted'>('all')
    let [task_name,setTask_name] = useState('');
    let [task_description,setTask_description]= useState('');
    let [tasks,setTasks]=useState<Task[]>([]);

    let changeTaskName =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setTask_name(e.target.value)
    };
    let filterArray = tasks.filter((task)=>{
        return filter=='all'?true:filter=='completed'?task.completed:!task.completed;
    })
    let completionStatus=(idx:number)=>{
        setTasks((prevtasks)=>{
                return prevtasks.map((taskItem,index)=>index==idx?{...taskItem,completed:!taskItem.completed}:taskItem)
        })
    }

    let changeTaskDescription = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setTask_description(e.target.value)
    };

    let addTask = ()=>{
        setTasks([...tasks,{task_name,task_description,completed:false}]);
        setTask_name('');
        setTask_description('');
    };
    let deleteTask=(idx:number)=>{
        setTasks((items)=>{
           return items.filter((_,i)=>i!==idx);
        })
    };
    return <div id="TO-DO-LIST">
        <div className="side-bar">
            <div className='profilePhoto'>
                {/* <img id='id1' src="/decoration/flags.png" alt="" />
                <img id='id2' src="/decoration/light.png" alt="" />
                <img id='id3' src="/decoration/modern.png" alt="" /> */}
               <Profile img='/profilePic.jpg' name='Srujan'></Profile>
            </div>
            <div className="taskOptions">
                <ul>
                    <li onClick={()=>setFilter('all')}>All</li>
                    <li onClick={()=>setFilter('completed')}>Completed</li>
                    <li onClick={()=>setFilter('Uncompleted')}>UnCompleted</li>
                </ul>
            </div>
        </div>
        <div className="tasks">
            <h1>Just Do It!</h1>
            <div className="main-box">
             <div className="input-box">
                <input type="text" placeholder='Task' value={task_name} onChange={changeTaskName} />
                <input type="text" placeholder='description'   value={task_description} onChange={changeTaskDescription} />
             </div>
             <button onClick={addTask}>Enter</button>
            </div>
            <div className="show-tasks">
                {filterArray.map((x,idx)=>{
                    return <div>
                        <Task completed={x.completed} deletefn={deleteTask} complete={completionStatus} idx={idx} taskName={x.task_name} taskDescription={x.task_description}></Task>
                    </div>
                })}
            </div>
        </div>
    </div>
}