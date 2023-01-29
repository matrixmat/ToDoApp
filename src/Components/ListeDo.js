import React from 'react'
import { useState } from 'react'
import Task from './Task'
import { v4 as uuidv4 } from 'uuid';

export default function ListeDo() {
  const [tasks, settasks] = useState([
    { id: uuidv4(), nom: 'Watch TV' },
    { id: uuidv4(), nom: 'Study' },
    { id: uuidv4(), nom: 'Eat Lunch' }
  ])
  const [task, setTask] = useState('');
  const addTask = () => {
    if (task.length === 0) {
      alert("Error : Empty Name")
    }
    else {
      let ntasks = [...tasks];
      let ntask = {};
      ntask.id = uuidv4();
      ntask.nom = task;
      ntasks.push(ntask);
      settasks(ntasks);
      setTask('');
    }
  }
  const deleteTask = (idp) => {
    let ntasks = tasks.filter((t) => { return t.id !== idp })
    settasks(ntasks);
  }
  let doneTask = (event) => {

    console.log(event.target.parentNode.parentNode.style = "background-image: linear-gradient(green,lightgreen);transition:0.6s;padding:0px 20px;border-radius:15px;padding:5px 0px;")
  }
  return (
    <div id='diva'>
      <h1>Application ToDo :</h1>
      <form>
        <input type="text" id='adb2' value={task}
          onChange={(e) => { setTask(e.target.value) }} />
        <input type="button" id='adb' onClick={addTask} value="Ajouter" />
      </form>
      <br></br>
      <ul>
        {
          tasks.map((t) => {
            return <li key={t.id}><Task delf={() => deleteTask(t.id)} donef={doneTask} txt={t.nom} /></li>
          })
        }
      </ul>
    </div>
  )
}
