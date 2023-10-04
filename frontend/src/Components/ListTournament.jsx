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
      <div className='container py-4'>
        <div className=''>
          <h1 className='text-center text-white fw-bold mb-3'>Browse Tournaments</h1>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-lg btn-outline-light ms-2"
              type="button"
              id="button-addon2"
            >Search 
              {/* <i class="fa-solid fa-magnifying-glass ms-2"></i> */}
              
            </button>
          </div>



          {/* <input type="text" className='form-control mb-5'  /> */}
          <div className='row my-4'>
            <div className='col-md-4'>
              <select className='form-control' onChange={filterTournament}>
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
        <div className='row mt-5 p-3'>
          {DisplayData()}
        </div>
      </div>
    </div>
  )
}

export default ListTournament;