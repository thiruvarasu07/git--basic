import { useState } from "react";

function Additem({addItem}) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(1);
    const [quantity, setQuantity] = useState(1);

    function onitemAdd(e) {
        e.preventDefault(); // prevent form reload
        const item = { name, price, quantity };
        console.log(item);
        addItem(item);
    }

    return (
        <div>
            <form className="add-item"onSubmit={onitemAdd}>
                <div>
                    <label>Item Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div>
                    <label>Item Price</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                    />
                </div>

                <div>
                    <label>Item Quantity</label>
                    <select
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                    >
                        <option  value={1}>1</option>
                        <option  value={2}>2</option>
                        <option  value={3}>3</option>
                    </select>
                </div>

                <button className="btn" type="submit">Add Item</button>
            </form>
        </div>
    );
}

export default Additem;