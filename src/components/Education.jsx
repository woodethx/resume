import '../styles/education.css'
import { useState } from 'react'

export default function Education({id, data, onEduChange, rmvEdu}){
    const [editing, setEditing] = useState(true);

    const toggleEdit = () => {
        editing ? setEditing(false) : setEditing(true);
    }

    const handleRmv = () => {
        rmvEdu(id);
    }
   

    if(!editing){
        return (
        <div className="EduInfo">  
            <p>School: {data.school}</p>
            <p>Location: {data.location}</p>
            <p>Major: {data.major}</p>
            <p>Graduation Date: {data.grad}</p>
            <p>GPA: {data.gpa}</p>
            <button onClick={toggleEdit} >Edit</button>
            <button onClick={handleRmv} >Remove</button>
        </div>
        )
    }
    if(editing){
        return(
        <div className="EduInfoEdit">  
            <label htmlFor="school">School</label>
            <input id="school" type="text" 
            value={data.school}
            onChange={(e) => onEduChange(id, {...data, school: e.target.value})}/>
            <label htmlFor="loc">Location</label>
            <input id="loc" type="text" 
            value={data.location}
            onChange={(e) => onEduChange(id, {...data, location: e.target.value})}/>
            <label htmlFor="major">Major</label>
            <input id="major" type="text"
            value={data.major}
            onChange={(e) => onEduChange(id, {...data, major: e.target.value})} />
            <label htmlFor="grad">Graduation Date</label>
            <input id="grad" type="text" 
            value={data.grad}
            onChange={(e) => onEduChange(id, {...data, grad: e.target.value})}/>
            <label htmlFor="gpa">GPA</label>
            <input id="gpa" type="text" 
            value={data.gpa}
            onChange={(e) => onEduChange(id, {...data, gpa: e.target.value})}/>
            <button onClick={toggleEdit} >Finish</button>
        </div>
    )
    }
    
}