import axios from 'axios';

const getUsers = async () => {
  try {
    const response = await axios.get('https://reqres.in/api/users?page=1');
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export default getUsers;
