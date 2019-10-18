import React from 'react'

class UsersList extends React.Component{
    constructor(){
        super()
        this.state={
            users: [
                {id:1,name:'Hari'},
                {id:2,name:'Jino'}
            ]
        }
    }

    render(){
        return(
            <div>
                <ul>
                {this.state.users.map(user =>{
                    return(<li key={user.id}>{user.name}</li>)
                })}
                </ul>
            </div>
        )
    }
}

export default UsersList