import React from 'react'
import Axios from 'axios'
import './App.css'

class RandomQuote extends React.Component{
    constructor(){
        super()
        this.state={
            quotes:[],
            index:0,
            disabled:false
        }
    }

    componentDidMount(){
        Axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
        .then(response=>{
            this.setState({quotes:response.data.quotes})
        })
        .catch(error => {
            console.log(error)
        })
    }

    saveQuote=()=>{
        const id = Math.floor(Math.random()*100000000)
        const array=localStorage.getItem('savedQuotes')?JSON.parse(localStorage.getItem('savedQuotes')):[]
        const item= this.state.quotes[this.state.index]
        array.push({id:id,quote:item.quote,author:item.author})
        localStorage.setItem('savedQuotes',JSON.stringify(array))
        this.setState({disabled:true})
    }

    changeQuote=()=>{
        let index = Math.floor(Math.random()*this.state.quotes.length)
        while (index === this.state.index){
            index = Math.floor(Math.random()*this.state.quotes.length)
        }
        const array=localStorage.getItem('savedQuotes')?JSON.parse(localStorage.getItem('savedQuotes')):[]
        const value =array.find( item => item.quote === this.state.quotes[index].quote)
        if (value){
            this.setState({disabled:true,index:index})
        }else{
            this.setState({disabled:false,index:index})
        }
    }

    findQuote=(id)=>{
        
    }

    render(){
        return(
            <div className='quotediv'>
                <p className='quotetext'><b>{this.state.quotes.length !== 0 && this.state.quotes[this.state.index].quote}</b></p>
                <p className='quoteauthor'>{this.state.quotes.length !== 0 && this.state.quotes[this.state.index].author}</p>
                <input type='button' className='button' value={this.state.disabled ? 'Saved':'Save'} disabled={this.state.disabled} onClick={this.saveQuote}/>&nbsp;&nbsp;
                <input type='button' className='button' onClick={this.changeQuote} value='Change Quote'/>
            </div>
        )
    }
}

export default RandomQuote