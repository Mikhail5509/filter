import React, { useState } from "react";

const EditableList = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Item 1", price: 100 },
    { id: 2, text: "Item 2", price: 200 },
  ]);
  const [editingItem, setEditingItem] = useState(null);
  const [text, setText] = useState("");
  const [price, setPrice] = useState("");
  const [filter, setFilter] = useState("");

  const handleSave = () => {
    if (editingItem) {
      setItems(
        items.map((item) =>
          item.id === editingItem.id ? { ...item, text, price: Number(price) } : item
        )
      );
      setEditingItem(null);
    } else {
      const newItem = { id: Date.now(), text, price: Number(price) };
      setItems([...items, newItem]);
    }
    setText("");
    setPrice("");
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setText(item.text);
    setPrice(item.price);
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const filteredItems = items.filter((item) => item.text.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <input
        type="text"
        placeholder="Фильтр"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <input
        type="text"
        placeholder="Название"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="number"
        placeholder="Цена"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleSave}>{editingItem ? "Сохранить" : "Добавить"}</button>
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>
            {item.text} {item.price}₽
            <button onClick={() => handleEdit(item)}>✏️</button>
            <button onClick={() => handleDelete(item.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EditableList;
