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

    const uploadFile = async (e) => {
        if(!e.target.files) return;
  
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
        <div className='body py-5'>
            <div className='container w-50'>
                <div className='card shadow'>
                    <div className='card-body'>
                        <form action="" onSubmit={addTournament.handleSubmit} >
                            <label>Tournament Name</label>
                            <input type="text" name='name' className='form-control mb-3' onChange={addTournament.handleChange} value={addTournament.values.name} />
                            <label>Category</label>
                            <input type="text" name='category' className='form-control mb-3' onChange={addTournament.handleChange} value={addTournament.values.category} />
                            <label>Team Size</label>
                            <input type="text" name='teamsize' className='form-control mb-3' onChange={addTournament.handleChange} value={addTournament.values.teamsize} />
                            <label>Prize</label>
                            <input type="text" name='prize' className='form-control mb-3' onChange={addTournament.handleChange} value={addTournament.values.prize} />
                            <label>Venue</label>
                            <input type="text" name='venue' className='form-control mb-3' onChange={addTournament.handleChange} value={addTournament.values.venue} />
                            <label>Event Date & Time: </label>
                            <input type="datetime-local" name='schedule' className='form-control mb-3' onChange={addTournament.handleChange} value={addTournament.values.schedule} />
                            <label className='me-5'>Tournament Logo</label>
                            <input type="file" className='mb-3' onChange={uploadFile}  /><br />
                            <label>Description</label>
                            <textarea rows='2' cols='8' name='description' className='form-control mb-3' onChange={addTournament.handleChange} value={addTournament.values.description} />
                            <button disabled={addTournament.isSubmitting} className='btn btn-success w-100' type='submit'>
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