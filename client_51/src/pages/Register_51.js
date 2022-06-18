import React, { useState, useEffect } from 'react';
import { Logo_51, FormRow_51, Alert_51 } from '../components';
import Wrapper from '../assets/wrappers/Register_51';

import { useAppContext } from '../context/appContext_51';
import { useNavigate } from 'react-router-dom';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

const Register_51 = () => {
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();

  const {
    user,
    isLoading,
    showAlert,
    displayAlert,
    registerUser,
    loginUser,
  } = useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    // console.log('e.target', e.target);
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    // console.log('e.target', e.target);
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }

    const currentUser = { name, email, password };
    console.log('form data', currentUser);
    if (!isMember) {
      registerUser({
        currentUser,
        endPoint: 'register_51',
        alertText: 'User created! Redirecting ...',
      });
    } else {
      loginUser({
        currentUser,
        endPoint: 'login_51',
        alertText: 'Login Successful! Redirecting ...',
      });
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
        <Logo_51 />
        <h3> {values.isMember ? 'Login' : 'Register'} </h3>
        {showAlert && <Alert_51 />}
        {/* name input */}
        {!values.isMember && (
          <FormRow_51
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
            className="form-input"
          />
        )}
        {/* email input */}
        <FormRow_51
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
          className="form-input"
        />

        {/* password input */}
        <FormRow_51
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
          className="form-input"
        />

        <button className="btn btn-block" type="submit">
          submit
        </button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Alreaedy a member?'}
          <button type="button" className="member-btn" onClick={toggleMember}>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register_51;
