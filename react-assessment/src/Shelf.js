import React, {Component} from 'react'

export default class Shelf extends Component{
    constructor(){
        super()
    }

    render(){
        let books = this.props.shelfBooks.map((e, i) => <p key={i}>{e}</p>)
        return(
            <div class= 'ShelfBox'>
                <p>Your Shelf</p>
                <button onClick= {this.props.clear}>clear shelf</button>
                <p>{books}</p>
            </div>
        )
    }

}