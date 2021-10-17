import { useState, useEffect } from "react";
import { sortByAsce, sortByDesc } from "../../utils/helpers";
import HotelDetail from "../HotelDetail/index";
import { ListContainer } from "./HotelsList.style";
import ListTool from "./ListTool";

function HotelsList({ data }) {
  const [order, setOrder] = useState();
  const [hotels, setHotels] = useState(data);
  const onChange = (value) => {
    setOrder(value);
  };

  useEffect(() => {
    if (order === "low") {
      let sorted = sortByAsce(data);
      setHotels(sorted);
    } else if (order === "high") {
      let sorted = sortByDesc([...data]);
      setHotels(sorted);
    }
  }, [order, data]);

  if (!hotels) {
    return <div>Loading</div>;
  }

  return (
    <ListContainer>
      <ListTool data={hotels} onChange={onChange} />
      {hotels.map((hotel) => (
        <HotelDetail
          data={hotel}
          key={hotel.id}
          propertyId={hotel.property.propertyId}
        />
      ))}
    </ListContainer>
  );
}

export default HotelsList;
