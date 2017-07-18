'use strict'
window.ImageList=(function(){
    function generateVoteCount(){
        return Math.floor((Math.random()*50)+15);
    }




 const products=[{
    id:1,
    title:'National Park -- Olympic National Park',
    description: 'Amaziong Ocean View',
    url: '#',
    votes: generateVoteCount(),
    submitterAvatarUrl:'..../images/avatars/daniel.jpg',
    productImageUrl: '../../resource/floor1-1.jpg',

},
{
    id:2,
    title:'National Park -- Olympic National Park II',
    description: 'Amaziong Ocean View',
    url: '#',
    votes: generateVoteCount(),
    submitterAvatarUrl:'..../images/avatars/daniel.jpg',
    productImageUrl: '../../resource/floor1-2.jpg',

},
{
    id:3,
    title:'National Park -- Olympic National ParkIII',
    description: 'Amaziong Ocean View',
    url: '#',
    votes: generateVoteCount(),
    submitterAvatarUrl:'..../images/avatars/daniel.jpg',
    productImageUrl: '../../resource/floor1-3.jpg',

},
{    id:4,
    title:'National Park -- Olympic National Park IV',
    description: 'Amaziong Ocean View',
    url: '#',
    votes: generateVoteCount(),
    submitterAvatarUrl:'..../images/avatars/daniel.jpg',
    productImageUrl: '../../resource/floor1-4.jpg',
},{
    id:5,
       title:'National Park -- Olympic National Park V',
       description: 'Amaziong Ocean View',
       url: '#',
       votes: generateVoteCount(),
       submitterAvatarUrl:'..../images/avatars/daniel.jpg',
       productImageUrl: '../../resource/floor1-5.jpg',
},
];
return {products: products};
}());
