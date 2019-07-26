import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard';

export default function LocationsList() {
  const [locList, setLocList] = useState([]);
  const [pageNum, setPageNum] = useState('1');
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/?page=${pageNum}`)
    .then(data=>{
      console.log(data);
      setLocList(data.data.results);
    })
    .catch( err => {
      console.log("Error:", err);
    })    
  }, [pageNum])
  return <section className='location-list grid-view'>
      {locList.map((loc)=>{
        return(
          <div>
            <LocationCard loc={loc}/>
          </div>
        );
      })}

    </section>
}