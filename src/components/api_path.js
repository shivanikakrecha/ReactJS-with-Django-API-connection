var Config = {
    domain: 'http://127.0.0.1:8000/en',
    project_name: 'btd',
    api: {
        signup: '/v1/user/signup/',
        email_verify: '/v1/user/signup/activate/{uid}/{token}/{device}/',
        sms: '/v1/user/sms/send/',
        sms_otp: '/v1/user/sms/activate/',
        signin: '/v1/user/signin/',
        forgot_password: '/v1/user/forget-password/request/'
    }
}

module.exports = Config;