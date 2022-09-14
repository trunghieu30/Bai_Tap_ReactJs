import React, { Component } from 'react'
import data from './data.json'
import SanPham from './SanPham';

export default class ShoesShop extends Component {
    state = {
        shoesShop: {
            id: 1,
            name: "Adidas Prophere",
            alias: "adidas-prophere",
            price: 350,
            description:
                "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            shortDescription:
                "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            quantity: 995,
            image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
        },
    };
    handleShoesDefault = (shoes) => {
        this.setState({
            shoesShop: shoes,
        });
    };
    render() {
        return (
            <div>
                <div className="container">
                    <h2 className="text-center">ShoesShop</h2>
                    <div className="row">
                        <div className="col-2">
                            <h1>Sidebar</h1>
                            <p>Nike</p>
                            <p>Puma</p>
                            <p>Adidas</p>
                            <p>Li-ning</p>
                        </div>
                        <div className="col-10 d-sm-flex flex-wrap">
                            <div className="row">
                                {data.map((shoes) => {
                                    return (
                                        <div className="col-4" key={shoes.id}>
                                            <SanPham
                                                product={shoes}
                                                handleShoesDefault={this.handleShoesDefault}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
