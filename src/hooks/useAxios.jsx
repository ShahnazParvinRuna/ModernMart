import axios from "axios";
const instance = axios.create({
    baseURL: 'https://modernmart-three.vercel.app' 
});
const useAxios = () => {
    return instance
}
export default useAxios