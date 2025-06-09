function ListItems({items}){
    return(
        <div>
            <h3>Item List</h3>
            {items.map((item) => (
                <Item item={item} />
            ))}
        </div>
    );
}
function Item({item}){
    return(
        <div className="item">
            <input type="checkbox"/>
            <div>{item.name}</div>
            <div>{item.price}</div>
            <div>{item.quantity}</div>
        </div>
    );
}
export default ListItems;