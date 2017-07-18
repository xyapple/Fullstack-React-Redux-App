import React, {Component} from 'react';

class Product extends Component {
    render(){
        return(
            <div className='item'>
                <div className='image'>

                    <img src={this.props.productImageUrl} alt='cannot open'/>
                </div>
                <div className='header'>
                    {this.props.votes}
                </div>
                    <div className='description'>
                        <a href={this.props.url}>
                            {this.props.title}
                        </a>
                        <p>{this.props.description}</p>

                    </div>
                    <div className='extra'>
                        <span>Submitted by: XYApple</span>
                        <img src={this.props.submitterAvatarUrl} alt=''/>
                    </div>
                </div>
        
        )
    }
}
export default Product;
