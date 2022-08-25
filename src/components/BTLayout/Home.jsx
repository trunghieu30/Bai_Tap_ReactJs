import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import Banner from './Banner'
import Item from './Item'
export default class Home extends Component {
    render() {
        return (
            <div className='container'>
                <Header />
                <Banner />
                <Item />
                <Footer />
            </div >
        )
    }
}
