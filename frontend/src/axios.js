import axios from 'axios'

const instance = axios.create({
        baseURL: 'https://tinder-clone-mern.herokuapp.com'
    })
    //http://localhost:8001
    //https://tinder-clone-mern.herokuapp.com
export default instance;