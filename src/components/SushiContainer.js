import React, { useState, useEffect } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushiList, wallet, setWallet, eaten, setEaten }) {
  const ITEMS_PER_PAGE = 4;
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    // Set the initial visible items when the component mounts
    const initialItems = sushiList.slice(0, ITEMS_PER_PAGE);
    setVisibleItems(initialItems);
  }, [sushiList]); // Ensure useEffect runs when sushiList changes

  const [currentPage, setCurrentPage] = useState(1);

  const loadMoreItems = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = currentPage * ITEMS_PER_PAGE;
    const newItems = sushiList.slice(startIndex, endIndex);

    setVisibleItems((prevVisibleItems) => [...newItems]);

    if(endIndex >= sushiList.length){setCurrentPage(0)}
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="belt">
      {visibleItems.map((item) => (
        <Sushi key={item.id} item={item} wallet={wallet} setWallet={setWallet} eaten={eaten} setEaten={setEaten} />
      ))}
      <MoreButton handleLoadSushi={loadMoreItems} />
    </div>
  );
}

export default SushiContainer;
