// Callin API
import axios from "axios";
const API = ""
export default {
    getEmployees: () => {
        return axios
        .get(API);
    }
}