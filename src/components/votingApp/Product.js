import React, {Component} from 'react';
// const image1 = require('../../resource/floor1-1.jpg');
// const image2 = require('../../resource/floor1-2.jpg')
class Product extends Component {
    render(){
        return(
            <div className='item'>
                <div className='image'>

                    <img src={require('../../resource/floor1-1.jpg')} alt='cannot open'/>
                </div>
                <div>
                    <div className='description'>
                        <p>National Park</p>

                    </div>
                    <div className='extra'>
                        <span>Submitted by: </span>
                        <img src={require('../../resource/floor1-2.jpg')} alt='cannot open'/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Product;
