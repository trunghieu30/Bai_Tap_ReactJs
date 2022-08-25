import React, { Component } from 'react'
import data from "./dataGlasses.json"
import "./style.css"
export default class BTThuKinh extends Component {
    state = {
        srcImg: './img/v1.png'
    }

    onChangeGlass = (colorGlass) => {
        this.setState({
            srcImg: `./img/v${colorGlass}.png`
        })
    }
    render() {
        return (
            <div className='container'>
                <div className='carousel'>
                    <h2 className='text-center'>TRY GLASSES APP ONLINE</h2>
                    <div className='model d-flex justify-content-center mb-3'>
                        <img src="./img/model.jpg" alt="" className='model' />
                        <img src={this.state.srcImg} alt="" className='glass' />
                    </div>
                    <div className='row'>
                        <div className='col-2' onClick={() => this.onChangeGlass('1')}>
                            <img className='img-fluid' src='./img/g1.jpg' alt='' />
                        </div>
                        <div className='col-2' onClick={() => this.onChangeGlass('2')}>
                            <img className='img-fluid' src='./img/g2.jpg' alt='' />
                        </div>
                        <div className='col-2' onClick={() => this.onChangeGlass('3')}>
                            <img className='img-fluid' src='./img/g3.jpg' alt='' />
                        </div>
                        <div className='col-2' onClick={() => this.onChangeGlass('4')}>
                            <img className='img-fluid' src='./img/g4.jpg' alt='' />
                        </div>
                        <div className='col-2' onClick={() => this.onChangeGlass('5')}>
                            <img className='img-fluid' src='./img/g5.jpg' alt='' />
                        </div>
                        <div className='col-2' onClick={() => this.onChangeGlass('6')}>
                            <img className='img-fluid' src='./img/g6.jpg' alt='' />
                        </div>
                        <div className='col-2' onClick={() => this.onChangeGlass('7')}>
                            <img className='img-fluid' src='./img/g7.jpg' alt='' />
                        </div>
                        <div className='col-2' onClick={() => this.onChangeGlass('8')}>
                            <img className='img-fluid' src='./img/g8.jpg' alt='' />
                        </div>
                        <div className='col-2' onClick={() => this.onChangeGlass('9')}>
                            <img className='img-fluid' src='./img/g9.jpg' alt='' />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
