import React, {Component} from 'react'

class BookList extends Component{
    render(){
        let mappedBooks = this.props.books.map((book, i) => {
            return <div key={i}>
                <img id= 'book-image' src= {book.img} onClick = {() => this.props.addToShelf(book.title)}/>
                <p id='book-title'>{book.title}</p>
                <p id='book-author'>{book.author}</p>
            </div>
        })
        return(
            <div class='BookDisplay'>{mappedBooks}</div>
            
        )
    }
}

export default BookList