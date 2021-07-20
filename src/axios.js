import axios from "axios";

const instance = axios.create({
    baseURL: "https://tiktok-clone-samuelswandi.herokuapp.com/"
})

export default instance;
