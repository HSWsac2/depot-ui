import useFetch from "./useFetch";

const useDepotService = url => {
    return useFetch(`http://localhost:8080/${url}`)
};

export default useDepotService;