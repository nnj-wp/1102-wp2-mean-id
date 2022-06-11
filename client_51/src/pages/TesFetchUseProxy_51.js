import axios from 'axios';
import React, { useEffect } from 'react';

const TesFetchUseProxy_51 = () => {
  const fetchData1 = async () => {
    const resp = await fetch('/api/data.json');
    const data_local_json = await resp.json();
    console.log('local json data', data_local_json);
  };

  const fetchData2 = async () => {
    const response = await fetch('/api/v1');
    const data1 = await response.json();
    console.log('fetch data1', data1);
  };

  const fetchData3 = async () => {
    const data2 = await axios.get('/api/v1');
    console.log('axios data2', data2.data);
  };

  const fetchData4 = async () => {
    const currentUser = {
      name: '邵恩傑7',
      email: '2094107517@gms.tku.edu.tw',
      password: 'secret7',
    };

    try {
      const { data } = await axios.post(
        '/api/v1/auth_51/register_51',
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

  useEffect(() => {
    fetchData4();
  }, []);

  return <div></div>;
};

export default TesFetchUseProxy_51;
