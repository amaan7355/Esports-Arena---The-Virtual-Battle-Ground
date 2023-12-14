import { useFormik } from 'formik';
import React from 'react';
import Swal from 'sweetalert2';

const RegisterTournament = () => {
    const registerTournament = useFormik({
        initialValues: {
            teamname: '',
            email: '',
            teamleadername: '',
            teamleadercontact: ''
        },
        onSubmit: async (values) => {
            console.log(values);
            // handleSubmit(values);
            // values.logo = selFile;
            // setSubmitting(true);

            // send the data to the server
            const res = await fetch('https://esportsarena.onrender.com/register/add', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(res.status);
            if (res.status === 200) {
                Swal.fire({
                  icon: 'success',
                  title: 'You have registered successfully',
                  text: 'Our team will contact you soon for further documentation'
                })
                  // .then((result) => {
                  //   navigate('/signupform');
                  // }).catch((err) => {
        
                  // });
              } else {
                Swal.fire({
                  icon: 'error',
                  title: 'oops!!',
                  text: 'Something went wrong'
                })
              }
        }
    })
    return (
        <div className='body-TournamentDetails'>
            <div className='container pt-5'>
                <div className='card shadow mt-5' style={{
                    background: "hsla(0, 0%, 100%, 0.77)",
                    backdropFilter: "blur(30px)"
                }}>
                    <div className='row'>
                        <div className='col-md-6 p-5'>
                            <form onSubmit={registerTournament.handleSubmit}>
                                <h1 className='text-center fw-bold mb-4'>Register Here.</h1>
                                <label htmlFor="" className='form-label fs-5 fw-bold'>Team Name</label>
                                <input type="text" name='teamname' className='form-control mb-3' onChange={registerTournament.handleChange} value={registerTournament.values.teamname} />
                                <label htmlFor="" className='form-label fs-5 fw-bold'>Email</label>
                                <input type="text" name='email' className='form-control mb-3' onChange={registerTournament.handleChange} value={registerTournament.values.email} />
                                <label htmlFor="" className='form-label fs-5 fw-bold'>Team Leader Name</label>
                                <input type="text" name='teamleadername' className='form-control mb-3' onChange={registerTournament.handleChange} value={registerTournament.values.teamleadername} />
                                <label htmlFor="" className='form-label fs-5 fw-bold'>Team Leader Contact</label>
                                <input type="text" name='teamleadercontact' className='form-control mb-3' onChange={registerTournament.handleChange} value={registerTournament.values.teamleadercontact} />
                                <button disabled={registerTournament.isSubmitting} type='submit' className='btn btn-dark w-100 mt-3'>
                                    {
                                        registerTournament.isSubmitting ? (
                                            <>
                                                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" style={{ marginRight: '10px' }}></span>Loading...
                                            </>
                                        ) : 'Submit'
                                    }
                                </button>
                            </form>
                        </div>

                        <div className='col-md-6 p-3'>
                            <div className='mt-2'>
                                <h1 className='text-center mt-4 fw-bold'>Virtual Battleground Awaits</h1>
                                <h4 className='w-80 text-center font my-5'>Ready, Set, Register! Your journey to esports greatness starts here. Grab your controllers, assemble your team, and lock in your spot in the upcoming tournament.</h4>
                            </div>
                            <img src="https://i.gifer.com/origin/b3/b3fd8b4ff02b1d371ec86e1ee493ab59.gif" alt="" className='mt-5 img-fluid d-block m-auto' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterTournament;