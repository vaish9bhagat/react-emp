import React from 'react'
import Header from '../../other/Header'
import TaskNumber from '../../other/TaskNumber'
import TaskList from '../Tasklist/TaskList'

const EmpDashboard = (props) => {
  console.log(props.data)
  
  return (
    < >
    <div className='h-screen bg-[#212121]'>
    <Header ChangeUser={props.ChangeUser} data={props.data} />
    <TaskNumber data={props.data}/>
    <TaskList data={props.data}/>
    </div>

    </>

  )
}

export default EmpDashboard