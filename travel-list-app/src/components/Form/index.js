import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Form.css";

const Form = ({ onAddItem }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    // save nothing if description field is not profided
    if (!description) return;

    const newItem = {
      id: uuidv4().toString(),
      description: description,
      quantity: quantity,
      packed: false,
    };
    console.log(newItem);

    // add to the list of items
    onAddItem(newItem);

    // reset items and description to defaults
    setDescription("");
    setQuantity(1);
  };

  const handleOnchangeQuantity = (event) => {
    setQuantity(Number(event.target.value));
  };

  const handleOnchangeItem = (event) => {
    setDescription(event.target.value);
  };

  return (
    <form className="add-form" onSubmit={(event) => handleSubmit(event)}>
      <h3>What do you need for your Trip? 😍</h3>
      <select value={quantity} onChange={(e) => handleOnchangeQuantity(e)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(event) => handleOnchangeItem(event)}
      />
      <button type="submit">add</button>
    </form>
  );
};

export default Form;
