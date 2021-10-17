import { useState, useEffect, useCallback } from "react";
import HotelDetail from "../HotelDetail/index";
import { ListContainer } from "./HotelsList.style";
import ListTool from "./ListTool";
import response from "../res";

const sortByAsce = (data) => {
  return [...data].sort(
    (a, b) => a.offer.displayPrice.amount - b.offer.displayPrice.amount
  );
};

const sortByDesc = (data) => {
  return [...data].sort(
    (a, b) => b.offer.displayPrice.amount - a.offer.displayPrice.amount
  );
};

function HotelsList() {
  const [order, setOrder] = useState();
  const [hotels, setHotels] = useState(response.results);

  const onChange = (value) => {
    setOrder(value);
  };

  useEffect(() => {
    if (order === "low") {
      let sorted = sortByAsce(hotels);
      setHotels(sorted);
    } else if (order === "high") {
      let sorted = sortByDesc(hotels);
      setHotels(sorted);
    }
  }, [order]);

  return (
    <ListContainer>
      <ListTool data={hotels} onChange={onChange} />
      {hotels.map((hotel) => (
        <HotelDetail data={hotel} key={hotel.id} />
      ))}
    </ListContainer>
  );
}

export default HotelsList;
