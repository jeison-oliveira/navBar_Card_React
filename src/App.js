import { Component } from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
class App extends Component {
  render() {
    const produtos = [
      {
        name: "Pão de Queijo",
        price: "R$ 5,99/kg",
        url: "https://amopaocaseiro.com.br/wp-content/uploads/2022/08/yt-069_pao-de-queijo_receita.jpg",
      },
      {
        name: "Pão de Queijo",
        price: "R$ 5,99/kg",
        url: "https://amopaocaseiro.com.br/wp-content/uploads/2022/08/yt-069_pao-de-queijo_receita.jpg",
      },
      {
        name: "Pão de Queijo",
        price: "R$ 5,99/kg",
        url: "https://amopaocaseiro.com.br/wp-content/uploads/2022/08/yt-069_pao-de-queijo_receita.jpg",
      },
      {
        name: "Pão de Queijo",
        price: "R$ 5,99/kg",
        url: "https://amopaocaseiro.com.br/wp-content/uploads/2022/08/yt-069_pao-de-queijo_receita.jpg",
      },
      {
        name: "Pão de Queijo",
        price: "R$ 5,99/kg",
        url: "https://amopaocaseiro.com.br/wp-content/uploads/2022/08/yt-069_pao-de-queijo_receita.jpg",
      },
      {
        name: "Pão de Queijo",
        price: "R$ 5,99/kg",
        url: "https://amopaocaseiro.com.br/wp-content/uploads/2022/08/yt-069_pao-de-queijo_receita.jpg",
      },
    ];
    return (
      <div className="container text-center">
        <Navbar />
        <Content produtos={produtos} />
      </div>
    );
  }
}
export default App;
