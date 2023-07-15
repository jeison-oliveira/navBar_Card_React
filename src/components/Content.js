import Card from "./Card";

const Content = (props) => {
  const cols = props.produtos.map((produto, index) => {
    return (
      <div className="col-sm-4" key={index}>
        <Card produto={produto} />
      </div>
    );
  });
  return <div className="row">{cols}</div>;
};
export default Content;
