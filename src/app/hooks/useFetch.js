import { useEffect, useState } from "react";

const useFetch = url => {
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    // reset the state to "loading" and fetch new data
    setState(state => ({ data: state.data, loading: true }));
    fetch(url)
      .then(y => y.json())
      .then(response => {
        setState({ data: response, loading: false });
      });
  }, [url]);

  return state;
};

export default useFetch;