import React, { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid';
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

  const unique_id = uuid();

  const createTaskObject = (task) => {
    setTasks([...tasks, {id: unique_id, text: task.trim(), checked: false}]);
  }

  const updatedTask = (editedTask) => {
    const tasksCopy = [...tasks]
    const updatedArr = tasksCopy.map(task => task.id === editedTask.id
      ? {...task, text: editedTask.text}
      : task
      )
    setTasks(updatedArr)
  }

  const deleteTask = (task) => {
    const tasksCopy = [...tasks]
    const indexOfTask = tasksCopy.findIndex(object => {
      return object.id === task.id
    })
    tasksCopy.splice(indexOfTask,1)
    setTasks(tasksCopy)
  }
  

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
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
                  <TaskItem name={task.text} key={task.id} id={task.id} updatedTask={updatedTask} deleteTask={deleteTask} />
                ))}
            </TaskCardContent>
        </TaskCardBody>
    </TaskCardContainer>
  )
}

export default TaskCard
