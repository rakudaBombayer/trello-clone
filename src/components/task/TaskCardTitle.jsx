import React, { useState } from 'react'

const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(true);
    console.log(isClick);
  };

  return (
    <div onClick={handleClick}>
      <h3>Today</h3>
    </div>
  )
}

export default TaskCardTitle
