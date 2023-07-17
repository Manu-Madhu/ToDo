import React,{useState} from "react";
import './Todo.css';
import AddTask from "./AddTask";
import List from "./List";

const Todo = () => {
    const [task, setTask] = useState([]);

    const addTask =(title)=>{
        const newTask = [...task, {title}]
        setTask(newTask);
    }
    const removeTask =(index)=>{
      const newTask =[...task]
      newTask.splice(index,1);
      setTask(newTask)
    }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 col-4 bg-dark"style={{ height: "100vh" }}>
         <div className="myday-todo d-flex align-item-center mt-4 py-2">
            <span className="ps-4" >My Day</span>
         </div>
        </div>
        <div className="col-lg-10 col-8 bg-dark d-flex d-alignitem-center justify-content-center">
          <div className="d-flex d-alignitem-center justify-content-center p-3 position-relative">
            <div className="listBox-main position-absolute start-0 pt-5 mt-5">
                {
                    task.map((task,index)=>{
                        return(
                            <List task={task} index ={index} removeTask={removeTask}/>
                        );
                    })
                }
            </div>
            <div className="position-absolute start-0">
              <h3 className="text-white ps-1 ms-5 mt-4">My Day</h3>
              <span className="text-white ps-4 ms-5">Monday, 17 july</span>
            </div>
            <img src={require(`./Assets/wallpaperflare.com_wallpaper (22).jpg`)}alt="" className="img-fluid"style={{ width: "100%", height: "", borderRadius: "10px" }} />
            <div className="container position-absolute bottom-0 mb-5 w-100">
              <AddTask addTask={addTask}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
