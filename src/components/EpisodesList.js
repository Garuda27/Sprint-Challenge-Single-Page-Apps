import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';

export default function LocationsList() {
  const [epList, setEpList] = useState([]);
  const [pageNum, setPageNum] = useState('1');

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/episode/?page=${pageNum}`)
    .then(data=>{
      console.log(data);
      setEpList(data.data.results);
    })
    .catch( error => {
      console.log("Error:", error);
    })    
  }, [pageNum])

  return <section className='episode-list grid-view'>
      {epList.map((ep)=>{
        return(
          <div>
            <Card ep={ep}/>
          </div>
        );
      })}

    </section>

}