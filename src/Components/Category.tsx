import * as React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Category.css';

function Category () {

    const categoryURL = "https://gardien.tokodistributor.co.id/api-web/v2/utility/home/box-category?with_staple=true"
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios
        .get(`${categoryURL}`)
        .then((res) => {setCategories(res.data.data)})
    }, []);

    return (
        <>
            <div className="Category">
                <Row>
                    {categories.length !== 0 ? (
                        categories.map((category) => (
                            <Col className="CategoryCol">
                                <Card className="CategoryCard">
                                    <Card.Img className="CategoryCardImg" src={`${category.icon}`} />
                                    <Card.Body className="CategoryCardBody">
                                        <Card.Title className="CategoryCardTitle">{category.category_name}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    ):(<div>Loading...</div>)}
                </Row>
            </div>
            <br/>
        </>
    )
}

export default Category;