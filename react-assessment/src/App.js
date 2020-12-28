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
  }

  /* Prop Functions */
  //addToShelf - prop function that takes in books and adds it to shelf array
  addToShelf(book){
    this.setState({shelf: [...this.state.shelf, book]})
  }

  //clearShelf - prop function that clears contents in shelf array
  clearShelf(){
    this.setState({shelf: []})
  }

  /* Rendering */
  render(){
    return (
      <div className="App">
        <Header/>
        <SearchBar/>
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
