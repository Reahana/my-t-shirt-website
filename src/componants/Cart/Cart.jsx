import React from 'react';
import './Cart.css'
const Cart = ({cart,handleRemoveFromCart}) => {
let messeage;
if (cart.length === 0){
    messeage =<p>Please add in the cart</p>
}
else{
    messeage = <h3>Thank you</h3>
}
    return (
        <div>
            <h2 className={cart.length === 1 ? 'blue' : 'red'}>Order Summary {cart.length}</h2>
           <p className={`bold border ${cart.length === 4 ? 'orange':'green'}`}>Something</p>
            {cart.length > 2 ? <span className='yellow'>more buy</span> : <span>ok</span>}
            {messeage}
            {
                cart.map(tshirt => 
                    <p 
                    key={tshirt._id}>
                        {tshirt.name} 
                        <button onClick={()=> handleRemoveFromCart(tshirt._id)}>X</button>
                    </p>
                    )
            }
            {
                cart.length === 2 && <p>Double Delight</p>
            }
            {
                cart.length === 3 || <h3>3 hote hobe</h3>
            }
        </div>
    );
};

export default Cart;