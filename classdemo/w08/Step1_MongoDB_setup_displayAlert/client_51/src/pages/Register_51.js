import { useState, useEffect } from 'react';
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

  const { showAlert, displayAlert } = useAppContext();

  const handleChange = (e) => {
    console.log('e.target', e.target);
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;
    if (!email || !password) {
      displayAlert();
      return;
    }
  };
  return (
    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
        <LOGO_51 />
        <h3>Register</h3>
        {showAlert && <Alert_51 />}
        {/* name input */}
        <FormRow_51
          type="text"
          name="name"
          value={values.name}
          handleChange={handleChange}
          className="form-input"
        />
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
      </form>
    </Wrapper>
  );
};

export default Register_51;
