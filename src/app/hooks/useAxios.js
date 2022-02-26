import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = ({ url, method, baseURL, active }) => {
  const [state, setState] = useState({ response: null, error: null, loading: true });

  useEffect(() => {
    if (!active) {
      return
    }
    setState(state => ({ response: state.data, error: state.error, loading: true }));
    console.log("querying", url, method, baseURL)
    axios
      .request({ url, method, baseURL })
      .then((res) => {
        setState({ response: res.data, error: null, loading: false });
      })
      .catch((err) => {
        setState({ response: null, error: err, loading: false });
      });
  }, [url, method, baseURL, active]);

  return state;
};

export default useAxios;