import React from "react";
import { Container, Row, Col } from "reactstrap";
import './LayoutPage.css'

export default function LayoutPage() {
  return (
    <>
      <Container className="themed-container bg-info border">.container</Container>
      <Container className="themed-container bg-info border" fluid="sm">.container-sm</Container>
      <Container className="themed-container bg-info border" fluid="md">.container-md</Container>
      <Container className="themed-container bg-info border" fluid="lg">.container-lg</Container>
      <Container className="themed-container bg-info border" fluid="xl">.container-xl</Container>
      <Container className="themed-container bg-info border" fluid={true}>.container-fluid</Container>
      <hr/>
      <Container className="bg-white border">
      <Row>
        <Col className="bg-info border">.col</Col>
      </Row>
      <Row>
        <Col className="bg-info border">.col</Col>
        <Col className="bg-info border">.col</Col>
        <Col className="bg-info border">.col</Col>
        <Col className="bg-info border">.col</Col>
      </Row>
      <Row>
        <Col className="bg-info border" xs="3">.col-3</Col>
        <Col className="bg-info border" xs="auto">.col-auto - variable width content</Col>
        <Col className="bg-info border" xs="3">.col-3</Col>
      </Row>
      <Row>
        <Col className="bg-info border" xs="6">.col-6</Col>
        <Col className="bg-info border" xs="6">.col-6</Col>
      </Row>
      <Row>
        <Col className="bg-info border" xs="6" sm="4">.col-6 .col-sm-4</Col>
        <Col className="bg-info border" xs="6" sm="4">.col-6 .col-sm-4</Col>
        <Col className="bg-info border" sm="4">.col-sm-4</Col>
      </Row>
      <Row>
        <Col className="bg-info border" sm={{ size: 6, order: 2, offset: 1 }}>.col-sm-6 .order-sm-2 .offset-sm-1</Col>
      </Row>
      <Row>
        <Col className="bg-info border" sm="12" md={{ size: 6, offset: 3 }}>.col-sm-12 .col-md-6 .offset-md-3</Col>
      </Row>
      <Row>
        <Col className="bg-info border" sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
        <Col className="bg-info border" sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
      </Row>
    </Container>
    <hr/>
    <Container>
      <Row className="bg-info border" xs="2">
        <Col className="bg-white border">Column1</Col>
        <Col className="bg-white border">Column2</Col>
        <Col className="bg-white border">Column3</Col>
        <Col className="bg-white border">Column4</Col>
      </Row>
      <Row className="bg-info border" xs="3">
        <Col className="bg-white border">Column1</Col>
        <Col className="bg-white border">Column2</Col>
        <Col className="bg-white border">Column3</Col>
        <Col className="bg-white border">Column4</Col>
      </Row>
      <Row className="bg-info border" xs="4">
        <Col className="bg-white border">Column1</Col>
        <Col className="bg-white border">Column2</Col>
        <Col className="bg-white border">Column3</Col>
        <Col className="bg-white border">Column4</Col>
      </Row>
      <Row className="bg-info border" xs="4">
        <Col className="bg-white border">Column1</Col>
        <Col className="bg-white border">Column2</Col>
        <Col className="bg-white border" xs="6">Column3</Col>
        <Col className="bg-white border">Column4</Col>
      </Row>
      <Row className="bg-info border" xs="1" sm="2" md="4">
        <Col className="bg-white border">Column1</Col>
        <Col className="bg-white border">Column2</Col>
        <Col className="bg-white border">Column3</Col>
        <Col className="bg-white border">Column4</Col>
      </Row>
    </Container>
    <hr/>
    </>
  );
}
