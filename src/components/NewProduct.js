import React, { useState } from "react";
import './NewProduct.css';

function NewProductForm({addProduct}) {
  const [model, setModel] = useState("");
  const [type, setType] = useState("");
  const [image, setImage ] = useState("");
  const [description, setDescription] = useState("");

  function handleFormSubmit (e) {
    e.preventDefault();
    console.log(model,type, image, description);
    addProduct({
      model,
      type,
      image,
      description,
    })
    setModel ('');
    setType ('');
    setImage('');
    setDescription ('');
  }

  return (
    <div className="new-product-form">
      <h2>New Product</h2>
      <form onSubmit={e=> handleFormSubmit(e)}>
        <input 
        type="text" 
        name="model" 
        placeholder="Camera Model" 
        value={model} onChange={e => setModel(e.target.value)}/>
        <input 
        type="text" 
        name="image" 
        placeholder="Image URL" 
        value={image} onChange={e => setImage(e.target.value)}/>
        <input 
        type="text" 
        name="description" 
        placeholder="Camera description" 
        value={description} onChange={e => setDescription(e.target.value)}/>
        <select  
        name="type" 
        value={type} 
        onChange={e => setType(e.target.value)}
        style={{padding: '8px', marging: '8px 0', width: '100%'}}>
        <option value=""> Select Type</option>
        <option value="zoom-module">Zoom Module</option>
        <option value="board-camera">Board Camera</option>
        <option value="interface-board">Interface Board</option>
        <option value="miniature-camera">Miniature Camera</option>
        </select>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default NewProductForm;