import { Component } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
class App extends Component {
  render() {
    return (
      <div className="container text-center">
        <Navbar />
        <div class="row">
          <div class="col-sm-4">
            <Card />
          </div>
          <div class="col-sm-4">
            <Card />
          </div>
          <div class="col-sm-4">
            <Card />
          </div>
          <div class="col-sm-4">
            <Card />
          </div>
          <div class="col-sm-4">
            <Card />
          </div>
          <div class="col-sm-4">
            <Card />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
