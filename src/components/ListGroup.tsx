import { useState } from "react";

function ListGroup() {
  let items = ["New York", "Chicago", "Denver", "Phoenix", "Los Angeles"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const message = items.length === 0 ? <p>No Item found</p> : null;

  // const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>LIST</h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={(event) => {
              console.log(item, index, event);
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
