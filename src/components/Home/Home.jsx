/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import'./Home.css'
import Cart from '../Cart/Cart';

const Home = () => {

    const [allActors, setAllActors] = useState([]);
    const [selectedActors,setSelectedActors] = useState([]);
    const [remaining, setRemaining]= useState(0);
    const [totalCost, setTotalCost]= useState(0)

    useEffect(()=>{
        fetch("../../../public/data.json")
        .then((res) => res.json())
        .then((data) => setAllActors(data));
    },[]);

const handleSelectActor=(actor)=>{
    // dont selec name duplicate
    const isExist = selectedActors.find((item) => item.id == actor.id)
    let count =actor.salary;

    if(isExist){
        return alert('already booked');
    }else{
        selectedActors.forEach((item)=>{
            count = count + item.salary;
        });
            const totalRemaining = 20000 - count;
            setTotalCost(count);
            if(count > 20000){
                return alert ('taka sesh ar hobe na');
            }else{
                setTotalCost(count);
                setRemaining(totalRemaining);
              setSelectedActors([...selectedActors,actor])
            }
       
    }


}
// console.log(selectedActors);




    return (
        <div className='conatainer'>
            <div className="home-container">
                <div className="card-container">
                    {
                        allActors.map((actor)=>(
                            <div key={actor.id} className="card">
                            <img className='photo' src={actor.image}alt="" />
                            <h2>{actor.name}</h2>
                            <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, obcaecati.</small></p>
                            <div className="info">
                                <p>salary:{actor.salary}$</p>
                                <p>{actor.role}</p>
                            </div>
                            <button onClick={()=> handleSelectActor(actor)}className='card-btn'>Select</button>
        
                        </div>
                        ))
                    }
                </div>
                <div className="cart">
                   <Cart
                    selectedActors={selectedActors} remaining={remaining} totalCost={totalCost}>
                    </Cart>
                </div>
            </div>
         
        </div>
    );
};

export default Home;