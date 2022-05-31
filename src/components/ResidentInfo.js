import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ResidentInfo = ({url}) => {

    const [character,  setCharacter] = useState({});

useEffect(()=>{
    
    axios.get(url)
    .then(res => setCharacter(res.data))
    
},[])
    
    return (
        <section className='residentAll'>
        <article className='resident'>
            <div className='image'>
                <img src={character?.image} alt=""/>
            </div> 
            <section className='residentInfo'>
                <div>
                    <p>Name: {character?.name}</p>
                </div>
            
                <div>
                    <p>Status: {character?.status} </p>
                </div> 
                <div>
                    <p>Origin: {character.origin?.name}</p>
                </div> 
                <div>
                    <p>Episodes: {character.episode?.length}</p>
                </div> 
            </section>
         </article>
      </section>
    );
};

export default ResidentInfo;