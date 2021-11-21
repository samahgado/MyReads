import React from 'react'
import { Route,Switch } from 'react-router';
import * as BooksAPI from './BooksAPI';
import './App.css'
import Home from './main/Home';
import Search from './main/search';




class BooksApp extends React.Component {
  state = {
    books :[]
    
  }
 //To call backEnd & initialize and render  state
   async componentDidMount(){
     await BooksAPI.getAll().then((books)=>{
      this.setState({books:books});
    
    })
  
  }
  
  //To update book=>ID& shelf =>value 
  moveBetShelves = async(book,shelf)=>{
    await BooksAPI.update(book,shelf);
    BooksAPI.getAll().then((books)=>{
     this.setState({books:books});
    
    })
 }
  
      
  


  render() {
    
    return (
      <div className="app">
        <Switch>
          <Route exact path="/"  render={(props) =>
          <Home {...props}
            books={this.state.books}
            shiftShelf={this.moveBetShelves}  />} />

          <Route path="/search" render={(props)=>
          <Search shiftShelf={this.moveBetShelves}/>}/>
        </Switch>
      </div>
    )
  }
} 

export default BooksApp;
