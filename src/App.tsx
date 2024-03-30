import ListGroup from "./components/ListGroup";
import Alerts from "./components/Alerts";

function App() {
  return (
    <div>
      <Alerts>
        Nikola <span> Markovic </span>
      </Alerts>
    </div>
  );

  /*
    let items = ["New York", "Chicago", "Denver", "Phoenix", "Los Angeles"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
    return (
    <div>
      <ListGroup
        items={items}
        heading="cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
  */
}

export default App;
