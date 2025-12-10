function ListGroup() {
  let items = ["An item", "A second item", "A third item", "A fourth item", "And a fifth one"];
  const selectIndex = 0;
  
  if (items.length === 0) return <><h1>List</h1> <p>No items found</p></>;
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, index) => <li className={selectIndex === index? 'list-group-item active' : 'list-group-item'} 
        key={item} 
        onClick={() => selectIndex===index}>{item}</li>)}
      </ul>
    </>);
}
export default ListGroup;