import { useState } from "react";
import "./App.css";
import QueueForm from "./components/QueueForm";
import QueueDisplay from "./components/QueueDisplay";

function App() {

  const [queue, setQueue] = useState([]);

  const addToQueue = (customer) =>{
    setQueue([...queue, {...customer, id: Date.now(), status: "waiting"}]);
  };

  const updateStatus = (id, newStatus )=>{
    setQueue(queue.map(customer => (
      customer.id === id ? {...customer, status: newStatus}:customer
    )))
  };

  const removeFromQueue =(id)=>{
    setQueue(queue.filter(customer => customer.id !== id))
  };

  return (
    <div className="app">
      <header>
        <h1>Queue Manegement system</h1>
        <p>Manage Your Costomer Effeciently</p>
      </header>

      <main>
       
        <QueueForm onAdd={addToQueue} />
        
        <QueueDisplay
        queue={queue}
        onUpdate={updateStatus}
        onRemove={removeFromQueue}
        />


      </main>
    </div>
  );
};

export default App;
