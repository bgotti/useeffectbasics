import './App.css';
import React, { useEffect, useState } from "react"
import Title from './components/Title';
import CardBody from './components/CardBody';

function App() {

  //State
  const [user, setUser] = useState("");

  //useEffect
   useEffect(() => {
          fetch('https://randomuser.me/api/')
          .then(results => results.json())
          .then(data => {
          setUser(data.results[0]);
        });
  }, []); // Pass empty array to only run once on mount.

  return (
    <div className="App">
      <header className="App-header">
        <Title/>
        <CardBody user={user}/>
      </header>
    </div>
  );
}

export default App;
