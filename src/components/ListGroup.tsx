function ListGroup() {
  const items = ["New York", "Chicago", "Denver", "Phoenix", "Los Angeles"];

  return (
    <>
      <h1>LIST</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
