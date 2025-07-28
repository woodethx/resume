import { useState } from 'react'
import './App.css'
import BasicInfo from './components/basicInfo';
import Education from './components/Education';

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
  
  function handleBasic(updated){
    setBasic(updated);
  }
  function handleEdu(idU, updated){
    const newList = edu.map(item => {
          return item.id === idU ? updated : item
        })
    setEdu(newList);
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

  const dispEdu = edu.map((d) => {
    return (<>
    <b>{d.school}</b>
    <p>{d.location}</p>
    <i>{d.major}</i>
    <p>{d.grad}</p>
    <p>{d.gpa}</p>
    </>
    );
  });

  return (
    <>
      <aside>
        <BasicInfo data={basic} onBasicChange={handleBasic}/>
        {allEdu}
        <button onClick={addEdu}>+ Add Education</button>
      </aside>
      <main>
        <div className="page">
          <h1>{basic.name}</h1>
          <p>{basic.location}    |    {basic.phone}    |    {basic.email}</p>
          <hr></hr>
          <h2>Education</h2>
          {dispEdu}
        </div>
      </main>
    </>
  )
}

export default App
