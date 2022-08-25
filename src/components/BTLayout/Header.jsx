import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className='bg-dark'>
                <div className='h-25 container d-flex text-justify text-capitalize '>
                    <div className='logo mr-auto m-3 h5 text-white'>Start Bootstrap</div>
                    <div className='navbar decoration-none text-white'>
                        <span href="#" className='m-2 '>Home</span>
                        <span href="#" className='m-2 '>About</span>
                        <span href="#" className='m-2 '>Contact</span>
                    </div>
                </div>
            </div>)
    }
}
