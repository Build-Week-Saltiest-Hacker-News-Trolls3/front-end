import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token')

    return axios.create({
        baseURL: 'https://salty-nick.herokuapp.com',
        headers: {
            Authorization: token
        }
    })
}

export default axiosWithAuth