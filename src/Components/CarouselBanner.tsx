import * as React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'
import './CarouselBanner.css';

function CarouselBanner () {

    const bannerURL = "https://gardien.tokodistributor.co.id/api-web/v2/utility/home/banner-web"
    const [banners, setBanners] = useState([]);

    useEffect(() => {
        axios
        .get(`${bannerURL}`)
        .then((res) => {setBanners(res.data.data)})
    }, []);

    return (
        <>
            <div>
                <Carousel>
                    {banners.length !== 0 ? (
                        banners.map((banner) => (
                            <Carousel.Item>
                                <img src={`${banner.url_mobile}`}/>
                            </Carousel.Item>
                        ))
                    ):(<div>Loading...</div>)}
                </Carousel>
            </div>
        </>
    )
}

export default CarouselBanner;