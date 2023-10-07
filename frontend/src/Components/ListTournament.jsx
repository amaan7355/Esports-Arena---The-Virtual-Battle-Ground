import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CategoriesList from './AddTournament';

const ListTournament = () => {
  const [esportsData, setEsportsData] = useState([]);
  const categories = ['Arcade', 'War', 'Eliminator', 'Domination', 'Player vs Player', 'Multiplayer Arena'];
  const [masterList, setMasterList] = useState([]);

  const fetchEsportsData = async () => {
    const res = await fetch('http://localhost:5000/esport/getall');
    console.log(res.status);

    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setEsportsData(data);
      setMasterList(data);
    }
  };

  useEffect(() => {
    fetchEsportsData();
  }, []);

  const filterTournament = (e) => {
    if (e.target.value === '') return setEsportsData(masterList)
    const selCategory = e.target.value;
    const result = masterList.filter((esport) => { return esport.category === selCategory });
    setEsportsData(result);
  }

  const searchTournament = (e) => {
    const search = e.target.value;
    const result = masterList.filter((esport) => { return esport.name.toLowerCase().includes(search.toLowerCase()) })
    setEsportsData(result);
  }

  const DisplayData = () => {
    return esportsData.map((esports) => (
      <div className='col-md-4 mb-4'>
        <div className='card'>
          <div className='row'>
            <img src={'http://localhost:5000/' + esports.logo} alt="" className='card-img-top my-img' />

            <div className='card-body p-4'>
              <h5><font className='fw-bold me-3'><i class="fa-solid fa-ranking-star me-1"></i>Tournament : </font><font>{esports.name}</font></h5>

              <h5 className='mt-4'><font className='fw-bold me-3'><i class="fa-solid fa-medal fa-lg me-2"></i>Prize : </font><font><i class="fa-solid fa-dollar-sign me-1"></i>{esports.prize}</font></h5>
              <h6 className='mt-4'><font className='fw-bold me-3'><i class="fa-solid fa-calendar-days me-3"></i>Schedule :</font><font>{new Date(esports.schedule).toLocaleDateString()} {new Date(esports.schedule).toLocaleTimeString()}</font></h6>
              <Link to={'/tourdetails/' + esports._id}> <button className='btn btn-dark mt-2 w-100'>More Details</button> </Link>
            </div>
          </div>
        </div>
      </div>
    ))
  }
  return (
    <div className='body-ListTournament font'>
      <div className=''>
        <div className='row'>
          <div className='col-md-4 ps-2'>
            <h1 className='text-center text-white fw-bold my-3'>Browse Tournaments</h1>
          </div>
          <div className='col-md-4 col-sm-6 ps-4'>
            <div className='input-group input-group-lg'>
              <input
                type="text"
                onChange={searchTournament}
                className="form-control mt-4 "
                placeholder="Search by tournament name..."
              />
            </div>
          </div>
          <div className='col-md-4 col-sm-6 pt-4'>'
            <select className='form-control w-75 me-3 py-2 mt-1' onChange={filterTournament}
              style={{ float: "right" }}
            >
              <option value="">Select Category</option>
              {
                categories.map((b) => (
                  <option value={b}>{b}</option>
                ))
              }
            </select>
          </div>

        </div>
      </div>
      <div className='container py-4'>
        <div className='row mt-5 p-3'>
          {DisplayData()}
        </div>
      </div>
    </div>
  )
}

export default ListTournament;