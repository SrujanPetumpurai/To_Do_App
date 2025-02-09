import './Profile.scss'
export default function Profile({img,name}:{img:string,name:string}){
    return(
        <div className="profile">
            <img src={img} alt="" />
            <span>{name}</span>
        </div>
    )
}