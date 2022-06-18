import React from 'react';
import { useState } from 'react';
import { FormRow_51, Alert_51 } from '../../components';
import { useAppContext } from '../../context/appContext_51';
import Wrapper from '../../assets/wrappers/DashboardFormPage_51';

const Profile_51 = () => {
  const {
    user,
    showAlert,
    displayAlert,
    updateUser,
    isLoading,
  } = useAppContext();

  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [lastName, setLastName] = useState(user && user.lastName);
  const [location, setLocation] = useState(user && user.location);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !lastName || !location) {
      displayAlert();
      return;
    }
    updateUser({ name, email, lastName, location });
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>profile</h3>
        {showAlert && <Alert_51 />}
        <div className="form-center">
          <FormRow_51
            type="text"
            name="name"
            value={name}
            handleChange={(e) => setName(e.target.value)}
          />
          <FormRow_51
            type="text"
            labelText="last name"
            name="lastName"
            value={lastName}
            handleChange={(e) => setLastName(e.target.value)}
          />
          <FormRow_51
            type="email"
            name="email"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FormRow_51
            type="text"
            name="location"
            value={location}
            handleChange={(e) => setLocation(e.target.value)}
          />
          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading ? 'Please Wait...' : 'save changes'}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile_51;
