import { useState } from 'react'

function AddTask() {

  let[count, setcount] = useState([])

  function oneUp(){
    setcount(count --);
  }

  return(
    <div>
      <button onClick={oneUp}>Add Task: {count}</button>
    </div>
  )
}

function App() {
  return (
    <>
    <AddTask />
    </>
  )
}

export default App;
