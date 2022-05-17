import React, { useEffect, useState } from 'react'
import AddTask from '../AddTask/AddTask';
import TaskItem from '../TaskItem/TaskItem';
import { TaskCardContainer, TaskCardBody, TaskCardHeader, TaskCardTitle, TaskCardIcon, TaskCardContent } from './TaskCard.styled';

const TaskCard = (props) => {
  const { title, showIcon } = props;
  const [tasks, setTasks] = useState(() => {
    const savedtasks = localStorage.getItem('tasks')
    if (savedtasks) {
      return JSON.parse(savedtasks);
    } else {
      return [];
    }
  })

  const createTaskObject = (task) => {
    setTasks([...tasks, {id: tasks.length + 1, text: task.trim(), checked: false}]);
  }

  const updatedTask = (editedTask) => {
    const tasksCopy = [...tasks]
    const updatedArr = tasksCopy.map(task => task.id === +editedTask.id
      ? {...task, text: editedTask.text}
      : task
      )
    setTasks(updatedArr)
  }
  

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log(tasks)
  }, [tasks])

  
  const icon = showIcon ? <TaskCardIcon>icon</TaskCardIcon> : <TaskCardIcon>hide icon</TaskCardIcon>;
  return (
    <TaskCardContainer>
        <TaskCardBody>
            <TaskCardHeader>
                <TaskCardTitle>{title}</TaskCardTitle>
                {icon}
            </TaskCardHeader>
            <TaskCardContent>
                <AddTask addTask={createTaskObject}/>
                { tasks.length === 0 ? <p>All tasks completed</p>
                :
                tasks.map((task) => (
                  <TaskItem name={task.text} key={task.id} id={task.id} updatedTask={updatedTask} />
                ))}
            </TaskCardContent>
        </TaskCardBody>
    </TaskCardContainer>
  )
}

export default TaskCard
