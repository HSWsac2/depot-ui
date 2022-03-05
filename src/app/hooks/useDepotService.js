import useAxios from "./useAxios";

const useDepotService = ({url, method}) => {
    return useAxios({url: `http://localhost:8080`, baseURL: "", method, active: true});
};

export default useDepotService;