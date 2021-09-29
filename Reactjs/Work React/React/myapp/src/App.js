import './App.css';
import {books} from './books';//export const
import Book from './Book';// export default
  /*const books=[
    {
      id:1,
      title:"Dog Man: Mothering Heights",
      author:"Dav Pilkey",
      img:"https://images-na.ssl-images-amazon.com/images/I/51wlUnNtsHL._SX336_BO1,204,203,200_.jpg"
    },
    {
      id:2,
      title:"Fault Lines: Fractured Families and How to Mend Them ",
      author:"Karl Pillemer",
      img:"https://images-na.ssl-images-amazon.com/images/I/41IDlNLrHaL._SX329_BO1,204,203,200_.jpg"
    },
    {
      id:3,
      title:"Goodnight Moon",
      author:"Margaret",
      img:"https://images-na.ssl-images-amazon.com/images/I/51Ix49rxgtL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
    }
  ]*/
/*function BookList() {
  return (
      <section className="booklist">
        <Book title="Dog Man: Mothering Heights" author="Dav Pilkey" img={img}/>
        <Book title="Fault Lines: Fractured Families and How to Mend Them " author="Karl Pillemer" />
        <Book title="Goodnight Moon " author="Margaret" img={img2}/>
      </section>
  );
}*/

//two diff ways one is to assign book=book object
//other is to use spread operator to spread out all the items 
/*function BookList() {
  return (
      <section className="booklist">
        {books.map((book)=>{
          //const {img,title,author}=book;//destructuring
          return <Book key={book.id} book={book}/>
        })}
      </section>
  );
}*/

function BookList() {
  return (
      <section className="booklist">
        {books.map((book)=>{
          //const {img,title,author}=book;//destructuring
          return <Book key={book.id} {...book}/>
        })}
      </section>
  );
}

/*const Book=(props)=>{
  const {img,title,author}=props.book;
  return (
    <article className='book'>
      <img src ={img}/>
      <h1>{title}</h1>
    <h4 style={{color: '#617d98',fontSize: '0.75rem', marginTop: '0.25rem'}}>{author}</h4>

    </article>
  )
}*/
/*const Book=({img,title,author})=>{
  const clickhandler=()=>{
    alert("Hey buddy");
  }
  return (
    <article className='book'>
      <img src ={img}/>
      <h1>{title}</h1>
    <h4 style={{color: '#617d98',fontSize: '0.75rem', marginTop: '0.25rem'}}>{author}</h4>
    <button type="button" onClick={clickhandler}>Click me</button>
    </article>
  )
}*/


export default BookList;
