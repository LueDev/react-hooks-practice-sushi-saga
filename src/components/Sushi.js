import React from "react";

function Sushi(props) {

  const {id, name, img_url, price} = props.item

  const handlePurchase = () => {
    if(props.wallet >= price){
      props.setWallet(prevAmount => prevAmount - price)
      props.setEaten(prevList => [...prevList, id]);
      console.log(id, name, price)
    }
  }

  const isSushiEaten = props.eaten.includes(id)
  // console.log(id, isSushiEaten)
  // console.log(props.eaten)

  return (
    <div className="sushi" >
      <div className="plate">
        {isSushiEaten
         ? null
         : <img
            src={img_url}
            alt={name || "Sushi"}
            width="100%"
            onClick={() => handlePurchase()}
          />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
