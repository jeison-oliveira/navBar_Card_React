import { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div class="card">
        <img
          src="https://amopaocaseiro.com.br/wp-content/uploads/2022/08/yt-069_pao-de-queijo_receita.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Pão de Queijo</h5>
          <p class="card-text">Preço: R$ 5,99</p>
        </div>
      </div>
    );
  }
}
export default Card;
