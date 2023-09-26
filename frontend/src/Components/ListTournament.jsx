import React, { useEffect, useState } from 'react'

const ListTournament = () => {

  const [esportsData, setEsportsData] = useState([]);
  const fetchEsportsData = async () => {
    const res = await fetch('http://localhost:5000/esport/getall');
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

  const DisplayData = () => {
    return esportsData.map((esports) => (
        <div className='card mb-4'>
            <div className='row'>
              <div className='col-md-6'>
              <img className='w-100' src={'http://localhost:5000/'+esports.logo} alt="" />
              </div>
              
              <div className='col-md-6'>
              <div className='card-body'>
                    <h1><font className='fw-bold me-3'>Tournament Name: </font><font>{esports.name}</font></h1>
                    <h2><font className='fw-bold me-3'>Category: </font><font>{esports.category}</font></h2>
                    <h2><font className='fw-bold me-3'>Team Size: </font><font>{esports.teamsize}</font></h2>
                    <h4><font className='fw-bold me-3'>Prize:</font><font>{esports.prize}</font></h4>
                    <h3><font className='fw-bold me-3'>Venue: </font><font>{esports.venue}</font></h3>
                    <h2><font className='fw-bold me-3'>Description: </font><font>{esports.description}</font></h2>
                    <h3><font className='fw-bold me-3'>Schedule: </font><font>{esports.schedule}</font></h3>
                    </div>
                </div>
            </div>
        </div>
    ))
}
  return (
    <div className='container'>
                <div className='row'>
                    {DisplayData()}
                </div>
            </div>
  )
}

export default ListTournament;