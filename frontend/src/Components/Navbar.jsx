import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import UseAppContext from '../AppContext';

const Navbar = () => {

    const { loggedIn, logout } = UseAppContext();

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(sessionStorage.getItem('user'))
    );

    const displayUserOption = () => {
        if (loggedIn) {
            return ( 
            <>
            <li className='nav-item'><button className='btn btn-danger' onClick={logout}>Logout</button></li>
            <li>
                <img height={50} className='rounded-circle' src={"http://localhost:5000/" +currentUser.avatar} alt="avatar" />
            </li>
            </>
            )
        }
        else{
            return (
            <>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                        <font className='text-white'>Sign in</font>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/signup">
                    <font className='text-white'>Sign up</font>
                    </NavLink>
                </li>
            </>
            )
        }
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-territory body">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="./Esports Arena-logos_white.png" alt="" className='d-block m-auto' width={'120rem'} />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav mx-3 me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                <font className='text-white'>Home</font>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/addtournament">
                            <font className='text-white'>Add Tournament</font>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/listtournament">
                            <font className='text-white'>List Tournament</font>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/manageuser">
                            <font className='text-white'>ManageUser</font>
                            </NavLink>
                        </li>
                    </ul>
                    <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                        {displayUserOption()}
                    </ul>
                </div>
            </div>
        <hr />
        </nav>
        

    )
}

export default Navbar;