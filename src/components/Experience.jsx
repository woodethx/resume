import '../styles/experience.css'
import { useState } from 'react'

export default function Education({id, data, onExpChange}){
    const [editing, setEditing] = useState(false);

    const toggleEdit = () => {
        editing ? setEditing(false) : setEditing(true);
    }
   

    if(!editing){
        const actionList = data.actions.map((action) => {
      return (<li>{action}</li>)
    });
        return (
        <div className="ExpInfo">  
            <p>Company: {data.company}</p>
            <p>Location: {data.location}</p>
            <p>Position: {data.position}</p>
            <p>Duration: {data.duration}</p>
            <p>Company Description: {data.info}</p>
            <p>Actions: {actionList}</p>
            <button onClick={toggleEdit} >Edit</button>
        </div>
        )
    }
    if(editing){
        const actionList = data.actions.map((action) => {
      return (<><label>Action</label>
        <input type="text" 
        value={action}/>
        </>
      )
    });
        return(
        <div className="ExpInfoEdit">  
            <label htmlFor="company">Company</label>
            <input id="company" type="text" 
            value={data.company}
            onChange={(e) => onExpChange(id, {...data, company: e.target.value})}/>
            <label htmlFor="loc">Location</label>
            <input id="loc" type="text" 
            value={data.location}
            onChange={(e) => onExpChange(id, {...data, location: e.target.value})}/>
            <label htmlFor="position">Position</label>
            <input id="position" type="text"
            value={data.position}
            onChange={(e) => onExpChange(id, {...data, position: e.target.value})} />
            <label htmlFor="duration">Duration</label>
            <input id="duration" type="text" 
            value={data.duration}
            onChange={(e) => onExpChange(id, {...data, duration: e.target.value})}/>
            <label htmlFor="info">Company Description</label>
            <input id="info" type="textarea" 
            value={data.info}
            onChange={(e) => onExpChange(id, {...data, info: e.target.value})}/>
            <button onClick={toggleEdit} >Finish</button>
        </div>
    )
    }
    
}