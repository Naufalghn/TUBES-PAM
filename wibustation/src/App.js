
import React, { Component } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import swal from 'sweetalert'
import { API_URL } from './Utilitas/Konstan_api';
import Keranjang from "./Komponen/keranjang";
import Kompnavbar from "./Komponen/kompnavbar";
import axios from 'axios'
import Menu from './Komponen/menu';


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menus: [],
      keranjang: []
    }
  }

  componentDidMount() {
    axios.get(API_URL + "products")
      .then(res => {
        const menus = res.data;
        this.setState({ menus });
      })
      axios.get(API_URL + "keranjang")
      .then(res => {
        const keranjang = res.data;
        this.setState({ keranjang });
      })
  }
componentDidUpdate(prevState){
  if(this.state.keranjang !== prevState.keranjang){
    axios.get(API_URL + "keranjang")
      .then(res => {
        const keranjang = res.data;
        this.setState({ keranjang });
      })
  }
}
  isikeranjang = (value) => {
    axios.get(API_URL + "keranjang?product.id="+value.id)
      .then(res => {
        if(res.data.length == 0){
          const keranjangsementara = {
            jumlah: 1,
            product: value,
            total_harga: value.harga
          }
          axios
            .post(API_URL + "keranjang", keranjangsementara)
            .then(res => {
              swal({
                title: "Dimasukan Keranjang!!",
                text: "Product dimasukan Ke Keranjang:" + keranjangsementara.product.nama,
                icon: "success",
                button: false,
                timer:1000,
              });
            })
        }else{
          const keranjangsementara = {
            jumlah: res.data[0].jumlah+1,
            product: value,
            total_harga: res.data[0].total_harga+value.harga
          }
          axios
            .put(API_URL + "keranjang/"+res.data[0].id, keranjangsementara)
            .then(res => {
              swal({
                title: "Dimasukan Keranjang!!",
                text: "Product dimasukan Ke Keranjang:" + keranjangsementara.product.nama,
                icon: "success",
                button: false,
                timer:1000,
              });
            })
        }
      })

  }

  render() {
    const { menus,keranjang } = this.state
    return (
      <div className="App">
        <Kompnavbar />
        <div className="mt-3">
          <Container fluid>
            <Row>
              <Col>
                <h2><strong>Daftar Produk</strong></h2>
                <hr />
                <Row>
                  {menus && menus.map((menu) => (
                    <Menu
                      key={menu.id}
                      menu={menu}
                      isikeranjang={this.isikeranjang}
                    />
                  ))}
                </Row>
              </Col>
              <Keranjang 
              keranjang={keranjang}
              />
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}
