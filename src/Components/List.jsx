import React from 'react'

const List = ({task,index,removeTask}) => {
  return (
    <>
        <div className='container listBox d-flex align-items-center start-0'>
            <div className='d-flex align-items-center justify-content-between'style={{ width: '100%' }}>
             <h6 className='text-white ps-3'>{task.title}</h6>
             <div className='pe-3'>
             <button onClick={()=>{removeTask(index)}} className='btn btn-primary' style={{height:"35px"}}>Delete</button>
             </div>
            </div>
        </div>
    </>
  )
}

export default List