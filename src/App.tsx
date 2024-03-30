import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "Chicago", "Denver", "Phoenix", "Los Angeles"];
  return (
    <div>
      <ListGroup items={items} heading="cities" />
    </div>
  );
}

export default App;
