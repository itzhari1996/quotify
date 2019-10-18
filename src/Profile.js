import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Profile extends React.Component {
    constructor(){
        super()
        this.state={
            forms:[],
            name:'',
            bio:'',
            dob:new Date(),
            gender:undefined,
            profession:''
        }
    }

    nameHandle=(e)=>{
        const value=e.target.value
        this.setState({name:value})
    }

    bioHandle=(e)=>{
        const value=e.target.value
        this.setState({bio:value})
    }

    dateHandle=(e)=>{
        const value=e.target.value
        this.setState({dob:value})
    }

    radioHandle=(e)=>{
        const value=e.target.value
        this.setState({gender:value})
    }

    dateHandle=(date)=>{
        console.log(date)
        // const value=date.target.value
        this.setState({dob:date})
    }

    professionHandle=(e)=>{
        const value=e.target.value
        this.setState({profession:value})
    }

    submitHandle=(e)=>{
        e.preventDefault()    
        this.setState((prevState)=>{
            prevState.forms.push({name : this.state.name,  gender : this.state.gender, bio : this.state.bio, dob : this.state.dob, profession : this.state.profession})

            localStorage.setItem("forms", JSON.stringify(this.state.forms))
            console.log(localStorage.getItem('forms'))

            return {name : '', gender : '', bio : '', dob : new Date(), profession :  ''}
        })
    }

    render () {
        return (
        <div>
            <form onSubmit={this.submitHandle}>
                <label>Name:&nbsp;&nbsp;
                <input type='text' value={this.state.name} onChange={this.nameHandle} required/></label><br/><br/>
                <label>Bio:&nbsp;&nbsp;
                <textarea value={this.state.bio} onChange={this.bioHandle} required/></label><br/><br/>
                <label>DOB:&nbsp;&nbsp;
                <DatePicker selected={this.state.dob} onChange={this.dateHandle} dateFormat="dd-MM-yyyy"/></label><br/><br/>
                {/* </form><input type='date' value={this.state.dob} onChange={this.dateHandle} /></label><br/><br/> */}
                <label>Gender: &nbsp;&nbsp;</label>
                <label>
                <input type='radio' name='gender' value='Male' checked={this.state.gender==='Male'} onChange={this.radioHandle} required/>
                Male</label> &nbsp;&nbsp;
                <label>
                <input type='radio' name='gender' value='Female' checked={this.state.gender==='Female'} onChange={this.radioHandle}/>
                Female</label>
                <br/><br/>
                <label>Profession:&nbsp;&nbsp;
                <select value={this.state.profession} placeholder="Select" onChange={this.professionHandle} required>
                    <option value="" disabled>Select your option</option>
                    <option value='Fresher'>Fresher</option>
                    <option value='Experienced'>Experienced</option>
                    <option value='Retired'>Retired</option>
                </select></label><br/><br/>
                <input type='submit' value='save'/>
            </form>
        </div>
        )
    }
}

export default Profile