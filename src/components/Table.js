import React, {useState} from "react";

function Table({ plates = [], wallet, setWallet, eaten}) {

  plates = [...eaten]
  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  const [deposit, setDeposit] = useState(null)

  function handleSubmit(event){
    event.preventDefault()
    setWallet(prevAmount => wallet + deposit)
    setDeposit(null)
  }


  return (
    <>
      <h1 className="remaining">
        {`You have: $${wallet} remaining!`}
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
        <div className="deposit">
          <h3>Deposit Here: </h3>
          <form onSubmit={handleSubmit}>
            <input 
              type="number"
              placeholder="Deposit Amount.."
              value={deposit}
              onChange={(e) => setDeposit(prevAmount => parseInt(e.target.value))}
              />
          </form>
      </div>
      </div>
      
    </>
  );
}

export default Table;
