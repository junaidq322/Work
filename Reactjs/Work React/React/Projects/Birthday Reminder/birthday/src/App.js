import { useState } from 'react';
import './App.css';
import data from './data';
import List from './List';
import list from './List';
function App() {
  const [people,setPeople]=useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays Today</h3>
        <List people={people}/>
        <button onClick={()=>setPeople([])}>Clear All</button>
        <button onClick={()=>setPeople(data)}>Fill Birthdays</button>
      </section>
    </main>
  );
}

export default App;
