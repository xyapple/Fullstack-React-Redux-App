import React, {Component} from 'react';

class Product extends Component {
    // Inside `Product`
      handleUpVote() {
        this.props.onVote(this.props.id);
      }

    render(){
        return(
            <div className='item'>
                <div className='image'>

                    <img src={this.props.productImageUrl} alt='cannot open'/>
                </div>
                <div className='middle aligned content'>
                <div className='header'>
                    <a onClick={this.handleUpVote.bind(this)}>
                         <i className='large caret up icon' />
                    </a>

                    {this.props.votes}
                </div>
                    <div className='description'>
                        <a href={this.props.url}>
                            {this.props.title}
                        </a>
                        <p>{this.props.description}</p>

                    </div>
                    <div className='extra'>
                    <span>Submitted by:</span>
                        <i>
                            <img  className='ui-avatar-image'
                                src={this.props.submitterAvatarUrl} alt='cannot open'/>
                        </i>
                    </div>
                    </div>
                </div>

        )
    }
}
export default Product;
