import * as React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Product.css';

function Product () {

    const productURL = "https://gardien.tokodistributor.co.id/api-web/v2/product-recommendation?page=1"
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        axios
        .get(`${productURL}`)
        .then((res) => {setProducts(res.data.data)})
    }, []);

    return (
        <>
        <div className="Product">
            {products.length !== 0 ? (
                products.map((product) => (
                    <Col className="ProductCol">
                        <Card className="ProductCard">
                            <Card.Img className="ProductImg" src={`${product.image_uri}`} />
                            <Card.Body className="ProductCardBody">
                                <Card.Title className="ProductName">{product.product_name}</Card.Title>
                                <Card.Title className="ProductPrice">Rp. {product.normal_price}</Card.Title>
                                <Card.Title className="ProductLocation">{product.location}</Card.Title>
                            </Card.Body> 
                        </Card>
                    </Col>
                ))
            ):(<div>Loading...</div>)}
        </div>
        </>
    )
}

export default Product;