function ListGroup() {
  let items = ["New York", "Chicago", "Denver", "Phoenix", "Los Angeles"];
  items = [];

  if (items.length === 0)
    return (
      <>
        <h1>List</h1>
        <p>No Item found</p>
      </>
    );

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
