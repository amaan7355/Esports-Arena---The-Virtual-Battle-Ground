import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const TournamentDetails = () => {
  const [esportsData, setEsportsData] = useState(null);
  const { id } = useParams();

  const fetchEsportsData = async () => {
    const res = await fetch('https://esportsarena.onrender.com/esport/getbyid/' + id);
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
          <h1 className='mb-3 text-center mt-3 mb-5'><font className='fw-bold me-3'><i class="fa-solid fa-ranking-star me-3"></i>Tournament Name : </font><font>{esportsData.name}</font></h1>
            <div className='col-md-6 col-sm-12'>
              <img src={'https://esportsarena.onrender.com/' + esportsData.logo} alt="" className='img-fluid my-img2' />
            </div>
            <div className='col-md-6 col-sm-12'>
            <h3 className='mb-3'><font className='fw-bold me-3'><i class="fa-solid fa-filter me-3"></i>Category : </font><font>{esportsData.category}</font></h3>
            <h3 className='mb-3'><font className='fw-bold me-3'><i class="fa-solid fa-people-group me-3"></i>TeamSize : </font><font>{esportsData.teamsize}</font></h3>
            <h3 className='mb-3'><font className='fw-bold me-3'><i class="fa-solid fa-medal fa-lg me-3"></i>Prize : </font><font><i class="fa-solid fa-dollar-sign me-1"></i>{esportsData.prize}</font></h3>
            <h3 className='mb-3'><font className='fw-bold me-3'><i class="fa-solid fa-location-dot me-3"></i>Venue : </font><font>{esportsData.venue}</font></h3>
            <h3 className='mb-3'><font className='fw-bold me-3'><i class="fa-solid fa-calendar-days me-3"></i>Schedule :</font><font>{new Date(esportsData.schedule).toLocaleDateString()} {new Date(esportsData.schedule).toLocaleTimeString()}</font></h3>
            <h3 className='mb-3'><font className='fw-bold me-3'><i class="fa-solid fa-align-right me-3"></i>Description : </font><font>{esportsData.description}</font></h3>
            <a className='btn btn-dark w-100 mt-3' href='/register'>Register</a>
            </div>
          </div>
        </div>
      </div>
    } else {
      return <div>
        <img src="https://usagif.com/wp-content/uploads/loading-12.gif" alt="" className='w-50 d-block m-auto'/>
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