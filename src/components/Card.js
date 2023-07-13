import { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <img
          src="https://amopaocaseiro.com.br/wp-content/uploads/2022/08/yt-069_pao-de-queijo_receita.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Pão de Queijo</h5>
          <p className="card-text">Preço: R$ 5,99</p>
        </div>
      </div>
    );
  }
}
export default Card;
