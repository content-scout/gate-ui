import * as api from '~/assets/api'; // eslint-disable-line import/extensions

const GET = '/GET';
const GET_SUCCESS = '/GET/SUCCESS';
const GET_ERROR = '/GET/ERROR';

const initialState = () => ({
  loading: undefined,
  error: undefined,
  data: {
    "sound_avg": 3.0,
    "strobe_average": 3.0,
    "title": "The Incredibles",
    "rating_avg": 3.0,
    "reviews": [
      {
        "sound_level": 5,
        "review": "Very dangerous for photosensitive people",
        "strobe_level": 5,
        "rating": 5
      }, {
        "sound_level": 1,
        "review": "this was bad for me",
        "strobe_level": 1,
        "rating": 1
      }],
      "description": "Cute family movie. I guess."
    },
});

export const getters = {
  results: state => state.results,
  error: state => state.error,
  loading: state => state.loading,
};

export const actions = {
  getList: ({ commit }, term) => {
    commit(GET);

    return api.getContentByUrl(term)
      .then(data => commit(GET_SUCCESS, data))
      .catch(error => commit(GET_ERROR, error));
  },
}
export const mutations = {
  [GET]: (store) => {
    const mutation = {
      loading: true,
      error: false,
    };

    Object.assign(store, mutation);
  },
  [GET_SUCCESS]: (store, data) => {
    const mutation = {
      loading: false,
      data,
    };

    Object.assign(store, mutation);
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
