

function Card ({quote,author}) {
  return (
    <article className = "card">
        <button>Add to favorites </button>
        <button> New Quote </button>
        <p>{quote} </p>
        <h3>-- {author} </h3>
    </article>
  );  
}

export default Card;