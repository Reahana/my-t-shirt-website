import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = ({ring}) => {
    return (
        <div>
            <h2>Aunty</h2>
           <section>
            <Cousin hasFriend={true} ring ={ring}>Abir</Cousin>
           </section>
        </div>
    );
};

export default Aunty;