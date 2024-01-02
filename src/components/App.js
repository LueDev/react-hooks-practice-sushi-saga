import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushi, setSushi] = useState([])
  const [wallet, setWallet] = useState(0)
  const [eaten, setEaten] = useState([])


  useEffect(()=> {
    fetch(API)
    .then(r => r.json())
    .then(data => setSushi([...data]))
  }, [])

  return (
    <div className="app">
      <SushiContainer sushiList={sushi} wallet={wallet} setWallet={setWallet} eaten={eaten} setEaten={setEaten}/>
      <Table wallet={wallet} setWallet={setWallet} eaten={eaten}/>
    </div>
  );
}

export default App;
