import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const ManageUser = () => {

  const [userData, setUserData] = useState([]);
  const fetchUserData = async () => {
    const res = await fetch('http://localhost:5000/user/getall');
    console.log(res.status);

    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setUserData(data);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const deleteUser = async (id) => {
    //   const res = await fetch ('http://localhost:5000/user/delete/'+id, {method: 'DELETE'});
    //   if (res.status === 200){
    //     console.log('user deleted');
    //     fetchUserData();
    //     const data = await res.json();
    //     toast.success(data.name+' Successfully Deleted');
    //   }
    // }

    toast.promise(
      fetch('http://localhost:5000/user/delete/' + id, { method: 'DELETE' }),
      {
        loading: "Deleting...",
        success: () => {
          fetchUserData();
          return <b>User Deleted!</b>;
        },
        error: <b>Could not delete.</b>
      }
    );
  };


  return (
    <div className='container py-5'>
      <h1 className='text-center'>Manage User</h1>

      <table className='table table-secondary mt-5'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th colSpan={2} className='text-center'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            userData.map((user) => {
              return <tr>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                  <button className='btn btn-danger' onClick={() => { deleteUser(user._id) }}>Delete</button>
                </td>
                <td>
                  <Link to={'/updateuser/'+user._id} className='btn btn-primary'>
                    View User
                  </Link>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default ManageUser;