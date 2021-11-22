import React, { Component } from 'react';
import *  as BookAPI from "../BooksAPI";
import Book from '../component/book';
import { Link } from 'react-router-dom';class Search extends React.Component {
  state={
    query :'',
    searchBooks:[]

  }
  updateQery = ( query)=>{
    this.setState({
      query : query}
    )
    this.getSearchedBook(query)
  }
  getSearchedBook = (query) =>{
    if(query){
    BookAPI.search(query).then((searchBooks)=>{
       (searchBooks.error)?
        this.setState({searchBooks:[]}) : this.setState({searchBooks:searchBooks})
       })
}else
{
    this.setState({searchBooks:[]})
  }
    } 
  
    render() { 
        return <div>
            (<div className="search-books">
          <div className="search-books-bar">
            <Link to="./">
          <button className="close-search">Close</button>
          </Link>

            <div className="search-books-input-wrapper">
              
              <input type="text"
               placeholder="Search by title or author"
                value={this.state.query}
                 onChange={(event)=>this.updateQery(event.target.value)}/>

            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {this.state.searchBooks.map(searchedBook => {
                let shelf = "none";
                this.props.books.map( book =>(
                  book.id === searchedBook.id ? 
                  shelf =book.shelf : ""
                ));
                return(
                <li key={searchedBook.id}>
                  <Book book={searchedBook} shiftShelf={this.props.shiftShelf} currentShelf={shelf}  {...this.props}/>
                </li>)})}
                
            </ol>
          </div>
        </div>
    )

        </div>;
    }
}
 
export default Search;
