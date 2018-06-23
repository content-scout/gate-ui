import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.baseURL}`,
});

export const getContentListByTerm = term => {
  return Promise.resolve([
    {
      title: "The Incredibles",
      url: "www.google.com",
    },
    {
      title: "The Incredibles 2",
      url: "www.google.com",
    },
  ])
}

export const getContentByUrl = url => {
  return Promise.resolve({})
}

export const createReviewById = (id, review) => {
  return Promise.resolve({});
}
