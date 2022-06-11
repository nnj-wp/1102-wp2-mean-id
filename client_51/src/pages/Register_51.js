import React, { useState, useEffect } from 'react';
import { LOGO_51, FormRow_51 } from '../components';
import Wrapper from '../assets/wrappers/Register_51';

import { useAppContext } from '../context/appContext_51';
import Alert_51 from '../components/Alert_51';
import { DISPLAY_ALERT } from '../context/action_51';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  showAlert: false,
};

const Register_51 = () => {
  const [values, setValues] = useState(initialState);

  const { showAlert, displayAlert, registerUser } = useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    console.log('e.target', e.target);
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
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
    }
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
        <LOGO_51 />
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
