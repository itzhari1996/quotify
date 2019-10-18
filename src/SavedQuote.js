import React from 'react'

class SavedQuote extends React.Component{
    constructor(){
        super()
        this.state={
            quotes:localStorage.getItem('savedQuotes')?JSON.parse(localStorage.getItem('savedQuotes')):[],
            index:0
        }
    }

    changeQuote=()=>{
        let index = Math.floor(Math.random()*this.state.quotes.length)
        while (index === this.state.index){
            index = Math.floor(Math.random()*this.state.quotes.length)
        }
        this.setState({index})
    }

    render(){
        return(
            <div className='quotediv'>
                {this.state.quotes.length===0?(
                <p className='quotetext'>No Quotes to Display...</p>
                ):(
                <React.Fragment>
                <p className='quotetext'><b>{this.state.quotes.length !== 0 && this.state.quotes[this.state.index].quote}</b></p>
                <p className='quoteauthor'><i>{this.state.quotes.length !== 0 && this.state.quotes[this.state.index].author}</i></p>
                <button className='button' onClick={this.changeQuote}>Change Quote</button>
                </React.Fragment>
                )}
            </div>
        )
    }
}

export default SavedQuote