import React from 'react'
import './App.css'

class ListAllQuotes extends React.Component{
    constructor(){
        super()
        this.state={
            quotes:localStorage.getItem('savedQuotes')?JSON.parse(localStorage.getItem('savedQuotes')):[],
            editId:undefined,
            editQuote:'',
            editAuthor:''
        }
    }

    editHandle = (item) =>{
        this.setState({editId:item.id,editQuote:item.quote,editAuthor:item.author})
    }

    deleteHandle = (id)=>{
        const quotes = this.state.quotes.filter(item => item.id !== id)
        localStorage.setItem('savedQuotes',JSON.stringify(quotes))
        this.setState({quotes})
    }

    editQuote=(e)=>{
        const value=e.target.value
        this.setState({editQuote:value})
    }

    editAuthor=(e)=>{
        const value=e.target.value
        this.setState({editAuthor:value})
    }

    submitHandle = (e) =>{
        e.preventDefault()
        this.setState(prevState => {
            const item = prevState.quotes.find(temp => temp.id===prevState.editId)
            item.quote=prevState.editQuote
            item.author=prevState.editAuthor
            localStorage.setItem('savedQuotes',JSON.stringify(prevState.quotes))
            return({quotes:prevState.quotes,editId:undefined,editAuthor:'',editQuote:''})
        })
    }

    cancelHandle = (e) =>{
        e.preventDefault()
        this.setState({editId:undefined,editQuote:'',editAuthor:''})
    }

    render(){
        return(
            <div>
                {this.state.quotes.length===0?(
                    <div className='quotediv'>
                    <p className='quotetext'>No Quotes to Display...</p>
                    </div>
                ):(
                this.state.quotes.map(item=>{
                    return(
                        <div key={item.id}>
                            {this.state.editId===item.id?(
                                <div className='quotediv'>
                                <form onSubmit={this.submitHandle}>
                                    <textarea rows="4" cols="50" value={this.state.editQuote} onChange={this.editQuote} required/><br/>
                                    <textarea rows='1' cols='50' value={this.state.editAuthor} onChange={this.editAuthor} required/><br/><br/>
                                    <input className='button' type='submit' />&nbsp;&nbsp;
                                    <input className='button' type='button' value='cancel' onClick={this.cancelHandle}/>
                                </form>
                                </div>
                            ):(
                                <div className='quotediv'>
                                <p className='quotetext'><b>{item.quote}</b></p>
                                <p className='quoteauthor'><i>{item.author}</i></p>
                                <input type='button' className='button' value='Edit' onClick={()=>{this.editHandle(item)}} />&nbsp;&nbsp;
                                <input type='button' className='button' value='Delete' onClick={()=>{this.deleteHandle(item.id)}} />
                                </div>
                            )}
                        </div>)
                    })
                )}
            </div>
        )
    }
}

export default ListAllQuotes