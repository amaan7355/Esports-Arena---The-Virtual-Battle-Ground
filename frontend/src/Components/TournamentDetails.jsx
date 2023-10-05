import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const TournamentDetails = () => {
  const [esportsData, setEsportsData] = useState(null);
  const { id } = useParams();

  const fetchEsportsData = async () => {
    const res = await fetch('http://localhost:5000/esport/getbyid/' + id);
    console.log(res.status);

    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setEsportsData(data);
    }
  };

  useEffect(() => {
    fetchEsportsData();
  }, []);

  const displayData = () => {
    if (esportsData !== null) {
      return <div className='card mt-4'>
        <div className='card-body'>
          <div className='row'>
            <div className='col-md-5'>
              <img src={'http://localhost:5000/' + esportsData.logo} alt="" className='my-img' />
            </div>
            <div className='col-md-7'>
              <h1>Hello</h1>
            </div>
          </div>
        </div>
      </div>
    } else {
      return <div>
        <img src="https://usagif.com/wp-content/uploads/loading-2.gif" alt="" />
      </div>
    }
  }


  return (
    <div className='body-TournamentDetails'>
      <div className='container pt-5'>
        {displayData()}
      </div>
    </div>
  )
}

export default TournamentDetails;