import React from 'react'

const Task = ({ id, name, onDelete }) => {
  return (
    <div className="col-3 task">
          <div className="card mb-3 text-center">
              <div className="card-body">    
                <h5 className='card-title'> {name}</h5> 
              </div>
          </div>
      </div>
  )
}

export default Task