import React from 'react';
import './Card.css'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,  Row, Col, Container
} from 'reactstrap';

const Example = (props) => {
  return (
    <div>
        <Container>
        <Row>
         <Col md ={4}>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </Col>
      <Col md ={4}>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </Col>
      <Col md ={4}>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </Col>
      </Row>
      </Container>
    </div>
  );
};

export default Example;