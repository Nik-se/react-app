import React, { useState, useEffect } from "react";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import State from "./components/StatesAndCities";

function App() {
  const [stateData, setStateData] = useState(null);

  useEffect(() => {
    async function fetchStateData() {
      const data = await State();
      setStateData(data);
    }
    fetchStateData();
  }, []);

  if (!stateData) {
    // Render loading state while fetching data
    return <div>Loading...</div>;
  }

  const { stateName, cityName1, cityName2, cityName3, cityName4, cityName5 } =
    stateData;
  const items = [cityName1, cityName2, cityName3, cityName4, cityName5];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <div>
        <h1 className="text-center text-bg-primary p-3">USA STATES CAPITOLS</h1>
      </div>
      <div>
        <h4 className="text-center">
          What is the capitol city of {stateName}?
        </h4>
      </div>
      <div className="d-flex justify-content-center">
        <div className="text-center">
          <ListGroup
            items={items}
            heading={stateName}
            onSelectItem={handleSelectItem}
          />
          <div className="text-center ml-2">
            <Button />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
