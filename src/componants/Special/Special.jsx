import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Special = ({ring}) => {
    const myRing = useContext(RingContext)
    return (
        <div>
            <h2>Special</h2>
            <p>Ring: {myRing}</p>
        </div>
    );
};

export default Special;