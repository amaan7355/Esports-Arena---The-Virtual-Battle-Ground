import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';


const SignupSchema = Yup.object().shape({
    name: Yup.string().min(5, 'min 5 characters req.').required('Name is required'),
    category: Yup.string().min(5, 'min 5 characters req.').required('Category is required'),
});

const AddTournament = () => {

    const navigate = useNavigate();

    const [selFile, setSelFile] = useState('');
    const categories = ['Arcade', 'War', 'Eliminator', 'Domination', 'Player vs Player', 'Multiplayer Arena'];

    // initialize the formik
    const addTournament = useFormik({
        initialValues: {
            name: '',
            category: '',
            teamsize: '',
            prize: '',
            venue: '',
            logo: '',
            schedule: '',
            description: ''
        },
        onSubmit: async (values, { setSubmitting }) => {
            console.log(values);
            values.logo = selFile;
            setSubmitting(true);

            // setTimeout(() => {
            //     console.log(values);
            // }, 3000);

            // send the data to the server
            const res = await fetch('http://localhost:5000/esport/add', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(res.status);
            setSubmitting(false);
        }
    })

    // const CategoriesList = addTournament.values;

    const uploadFile = async (e) => {
        if (!e.target.files) return;

        const file = e.target.files[0];
        console.log(file.name);
        setSelFile(file.name);

        const fd = new FormData();
        fd.append('myfile', file);

        const res = await fetch('http://localhost:5000/utils/uploadfile', {
            method: 'POST',
            body: fd
        });
        console.log(res.status);
    }


    return (
        <div className='body-AddTournament py-5 vh-100'>
            <div className='container w-50'>
                <div className='card shadow text-black p-3' style={{
                    background: "hsla(0, 0%, 100%, 0.77)",
                    backdropFilter: "blur(30px)"
                }}>
                    <div className='card-body'>
                    <h1 className='text-center fw-bold'>Add Your Tournaments</h1>
                        <form action="" onSubmit={addTournament.handleSubmit} >
                            <div className='row'>
                                <div className='col-md-6'>
                                    <label className='fw-bold'>Tournament Name</label>
                                    <input type="text" name='name' className='form-control mb-3' onChange={addTournament.handleChange} value={addTournament.values.name} />
                                    <label className='fw-bold'>Category</label>
                                    <select name="category" id="" className='form-control mb-3' onChange={addTournament.handleChange} value={addTournament.values.category}>
                                        <option value="">Select Category</option>
                                        {
                                            categories.map((b) => (
                                                <option value={b}>{b}</option>
                                            ))
                                        }
                                    </select>
                                    {/* <input type="text" name='category' className='form-control mb-3' onChange={addTournament.handleChange} value={addTournament.values.category} /> */}
                                    <label className='fw-bold'>Team Size</label>
                                    <input type="text" name='teamsize' className='form-control mb-3' onChange={addTournament.handleChange} value={addTournament.values.teamsize} />
                                    <label className='fw-bold'>Prize</label>
                                    <input type="text" name='prize' className='form-control mb-3' onChange={addTournament.handleChange} value={addTournament.values.prize} />
                                </div>
                                <div className='col-md-6'>
                                    <label className='fw-bold'>Venue</label>
                                    <input type="text" name='venue' className='form-control mb-3' onChange={addTournament.handleChange} value={addTournament.values.venue} />
                                    <label className='fw-bold'>Event Date & Time: </label>
                                    <input type="datetime-local" name='schedule' className='form-control mb-3' onChange={addTournament.handleChange} value={addTournament.values.schedule} />
                                    <label className='me-5 fw-bold'>Tournament Logo</label>
                                    <input type="file" className='mb-3' onChange={uploadFile} /><br />
                                    <label className='fw-bold'>Description</label>
                                    <textarea rows='2' cols='8' name='description' className='form-control mb-3' onChange={addTournament.handleChange} value={addTournament.values.description} />
                                </div>
                            </div>


                            <button disabled={addTournament.isSubmitting} className='btn btn-primary w-100 mt-4' type='submit'>
                                {
                                    addTournament.isSubmitting ? (
                                        <>
                                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" style={{ marginRight: '10px' }}></span>Loading...
                                        </>
                                    ) : 'Submit'
                                }
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddTournament;