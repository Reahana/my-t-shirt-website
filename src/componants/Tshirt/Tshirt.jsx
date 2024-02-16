import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt}) => {
    const {picture, name , price} = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>Price: $ {price}</p>
            <button>Buy Now</button>
        </div>
    );
};

export default Tshirt;