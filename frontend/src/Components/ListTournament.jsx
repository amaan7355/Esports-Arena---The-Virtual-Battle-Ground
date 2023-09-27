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
      <div className='py-3'>
          <div className='card body1 text-white'>
            <div className='row'>
              <div className='col-md-6'>
                <img src={'http://localhost:5000/' + esports.logo} alt="" width={"530 rem"} height={"330rem"} />
              </div>

              <div className='col-md-6'>
                <div className='card-body'>
                  <h1><font className='fw-bold me-3'>Tournament Name: </font><font>{esports.name}</font></h1>
                  <p className=''><font className='fw-bold me-3'>Category: </font><font>{esports.category}</font></p>
                  <p className=''><font className='fw-bold me-3'>Team Size: </font><font>{esports.teamsize}</font></p>
                  <p className=''><font className='fw-bold me-3'>Prize:</font><font>{esports.prize}</font></p>
                  <p className=''><font className='fw-bold me-3'>Venue: </font><font>{esports.venue}</font></p>
                  <p className=''><font className='fw-bold me-3'>Description: </font><font>{esports.description}</font></p>
                  <p className=''><font className='fw-bold me-3'>Schedule: </font><font>{esports.schedule}</font></p>
                </div>
              </div>
            </div>
          </div>
        </div>
    ))
  }
  return (
    <div className='body'>
      <div className='container'>
      <div className='row'>
        {DisplayData()}
      </div>
      </div>
    </div>
  )
}

export default ListTournament;