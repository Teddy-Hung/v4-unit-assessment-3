import React, {Component} from 'react'

class BookList extends Component{
    render(){
        let mappedBooks = this.props.books.map((book, i) => {
            return <div key={i}>
                <img id= 'book-image' src= {book.img}/>
                <h2>{book.title}</h2>
                <h2>{book.author}</h2>
            </div>
        })
        return(
            <div class='BookDisplay'>{mappedBooks}</div>
            
        )
    }
}

export default BookList