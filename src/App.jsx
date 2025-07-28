import { useState } from 'react'
import './App.css'
import BasicInfo from './components/basicInfo';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
  const [count, setCount] = useState(0);
  const [basic, setBasic] = useState({
    name: "Ethan", 
    location: "College Station, TX", 
    phone: "(979) 571-6202", 
    email: "woodethx@gmail.com"});
  const [edu, setEdu] = useState([{
    id: crypto.randomUUID(), 
    school: "Texas A&M University", 
    location: "College Station, TX", 
    major: "Technology Management", 
    grad: "December 2024", 
    gpa: "3.2/4.0"}])
    const [exp, setExp] = useState([{
    id: crypto.randomUUID(), 
    company: "Texas A&M AgriLife IT", 
    location: "College Station, TX", 
    position: "Student Intern, Techbuy", 
    duration: "August 2024 – December 2024", 
    info: "Techbuy is a team under AgriLife IT that is responsible for providing and maintaining computers, software, and accessories to all AgriLife employees",
    actions: ["Create detailed documentation for surplus asset processing, leading to more consistent and compliant procedures.",
      "Transition asset tracking from Excel to a more collaborative platform, significantly improving accessibility and collaboration.",
      "Assist in automating data cross-referencing processes with FAMIS, enhancing accuracy and reducing manual input errors."
    ]}])
  
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
  const allEdu = edu.map((d) => {
    return (<Education key={d.id} id={d.id} data={d} onEduChange={handleEdu}/>);
  });
  const allExp = exp.map((d) => {
    return (<Experience key={d.id} id={d.id} data={d} onExpChange={handleExp}/>);
  });

  const dispExp = exp.map((d) => {
    const actionList = d.actions.map((action) => {
      return (<li>{action}</li>)
    });
    return(
      <div className="expBlock">
        <b>{d.company}</b>
        <p>{d.location}</p>
        <i>{d.position}</i>
        <p>{d.duration}</p>
        <p>{d.info}</p>
        {actionList}
      </div>
    )
  });

  const dispEdu = edu.map((d) => {
    return (<div className="eduBlock">
    <b>{d.school}</b>
    <p>{d.location}</p>
    <i>{d.major}</i>
    <p>{d.grad}</p>
    <p>{d.gpa}</p>
    </div>
    );
  });

  return (
    <>
      <aside>
        <BasicInfo data={basic} onBasicChange={handleBasic}/>
        {allEdu}
        {allExp}
        <button onClick={addEdu}>+ Add Education</button>
      </aside>
      <main>
        <div className="page">
          <h1>{basic.name}</h1>
          <p>{basic.location}    |    {basic.phone}    |    {basic.email}</p>
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
