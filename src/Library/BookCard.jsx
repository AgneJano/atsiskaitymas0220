import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const BookCard = ({ cover, title, author, category, price }) => {
  return (
    <Card
      className="cardElement"
      style={{
        width: '18rem',
        backgroundColor: 'transparent',
        justifyContent: 'center',
      }}
    >
      <Card.Img variant="top" src={cover} style={{ width: '50%', textAlign: 'center' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="bg-dark text-white">
          {author}, {price}$, {category}
        </Card.Text>
        <Button variant="primary">More info</Button>
        <Button variant="primary">Reserve</Button>
      </Card.Body>
    </Card>
  );
};
