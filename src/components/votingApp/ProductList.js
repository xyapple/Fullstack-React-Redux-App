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
    constructor(props){
        super(props);
        this.state={
            products:[],
        };
        //error TypeError: Cannot read property 'products' of undefined
        this.handleProductUpVote = this.handleProductUpVote.bind(this);
    }
    componentDidMount(){
        this.setState({products:products});
    }
    //we have to update the state inside this one
    handleProductUpVote(productId) {
       const nextProductVote = this.state.products.map((product)=>{
           if(product.id === productId){
               return Object.assign({}, product, {
                   votes: product.votes + 1,
               });
           } else {
               return product;
           }
       });
       this.setState({
           products: nextProductVote,
       })
     }

    render(){
        //ProductList is driven by its own state now.
        const products = this.state.products.sort((a,b)=>(
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
                 <h1 className="ui dividing centered header">Popular Products</h1>
                 {productComponents }
            </div>
        )
    }
}

export default ProductList;
