const Book=({img,title,author})=>{
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
}
export default Book;