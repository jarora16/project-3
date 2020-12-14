import axios from 'axios';

const authentication = {

    getUser: function () {
        return axios({
            method: 'get',
            url: `/user`,
        });
    },
    logout: function () {
        return axios({
            method: 'post',
            url: `/user/logout`,
        });
    }

};


export default authentication;

