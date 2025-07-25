import '../styles/basicInfo.css'
import { useState } from 'react'

export default function BasicInfo({data, onBasicChange}){
    const [editing, setEditing] = useState(false);

    const toggleEdit = () => {
        editing ? setEditing(false) : setEditing(true);
    }
   

    if(!editing){
        return (
        <div className="BasicInfo">  
            <p>Name: {data.name}</p>
            <p>Location: {data.location}</p>
            <p>Phone: {data.phone}</p>
            <p>Email: {data.email}</p>
            <button onClick={toggleEdit} >Edit</button>
        </div>
        )
    }
    if(editing){
        return(
        <div className="BasicInfoEdit">  
            <label htmlFor="name">Name</label>
            <input id="name" type="text" 
            value={data.name}
            onChange={(e) => onBasicChange({...data, name: e.target.value})}/>
            <label htmlFor="loc">Location</label>
            <input id="loc" type="text" 
            value={data.location}
            onChange={(e) => onBasicChange({...data, location: e.target.value})}/>
            <label htmlFor="phone">Phone</label>
            <input id="phone" type="text"
            value={data.phone}
            onChange={(e) => onBasicChange({...data, phone: e.target.value})} />
            <label htmlFor="email">Email</label>
            <input id="email" type="text" 
            value={data.email}
            onChange={(e) => onBasicChange({...data, email: e.target.value})}/>
            <button onClick={toggleEdit} >Finish</button>
        </div>
    )
    }
    
}