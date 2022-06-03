import axios from 'axios';

const TesFetchUseProxy_51 = async () => {
  const resp = await fetch('/api/data.json');
  const data_local_json = await resp.json();
  console.log('local json data', data_local_json);

  const response = await fetch('/api/v1');
  const data1 = await response.json();
  console.log('fetch data1', data1);

  const data2 = await axios.get('/api/v1');
  console.log('axios data2', data2.data);

  const currentUser = {
    name: '邵恩傑4',
    email: '2094107515@gms.tku.edu.tw',
    password: 'secret5',
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

export default TesFetchUseCors_51;
