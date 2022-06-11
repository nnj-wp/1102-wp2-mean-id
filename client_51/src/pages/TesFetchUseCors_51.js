import axios from 'axios';
import React, { useEffect } from 'react';

const TesFetchUseCors_51 = () => {
  const fetchData1 = async () => {
    const response = await fetch('http://localhost:5000');
    const data1 = await response.json();
    console.log('fetch data1', data1);
  };

  const fetchData2 = async () => {
    const data2 = await axios.get('http://localhost:5000');
    console.log('axios data2', data2.data);
  };

  const fetchData3 = async () => {
    const currentUser = {
      name: '邵恩傑3',
      email: '2094107513@gms.tku.edu.tw',
      password: 'secret3',
    };

    try {
      const { data } = await axios.post(
        'http://localhost:5000/api/v1/auth_51/register_51',
        currentUser
      );
      console.log('register data', data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData1();
  }, []);

  useEffect(() => {
    fetchData2();
  }, []);

  useEffect(() => {
    fetchData3();
  }, []);

  return <div></div>;
};

export default TesFetchUseCors_51;
