import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.baseURL}`,
});

export const getContentListByTerm = name => {
  const url = `/review/?name=${name}`;

  return instance.get(url)
    .then(({ status, statusText, data }) => {
      if (status !== 200) throw new Error(`[${status}]: ${statusText}`);
      console.log(data)
      return data.data;
    })
}

export const getContentByUrl = url => {
  return instance.get(url)
    .then(({ status, statusText, data }) => {
      if (status !== 200) throw new Error(`[${status}]: ${statusText}`);
      console.log(data)
      return data.data;
    })
}

export const createReviewById = (id, review) => {
  return Promise.resolve({});
}
