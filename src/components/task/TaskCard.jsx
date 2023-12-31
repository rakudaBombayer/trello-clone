import React from 'react'
import TaskCardTitle from './TaskCardTitle'
import TaskCardDeleteButton from './TaskCardDeleteButton'
import TaskAddInput from './input/TaskAddInput'
import Tasks from './Tasks'

const TaskCard = () => {
  return (
    <div className="taskCard">
      <TaskCardTitle />
      <TaskCardDeleteButton />
      <TaskAddInput />
      <Tasks />
    </div>
  )
}

export default TaskCard
