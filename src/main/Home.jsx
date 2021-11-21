import React from 'react';
import Heading from '../component/Heading';
import IconSearch from '../component/icon';
import Book from '../component/book';


const Home = (props) => {
  return ( 
<div>
             <div className="list-books">
            <Heading/>
            <div className="list-books-content">
              
                
            <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
      
        {props.books.filter( book => book.shelf === 'currentlyReading').map(book =>( 
      <li key={book.id}>
        <Book book={book} shiftShelf={props.shiftShelf} {...props} currentShelf="currentlyReading"
        />
        </li>))}
      
       

        </ol>
      </div>
    </div>
          
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                  
                  
                  {props.books.filter( book => book.shelf === 'wantToRead').map(book =>( 
                  <li key={book.id}>
                    <Book book={book} shiftShelf={props.shiftShelf} currentShelf="wantToRead" {...props}/>
                    </li>))}
                </ol>
                  </div>
                </div>

                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">

                    <ol className="books-grid">
               {props.books.filter( book => book.shelf === 'read').map(book =>( 
                  <li key={book.id}>
                    <Book book={book} shiftShelf={props.shiftShelf} currentShelf="read" {...props}/>
                    </li>))}
                   </ol>

                  </div>
                </div>
                  </div>
           <IconSearch/>
          </div>
        </div>
    

   );
}
 
export default Home;
