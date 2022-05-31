import React from 'react'
import{Col,Card}from 'react-bootstrap'
import {pemisah} from './koma';

const Menu = ({ menu,isikeranjang }) => {
    return (
        <Col md={3} xs={6} className="mb-3">
            <Card style={{ width: '18rem' }}>
            <Card className='shadow' onClick={()=>isikeranjang(menu)}>
                <Card.Img variant="top" src={"foto/"+menu.category.nama.toLowerCase()+"/"+menu.gambar} />
                <Card.Body>
                    <Card.Title>{menu.nama}</Card.Title>
                    <Card.Text>
                    Bahan:{menu.bahan}
                    </Card.Text>
                    <Card.Text>
                    pilihan ukuran:{menu.ukuran}
                    </Card.Text>
                    <Card.Text>
                        Harga: Rp.{pemisah(menu.harga)}
                    </Card.Text>
                </Card.Body>
            </Card>
            </Card>
        </Col>
    )
}

export default Menu