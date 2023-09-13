/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import'./Cart.css'
const Cart = ({selectedActors,remaining, totalCost}) => {

   
    return (
        <div>
            <h1>Total actors: {selectedActors.length}</h1>
            <h5>Remaining:{remaining}</h5>
            <h5>Total Cost:{totalCost}</h5>
            {
                selectedActors.map((actor)=>(
                    <li key={actor.id}>{actor.name}</li>
                ))}
        </div>
    );
};

export default Cart;