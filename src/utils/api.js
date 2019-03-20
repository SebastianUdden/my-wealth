import axios from 'axios';

export const get = async url => {
  const value = await axios
    .get(url)
    .then(response => {
      return response && response.data && response.data.items;
    })
    .catch(error => {
      console.log('error: ', error);
      return error;
    });
  return value;
};

export const create = async (url, body) => {
  const value = await axios
    .post(url, body)
    .then(response => {
      console.log('response: ', response);
      return response && response.data && response.data.items;
    })
    .catch(error => {
      console.log('error: ', error);
      return error;
    });
  return value;
};

export const update = url => {
  return `Updating ${url}`;
};

export const remove = async url => {
  const value = await axios
    .delete(url)
    .then(response => {
      console.log('response: ', response);
      return response && response.data && response.data.items;
    })
    .catch(error => {
      console.log('error: ', error);
      return error;
    });
  return value;
};
