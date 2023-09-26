import ApiClient, { setRequest } from '../api'

export const requests = {
    token: setRequest({
        path: '/user/login',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        output: (data) => data.body.token,
    }),
    getProfile: setRequest({
        path: '/user/profile',
        method: 'POST',
        output: (data) => data.body,
    }),
    updateProfile: setRequest({
        path: '/user/profile',
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        output: (data) => data.body,
    }),
}

ApiClient.set({ host: 'http://localhost:3001', basePath: '/api/v1' })
