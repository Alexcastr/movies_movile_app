import {AxiosAdapter} from './http/axios.adapter';

export const movieDbFetcher = new AxiosAdapter({
  baseURL: '',
  params: {
    api_key: '66b1cde2da064d720d223aac4ea02ec7',
    language: 'es',
  },
});
