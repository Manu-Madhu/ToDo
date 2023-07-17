import React, { useState } from "react";
import "./Todo.css";
const AddTask = ({addTask}) => {

    const [value,setValue]= useState('');
    
    const addItem =()=>{
        addTask(value);
        setValue("");
    }
  return (
    <>
      <div className="container w-100">
        <div className="container searchBar">
          <input
           value={value}
            type="text"
            placeholder="Add your Task"
            style={{
              paddingLeft: "20px",
              color: "white",
              border: " 0px solid",
              background: "#373a47",
              borderRadius: "5px",
              height: "43px",
              width: "85%",
              outline: "none",
            }}
            onChange={(e)=>{setValue(e.target.value)}}
            required
          />
          <button onClick={addItem} className="btn btn-primary ms-3 p-2 text-white px-3">
            <span>Add</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default AddTask;
