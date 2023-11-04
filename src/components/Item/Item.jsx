// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./styles.css";

const Item = ({ title, description, price, image }) => {
  return (
    <div>
      <Card className="card__styles" style={{ width: "18rem" }}>
        <Card.Body className="card__body">
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image} alt={title} />
          <h3>${price}</h3>
          <Card.Text>{description}</Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
