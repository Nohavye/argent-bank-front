import Api, { setRequest } from '../api'

export const requests = {
    token: setRequest({
        path: '/user/login',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        output: (data) => data.body.token,
    }),
    profile: setRequest({ path: '/user/profile', method: 'POST', output: (data) => data.body }),
}

Api.set('http://localhost:3001/api/v1')
