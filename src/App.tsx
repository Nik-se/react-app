import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import State from "./components/StatesAndCities";

function App() {
  let items = ["New York", "Chicago", "Denver", "Phoenix", "Los Angeles"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <div>
        <h1 className="text-center text-bg-primary p-3">USA STATES CAPITOLS</h1>
      </div>
      <div>
        <h4 className="text-center">What is the capitol city of</h4>
      </div>
      <div className="d-flex justify-content-center">
        <div className="text-center">
          <ListGroup
            items={items}
            heading={State()}
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
