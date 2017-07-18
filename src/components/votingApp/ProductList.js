import React, {Component} from 'react';
import Product from './Product';
import './imageList.js';


class ProductList extends Component {
    render(){
        const product = imageList.product[0]
        return(
            <div>
                <Product
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    url={product.url}
                    votes={product.votes}
                    submitterAvatarUrl={product.submitterAvatarUrl}
                    productImageUrl={product.productImageUrl}
                />
            </div>
        )
    }
}

export default ProductList;
