import './Task.scss';
export default function Task({taskName,taskDescription,deletefn,idx,complete,completed}:{taskName:string,taskDescription:string,deletefn:Function,idx:number,complete:Function,completed:boolean}){
    return <div className='singleTask'>
        <div onClick={()=>{complete(idx)}} className="selectBtn">

        </div>
        <div className={`${completed?'overTask':'taskBox'}`}>
            <span>{taskName}</span>
            <span>{taskDescription}</span>
        </div>
        <div className="deleteBtn">
            <img onClick={()=>deletefn(idx)} src="/trash.png" alt="" />
        </div>
    </div>
}