import { useState } from 'react'
import './App.css'
import BasicInfo from './components/basicInfo';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
  const [count, setCount] = useState(0);
  const [basic, setBasic] = useState({
    name: "", 
    location: "", 
    phone: "", 
    email: ""});
  const [edu, setEdu] = useState([]);
    const [exp, setExp] = useState([])
  
  function handleBasic(updated){
    setBasic(updated);
  }
  function handleEdu(idU, updated){
    const newList = edu.map(item => {
          return item.id === idU ? updated : item
        })
    setEdu(newList);
  }
  function handleExp(idU, updated){
    const newList = exp.map(item => {
          return item.id === idU ? updated : item
        })
    setExp(newList);
  }
  function removeEdu(idR){
    const newList = edu.filter((item) => item.id != idR);
    console.log(newList);
    setEdu(newList);
  }
  function removeExp(idR){
    const newList = exp.filter((item) => item.id != idR);
    console.log(newList);
    setExp(newList);
  }
  function addEdu(){
    const newArr = [...edu, {
              key: crypto.randomUUID(),
              id: crypto.randomUUID(), 
              school: "", 
              location: "", 
              major: "", 
              grad: "", 
              gpa: ""}]
    setEdu(newArr);
  }
  function addExp(){
    const newArr = [...exp, {id: crypto.randomUUID(), 
    company: "", 
    location: "", 
    position: "", 
    duration: "", 
    info: "",
    actions: [{id: crypto.randomUUID(), value: ""}
    ]}]
    setExp(newArr);
  }
    
  
  const allEdu = edu.map((d) => {
    return (<Education key={d.id} id={d.id} data={d} onEduChange={handleEdu} rmvEdu={removeEdu}/>);
  });
  const allExp = exp.map((d) => {
    return (<Experience key={d.id} id={d.id} data={d} onExpChange={handleExp} rmvExp={removeExp}/>);
  });

  const dispExp = exp.map((d) => {
    const actionList = d.actions.map((action) => {
      return (<li>{action.value}</li>)
    });
    return(
      <div className="expBlock">
        <div className="expTop">
        <b>{d.company}</b>
        <p style={{marginLeft: "auto"}}>{d.location}</p>
        <i>{d.position}</i>
        <p style={{marginLeft: "auto"}}>{d.duration}</p>
        </div>
        <p>{d.info}</p>
        {actionList}
      </div>
    )
  });

  const dispEdu = edu.map((d) => {
    return (<div className="eduBlock">
    <b>{d.school}</b>
    <p style={{marginLeft: "auto"}}>{d.location}</p>
    <i>{d.major}</i>
    <p style={{marginLeft: "auto"}}>{d.grad}</p>
    <p>{d.gpa}</p>
    </div>
    );
  });

  return (
    <>
      <aside>
        <h2>Basic Information: </h2>
        <BasicInfo data={basic} onBasicChange={handleBasic}/>
        <h2>Education: </h2>
        {allEdu}
        <button onClick={addEdu}>+ Add Education</button>
        <h2>Experience: </h2>
        {allExp}
        <button onClick={addExp}>+ Add Experience</button>
      </aside>
      <main>
        <div className="page">
          <div className="top">
          <h1>{basic.name}</h1>
          <p>{basic.location}    |    {basic.phone}    |    {basic.email}</p>
          </div>
          <h2>Education</h2>
          <hr></hr>
          {dispEdu}
          <h2>Experience</h2>
          <hr></hr>
          {dispExp}
        </div>
      </main>
    </>
  )
}

export default App
