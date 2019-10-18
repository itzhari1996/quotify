import React from 'react'

class AddQuote extends React.Component{
    constructor(){
        super()
        this.state={
            quote:'',
            author:''
        }
    }

    quoteHandle=(e)=>{
        const value=e.target.value
        this.setState({quote:value})
    }

    authorHandle=(e)=>{
        const value=e.target.value
        this.setState({author:value})
    }

    submitHandle=(e)=>{
        e.preventDefault()
        const id= Math.floor(Math.random()*100000000)
        const quote = this.state.quote
        const author = this.state.author
        const array=localStorage.getItem('savedQuotes')?JSON.parse(localStorage.getItem('savedQuotes')):[]
        array.push({id,quote,author})
        localStorage.setItem('savedQuotes',JSON.stringify(array))
        window.alert('Saved Successfully')
        this.setState({quote:'',author:''})
    }

    render(){
        return(
            <div className='quotediv'>
                <form onSubmit={this.submitHandle}>
                    <textarea rows='4' value={this.state.quote} placeholder='Type a Quote' onChange={this.quoteHandle} required/><br/><br/>
                    <textarea rows='1' type='text' value={this.state.author} placeholder='Author' onChange={this.authorHandle} required/><br/><br/>
                    <input className='button' type='submit' value='Add'/>
                </form>
            </div>
        )
    }
}

export default AddQuote