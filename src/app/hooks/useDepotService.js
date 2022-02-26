import useAxios from "./useFetch";

const useDepotService = ({url, method}) => {
    return useAxios({baseUrl: `http://localhost:8080`, url, method});
};

export default useDepotService;