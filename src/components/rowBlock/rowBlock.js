import React from "react";
import { Col, Row } from "reactstrap";

const RowBlock = ({ leftCol, rightCol }) => {
  return (
    <Row className="mt-5">
      <Col md="6">{ leftCol }</Col>
      <Col md="6">{ rightCol }</Col>
    </Row>
  )
}

export default RowBlock;