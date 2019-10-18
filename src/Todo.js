import React from 'react'

class Todo extends React.Component{
    constructor(props){
        super()
        this.state={
            count:props.tasks.length,
            tasks:props.tasks
        }
    }

    addTask = () =>{
        const promptText = prompt("Enter a task")
        if(promptText.length === 0){
            alert('Task can\'t be Empty')
        }else{
            this.setState(data =>{
                const current_datetime = new Date()
                const formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds()
                data.tasks.push({id:data.count+1,task:promptText,dateCreated: formatted_date})
                return {count:data.count+1,tasks: data.tasks}
            })
        }

    }

    updateTask = (index) => {
        const newName = prompt('Edit the Task',this.state.tasks[index].task)
        const current_datetime = new Date()
        const formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds()

        if (!(newName === null || newName.length === 0)){
            this.setState((data) => {
                data.tasks[index].dateCreated=formatted_date
                data.tasks[index].task = newName
                return {tasks:data.tasks}
            })
        }
    }

    deleteTask = (index) => {
        const response = window.confirm("Do you want to Delete the Task?")
        if (response === true){
            this.setState((data) => {
                const deletedId = data.tasks[index].id
                data.tasks.splice(index,1)
                data.tasks.map(obj => {
                    if (obj.id > deletedId){ obj.id-=1 }
                    return undefined
                })
                return {count:data.count-1,tasks:data.tasks}
            })
        }else{
            alert('Delete Aborted')
        }
    }

    sortData = (sortType) =>{
        this.setState(data =>{
            data.tasks.sort((a,b)=>{
                const nameA = a.task.toLowerCase()
                const nameB = b.task.toLowerCase()
                if (nameA < nameB){return sortType === 'ASC'? -1: 1} //sort string ascending
                else if (nameA > nameB){return sortType === 'ASC'? 1: -1}
                else{return 0}
            })
            return {tasks:data.tasks}
        })
    }

    moveData = (moveDir,index) =>{
        this.setState(data => {
            const temp=data.tasks[index]
            if (moveDir === 'up' && index !== 0){
                data.tasks[index]=data.tasks[index-1]
                data.tasks[index-1]=temp
            }else if(moveDir === 'down' && index !== data.tasks.length-1){
                data.tasks[index]=data.tasks[index+1]
                data.tasks[index+1]=temp
            }
            return {tasks:data.tasks}
        })
    }

    render(){
        localStorage.setItem('tasks',JSON.stringify(this.state.tasks))
        if(this.state.tasks.length === 0){
            return(
                <div>
                    <h2>No tasks to display. Add a new Task ...</h2>
                    <button onClick={this.addTask}>Add Task</button>
                </div>
            )
        }else{
            return(<div>
                <h2>Todo List</h2>
                <table border='solid 1px' cellPadding = "12">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Task &nbsp;<button onClick={()=>{this.sortData('ASC')}}>A</button>&nbsp;&nbsp;<button onClick={()=>{this.sortData('DEC')}}>D</button></th>
                            <th>Date Created</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tasks.map((item,index) =>{
                            return (<tr key = {index}>
                                <td>{item.id}</td>
                                <td>{item.task}<br/><br/>
                                    <button onClick={()=>{this.moveData('up',index)}}>up</button>&nbsp;&nbsp;<button onClick={()=>{this.moveData('down',index)}}>down</button>
                                </td>
                                <td>{item.dateCreated}</td>
                                <td>
                                    <a href='#' onClick={() => {
                                        this.updateTask(index)
                                    }}>Update</a><br/>
                                    <a href='#' onClick={() => {
                                        this.deleteTask(index)
                                    }}>Delete</a>
                                </td>
                            </tr>)
                        })}
                    </tbody>
                </table><br/><br/>
                <button onClick={this.addTask}>Add Task</button>
            </div>)
        }
    }
}

export default Todo
