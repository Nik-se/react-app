function ListGroup() {
  let items = ["New York", "Chicago", "Denver", "Phoenix", "Los Angeles"];

  const message = items.length === 0 ? <p>No Item found</p> : null;

  return (
    <>
      <h1>LIST</h1>
      {message}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={(event) => console.log(item, event)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
