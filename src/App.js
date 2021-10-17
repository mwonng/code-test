import { useEffect, useState } from "react";
import Header from "./components/Header/index";
import HotelsList from "./components/HotelsList/index";
import { response } from "./res";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    //fetching remote data here, simulate real world fetch
    setTimeout(() => setData(response.results), 500);
  }, []);

  if (!data) {
    return <div>Loading</div>;
  }

  return (
    <div className="App">
      <Header />
      <HotelsList data={data} />
    </div>
  );
}

export default App;
