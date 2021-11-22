
import React from 'react';
const Book = (props) => {
  let authors;
  try{
   authors = props.book.join(",");
  }
  catch(e){
authors="";
  }
  let imageUrl ;
  try{
    imageUrl = props.book.imageLinks.thumbnail;
  }
  catch(e){
    try{
      imageUrl = props.book.smallThumbnail
    }
    catch(e){
      imageUrl="";
    }
  }
  return ( <div>
    <div className="book">
             <div className="book-top">
               <div className="book-cover" style={{ width: 128, height: 192, backgroundImage:`url("${imageUrl}")` }}></div>
               <div className="book-shelf-changer">
               <select defaultValue={props.currentShelf}
               onChange={(event) => props.shiftShelf(props.book, event.target.value)}
               >
                   
                   <option value="move" disabled>Move to ...</option>
                   <option value="currentlyReading">Currently Reading</option>
                   <option value="wantToRead">Want to Read</option>
                   <option value="read">Read</option>
                   <option value="none">None</option>
                 </select>
               </div>
             </div>
             <div className="book-title">{props.book.title}</div>
             <div className="book-authors">{props.book.authors}</div>
           </div>
         
   
       
       </div>)
}
 
export default Book;


    
    
       