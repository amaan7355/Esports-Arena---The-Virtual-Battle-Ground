import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import {motion} from 'framer-motion';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(5, 'min 5 characters req.').required('Name is required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const SignUp = () => {

  const navigate = useNavigate();

  const [selFile, setSelFile] = useState('');

  // initialize the formik
  const signUpform = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    onSubmit: async (values, {setSubmitting })=> {
      values.avatar = selFile;
      setSubmitting(true);

      setTimeout(() => {
        console.log(values);
        setSubmitting(false);
      }, 3000);

      // send the data to the server
      const res = await fetch('http://localhost:5000/user/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(res.status);
      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Nice',
          text: 'You have signed up successfully'
        })
          .then((result) => {
            navigate('/login');

          }).catch((err) => {

          });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'oops!!',
          text: 'Something went wrong'
        })
      }

    },
    validationSchema: SignupSchema,
  });

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
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{duration: 0.5, stiffness: 100, type: 'spring', damping: 4}}
      >
      <div className="form-body">
        <div className="formcontainer">
          <form onSubmit={signUpform.handleSubmit}>
            <h2 className="main-heading">SignUp Here</h2>
            <label>
              <h4>Full Name<span style={{ color: 'red' }}> <sup>*</sup></span></h4>
            </label>
            <span style={{ fontSize: "1em", color: 'red', marginLeft: 20 }}>{signUpform.touched.name && signUpform.errors.name}</span>
            <input type="text" name='name' className="input" placeholder="Your Name" onChange={signUpform.handleChange} value={signUpform.values.name} />
            <label htmlFor="">
              <h4>Email <span style={{ color: 'red' }}> <sup>*</sup></span></h4>
            </label>
            <span style={{ fontSize: "1em", color: 'red', marginLeft: 20 }}>{signUpform.touched.email && signUpform.errors.email}</span>
            <input type="email" name='email' className="input" placeholder="Your Email"
              onChange={signUpform.handleChange} value={signUpform.values.email} />
            <label htmlFor="">
              <h4>Password <span style={{ color: 'red' }}> <sup>*</sup></span></h4>
            </label>
            <input type="password" name='password' className="input" placeholder="Your Password" onChange={signUpform.handleChange} value={signUpform.values.password} />
            <input type="file" className='my-3' onChange={uploadFile} />
            <br />
            <button disabled={signUpform.isSubmitting} className="mybtn1" type='submit'>
              {
                signUpform.isSubmitting ? (
                  <>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" style={{ marginRight: '10px' }}></span>Loading...
                  </>
                ) : 'Submit'
              }
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  )
}

export default SignUp;