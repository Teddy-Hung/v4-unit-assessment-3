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
    
    handleClick(input){
        this.props.filter(input)
    }

    handleClear(){
        this.setState({userInput: ''})
        this.props.reset()
    }

    render(){
        return(
            <div class= 'SearchRow'>
                <input value= {this.state.userInput} id= 'search-bar' onChange= {(e) => this.handleChange(e.target.value)}></input>
                <button id= 'search' onClick= {()=> this.handleClick(this.state.userInput)}>Search</button>
                {/* Added hidden property if userInput is empty (Stretch Goal) */}
                <button id= 'clear-search' hidden= {!this.state.userInput} onClick= {this.handleClear}>Clear Search</button>
            </div>
        )
    }
}