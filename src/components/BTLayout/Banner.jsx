import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            <div className='container p-4'>
                <div className='card display-2 bg-light rounded border-light'>
                    <div className=' text-md-center p-5'>
                        <h1 className='h1'>A Warm Welcome!</h1>
                        <p className='h6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Nam libero dolorum vitae magni tenetur doloremque quis quam,
                            non placeat debitis similique hic rerum quo inventore minus soluta temporibus
                            aliquam incidunt.</p>
                        <button className='btn btn-primary h6'>Call to action!</button>
                    </div>
                </div>
            </div>
        )
    }
}
