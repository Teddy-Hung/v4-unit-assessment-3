/*Unit Assessment 3 React - Bookist*/
import react, {Component} from 'react'
import './App.css'
import './data'
import Header from './Header'
import SearchBar from './SearchBar'
import Shelf from './Shelf'
import BookList from './BookList'
import data from './data'

class App extends Component {
  constructor(){
    super()

    this.state={
      books: data,
      shelf: []
    }
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <SearchBar/>
        <section class= 'Book-Shelf-FlexBox'>
          <BookList books={this.state.books}/>  
        </section>
      </div>
    )
  }

}

export default App;
