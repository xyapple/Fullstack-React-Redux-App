import React, {Component} from 'react';
import Product from './Product';
import './style.css';


const products=[{
   id:1,
   title:'National Park -- Olympic National Park',
   description: 'Amaziong Ocean View',
   url: '#',
   votes: generateVoteCount(),
   submitterAvatarUrl:require('../../images/avatars/daniel.jpg'),
   productImageUrl: require('../../resource/floor1-1.jpg'),

},
{
   id:2,
   title:'National Park -- Olympic National Park II',
   description: 'Amaziong Ocean View',
   url: '#',
   votes: generateVoteCount(),
   submitterAvatarUrl:require('../../images/avatars/daniel.jpg'),
   productImageUrl: require('../../resource/floor1-2.jpg'),

},
{
   id:3,
   title:'National Park -- Olympic National ParkIII',
   description: 'Amaziong Ocean View',
   url: '#',
   votes: generateVoteCount(),
   submitterAvatarUrl:require('../../images/avatars/daniel.jpg'),
   productImageUrl: require('../../resource/floor1-3.jpg'),

},
{    id:4,
   title:'Boston Habor View',
   description: 'Amaziong Ocean View',
   url: '#',
   votes: generateVoteCount(),
   submitterAvatarUrl:require('../../images/avatars/daniel.jpg'),
   productImageUrl: require('../../resource/floor1-4.jpg'),
},{
   id:5,
      title:'National Park -- Great Smoky National Park',
      description: 'Amaziong Ocean View',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl:require('../../images/avatars/daniel.jpg'),
      productImageUrl: require('../../resource/floor1-5.jpg'),
},
];
function generateVoteCount(){
    return Math.floor((Math.random()*50)+15);
}

class ProductList extends Component {
    handleProductUpVote(productId) {
       console.log(productId + ' was upvoted.');
     }

    render(){
        const productRate = products.sort((a,b)=>(
            b.votes-a.votes
        ))
        const productComponents = products.map((product)=>(
            <Product
                key={'product-' + product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                url={product.url}
                votes={product.votes}
                submitterAvatarUrl={product.submitterAvatarUrl}
                productImageUrl={product.productImageUrl}
                onVote = {this.handleProductUpVote}
            />
        ))
        return(
            <div className='ui unstackable items'>
                 {productComponents }
            </div>
        )
    }
}

export default ProductList;
