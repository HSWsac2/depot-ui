import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = ({ url, method, baseURL }) => {
  const [state, setState] = useState({ response: null, error: null, loading: true });

  useEffect(() => {
    setState(state => ({ response: state.data, error: state.error, loading: true }));
    axios
      .request({ url, method, baseURL })
      .then((res) => {
        setState({ response: res.data, error: null, loading: false });
      })
      .catch((err) => {
        setState({ response: null, error: err, loading: false });
      });
  }, [url, method, baseURL]);

  return state;
};

export default useAxios;