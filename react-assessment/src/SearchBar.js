import react, {Component} from 'react'

export default class SearchBar extends Component{
    constructor(){
        super()

        this.state={
            userInput: ''
        }

        this.handleClear = this.handleClear.bind(this)
    }
    
    handleChange(e){
        this.setState({userInput: e})
    }
    
    handleClick(){

    }

    handleClear(){
        this.setState({userInput: ''})
    }

    render(){
        return(
            <div class= 'SearchRow'>
                <input value= {this.state.userInput} id= 'search-bar' onChange= {(e) => this.handleChange(e.target.value)}></input>
                <button id= 'search'>Search</button>
                <button id= 'clear-search' onClick= {this.handleClear}>Clear Search</button>
            </div>
        )
    }
}