import axios from 'axios'
axios.defaults.baseURL = 'https://api.minglechang.com'

function GET(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {params:params})
        .then((response) => {
            let data = response.data
            if (data.code == 200) {
                resolve(data.result);
            }else {
                reject(data)
            }
        })
        .catch((error) => {
            reject({code:error.status, message:error.message})
        })
    })
}

function POST(url, data) {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
        .then((response) => {
            let data = response.data
            if (data.code == 200) {
                resolve(data.result);
            }else {
                reject(data)
            }
        })
        .catch((error) => {
            reject({code:error.status, message:error.message})
        })
    })
}

export {GET, POST}