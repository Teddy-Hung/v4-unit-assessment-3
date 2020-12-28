/*Unit Assessment 3 React - Bookist*/
import react, {Component} from 'react'
import './App.css'
import './data'
/* Component Imports */
import Header from './Header'
import SearchBar from './SearchBar'
import Shelf from './Shelf'
import BookList from './BookList'
/* Data Imports */
import data from './data'

class App extends Component {
  constructor(){
    super()

    this.state={
      books: data,
      shelf: []
    }

    //Binding Functions
    this.addToShelf = this.addToShelf.bind(this)
    this.clearShelf = this.clearShelf.bind(this)
    this.filterBooks = this.filterBooks.bind(this)
    this.reset = this.reset.bind(this)
  }

  /* Prop Functions */
  //addToShelf - prop function that takes in books and adds it to shelf array
  addToShelf(book){
    //Conditional statement makes existing books in shelf unclickable (Stretch Goal)
    if(!this.state.shelf.includes(book)){
      this.setState({shelf: [...this.state.shelf, book]})
    }
  }

  //clearShelf - prop function that clears contents in shelf array
  clearShelf(){
    this.setState({shelf: []})
  }

  //filterBooks - prop function that filters display of books based on user input
  filterBooks(input){
    let books = this.state.books
    let filteredBooks = []

    for(let i=0; i<books.length; i++){
      //ToUpperCase added to account for non case sensitive filter (Stretch Goal)
      if(books[i].title.toUpperCase().includes(input.toUpperCase()) || books[i].author.toUpperCase().includes(input.toUpperCase())){
        filteredBooks.push(books[i])
      }
    }

    this.setState({books: filteredBooks})
    console.log(books)
  }

  reset(){
    this.setState({books: data})
  }
  /* Rendering */
  render(){
    return (
      <div className="App">
        <Header/>
        <SearchBar filter= {this.filterBooks} reset= {this.reset}/>
        <section class= 'Book-Shelf-FlexBox'>
          <BookList books={this.state.books} addToShelf={this.addToShelf}/> 
          <div class= 'Divider'></div> 
          <Shelf shelfBooks={this.state.shelf} clear={this.clearShelf}/>
        </section>
      </div>
    )
  }

}

export default App;
