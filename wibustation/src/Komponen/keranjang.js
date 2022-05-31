import React, { Component } from 'react'
import { Badge, Col,ListGroup, Row } from 'react-bootstrap'
import { pemisah } from './koma';

export default class Keranjang extends Component {
  render() {
    const {keranjang}=this.props;
    return (
      <Col md={3} mt="2">
        <h2><strong>Isi Keranjang:</strong></h2>
        <hr />
        <ListGroup>
        {keranjang.map((menukeranjang)=>(
          <ListGroup.Item>
            <Row>
              <Col xs={2}>
              <h3>
                <Badge pill variant="primary">
                  {menukeranjang.jumlah}
                </Badge>
              </h3>
              </Col>

              <Col>
              <h4>
                {menukeranjang.product.nama}
              </h4>
              <p>Rp.{pemisah(menukeranjang.product.harga)}</p>

              </Col>
              <strong className='float-right'>Rp.{pemisah(menukeranjang.total_harga)}</strong>
              <Col>

              </Col>
            </Row>
          </ListGroup.Item>
        ))}
        </ListGroup>
        
      </Col>
    )
  }
}
