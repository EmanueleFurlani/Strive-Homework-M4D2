import { Container, Row, Col, Card } from "react-bootstrap"
import fantasy from '../data/fantasy.json'
import history from '../data/history.json'
import horror from '../data/horror.json'
import romance from '../data/romance.json'
import scifi from '../data/scifi.json'

const LatestReleases = () => (
  <Container>
    <h3 className="my-4">Fantasy latest Releases</h3>
    <Row>
      {fantasy.map((book) => (
          <Col className="mb-4" xs={12} sm={6} md={4} lg={3} key={book.asin}>
            <Card>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                    {book.price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        ))}
    </Row>
  </Container>
)

export default LatestReleases

