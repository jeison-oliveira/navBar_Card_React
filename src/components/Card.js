const Card = (props) => {
  const produto = props.produto;
  return (
    <div className="card">
      <img src={produto.url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{produto.name}</h5>
        <p className="card-text">Preço: {produto.price}</p>
      </div>
    </div>
  );
};
export default Card;
