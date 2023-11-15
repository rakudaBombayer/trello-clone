import React from 'react'
import TaskCard from '../TaskCard'

const AddTaskCardButton = () => {
  return (
    <div>
      <TaskCard />
      <AddTaskCardButton />
    </div>
  )
}

export default AddTaskCardButton
