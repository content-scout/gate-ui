import * as api from '~/assets/api'; // eslint-disable-line import/extensions

const GET = '/GET';
const GET_SUCCESS = '/GET/SUCCESS';
const GET_ERROR = '/GET/ERROR';

const initialState = () => ({
  loading: undefined,
  error: undefined,
  term: undefined,
  data: [
    {
      title: 'Incredibles',
      url: 'www.google.com',
    },
    {
      title: 'Incredibles 2',
      url: 'www.google.com',
    },
  ],
});

export const getters = {
  data: state => state.data,
  term: state => state.term,
  error: state => state.error,
  loading: state => state.loading,
};

export const actions = {
  getList: ({ commit }, term) => {
    commit(GET, term);

    return api.getContentListByTerm(term)
      .then(data => commit(GET_SUCCESS, data))
      .catch(error => commit(GET_ERROR, error));
  },
}

export const mutations = {
  [GET]: (store, term) => {
    const mutation = {
      loading: true,
      error: false,
      term,
    };

    Object.assign(store, mutation);
  },
  [GET_SUCCESS]: (store, data) => {
    const mutation = {
      loading: false,
      data,
    };

    Object.assign(store, mutation);
    console.log('store', store)
  },
  [GET_ERROR]: (store, error) => {
    const mutation = {
      loading: false,
      error,
    };

    Object.assign(store, mutation);
  },
};

export const state = initialState;
