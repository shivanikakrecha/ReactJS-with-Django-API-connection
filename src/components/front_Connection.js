    import toastr from 'toastr';

var Config = require('./api_path');


export const apiMethods = {
    post,
    get,
    put
};

function post(URL, requestData, Auth) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Device': 'web'
        },
        body: requestData
    };
    if (Auth) {
        requestOptions['headers']['Authorization'] = 'Token ' + localStorage.getItem('user_token')
        // requestOptions['headers']['Authorization'] = 'Token ' + '8b39a7cabe0af29357e64121a54031a57d2f5544'
    }
    return fetch(Config['domain'] + URL, requestOptions)
        .then(response => {
            if (!response.ok) {
                return response.json().then(data => {
                        return Promise.reject(data['non_field_errors']);
                    }
                )
            }
            return response.json();
        })
        .then(data => {
            if (data.message) {
                toastr.success(data.message);
            }
            return data;
        }).catch(function (ex) {
            toastr.error(ex);
        });
}

function get(URL, requestData, Auth) {
    const requestOptions = {
        method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            'Device': 'web'
        },
        body: requestData
    };
    if (Auth) {
        requestOptions['headers']['Authorization'] = 'Token ' + localStorage.getItem('user_token')
    }
    return fetch(Config['domain'] + URL, requestOptions)
        .then(response => {
            return response.json();
        })
        .catch(function (ex) {
            toastr.error(ex);
        });
}

function put(URL, requestData, Auth) {
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Device': 'web'
        },
        body: requestData
    };
    if (Auth) {
        requestOptions['headers']['Authorization'] = 'Token ' + localStorage.getItem('user_token')
    }
    return fetch(Config['domain'] + URL, requestOptions)
        .then(response => {
            if (!response.ok) {
                return response.json().then(data => {
                        return Promise.reject(data['non_field_errors']);
                    }
                )
            }
            return response.json();
        })
        .then(data => {
            if (data.message) {
                toastr.success(data.message);
            }
            return data;
        }).catch(function (ex) {
            toastr.error(ex);
        });
}
