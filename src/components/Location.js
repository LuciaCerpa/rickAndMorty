import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ResidentInfo from './ResidentInfo';


const Location = () => {  
    const [location, setLocation] = useState([])
    const [resident1, setResident1] = useState({})
    
    const [count, setCount] = useState(0)

    const [id, setId]=useState(Math.floor(Math.random() * count+1))
    
    useEffect(() => {      
    axios.get(`https://rickandmortyapi.com/api/location/`)
      .then(res => setCount(res.data.info.count))
        if(location){
      axios.get(`https://rickandmortyapi.com/api/location/${id}`)
      .then(res => setLocation(res.data))       
        }
  }, [])

    const changeId = () =>{
    if(location){    
    axios.get(`https://rickandmortyapi.com/api/location/${id}`)
    .then(res=>setLocation(res.data))
    }
}
  

    return (
        <div className='locationAll'>
            <div className='input'>
            <input type="number"  onChange={e => setId(e.target.value)} placeholder={"Search by Id (1-126)"}/>
            <button type="submit" onClick={changeId}>Search</button>            
            </div>
            <section className='location'>
            <div>
                <h2>{location.name}</h2>
            </div>
            <div className='locationInfo'>
                <h4>Type: {location.type}</h4>
                <h4>Dimension: {location.dimension}</h4>
                <h4>Residents: {location.residents?.length}</h4>                
            </div>
            </section>
            


            <section className='residents'>
            {
                location.residents?.map(resident =>( <ResidentInfo url = {resident} key={resident}/>))
            }    
            
        </section>
        </div>
    );
};

export default Location;