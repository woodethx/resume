import { useState } from 'react'
import './App.css'
import BasicInfo from './components/basicInfo';

function App() {
  const [count, setCount] = useState(0);
  const [basic, setBasic] = useState({name: "Ethan", location: "College Station, TX", phone: "(979) 571-6202", email: "woodethx@gmail.com"})
  const [editBasic, setEditBasic] = useState(false);
  
  return (
    <>
      <aside>
        <BasicInfo data={basic} editing={editBasic}/>
      </aside>
      <main>
        <div className="page">
          <h1>{basic.name}</h1>
          <p>{basic.location}    |    {basic.phone}    |    {basic.email}</p>
        </div>
      </main>
    </>
  )
}

export default App
