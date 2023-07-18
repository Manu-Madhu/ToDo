import React from 'react';

const List = ({task,index,removeTask,toggleComplete}) => {

  return (
    <>
     <div className='container listBox d-flex align-items-center start-0'>
            <div className='d-flex align-items-center justify-content-between'style={{ width: '100%' }}>
             <h6 className='text-white ps-3' style={{textDecoration:task.status?"line-through":""}}>{task.title}</h6>
             <div className='pe-3'>
              <div className='gap-2' style={{cursor:'pointer'}}>
                 <img onClick={()=>{toggleComplete(index)}} src={require(`./Assets/3.webp`)} alt="" style={{width:'20px', paddingRight:"2px"}}/>
                 <button onClick={()=>{removeTask(index)}} className='btn btn-primary ms-3' style={{height:"35px"}}>Delete</button>
              </div>
             </div>
            </div>
        </div>
    </>
  )
}

export default List