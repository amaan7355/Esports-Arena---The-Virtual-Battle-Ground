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
              <h4><font className='fw-bold me-3'><i class="fa-solid fa-ranking-star me-1"></i>Tournament Name: </font><font>{esports.name}</font></h4>

              <h4 className='mt-4'><font className='fw-bold me-3'><i class="fa-solid fa-medal fa-xl me-2"></i>Prize - </font><font>{esports.prize}</font></h4>
              <h5 className='mt-4'><font className='fw-bold me-3'><i class="fa-solid fa-calendar-days me-3"></i>Schedule</font><font>{esports.schedule}</font></h5>
              <Link to={'/tourdetails/' + esports._id}>More Details</Link>
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
          {/* <div style={{ maxWidth: 400, margin: "auto" }}> */}
          <div className="input-icons">
            <i class="fa-solid fa-magnifying-glass fa-xl icon"></i>
            <div>
              <input className="input-field" type="text" />
              <button className='btn btn-outline-light btn-lg ms-2'>Search</button>
            </div>

          </div>
          {/* </div> */}


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
        <div className='row'>
          {DisplayData()}
        </div>
      </div>
    </div>
  )
}

export default ListTournament;