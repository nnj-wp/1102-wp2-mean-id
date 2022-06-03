import axios from 'axios';

const TesFetchUseCors_51 = async () => {
  const response = await fetch('http://localhost:5000');
  const data1 = await response.json();
  console.log('fetch data1', data1);

  const data2 = await axios.get('http://localhost:5000');
  console.log('axios data2', data2.data);

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

export default TesFetchUseCors_51;
