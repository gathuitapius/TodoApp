import './App.css';
import { Navbar } from './components/Navbar';
import { Tasks } from './components/Tasks';
import { TaskActions } from './components/TaskActions';
import { CompleteTasks } from './components/CompletedTasks';
import { UncompleteTasks } from './components/UncompleteTasks';
import { useState } from 'react';
function App() {
  const [isComplete, setIsComplete] = useState(false);
  console.log(isComplete)
  return (
    <div className="App">
      <Navbar/>
      <h2>Tasks</h2>
      <TaskActions 
      isComplete={isComplete}
      setIsComplete={setIsComplete}
      />

      {isComplete ? <CompleteTasks/> : <UncompleteTasks/>}

    </div>
  );
}

export default App;
