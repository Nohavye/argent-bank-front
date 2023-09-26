export const setRequest = ({ path, method, headers, body, output }) => ({
    path,
    method,
    headers,
    body,
    output,
})

export default class ApiClient {
    static _url = null

    static set({ host, basePath }) {
        ApiClient._url = host + basePath
    }

    static async processRequest({ request, headers, body }) {
        try {
            if (!ApiClient._url)
                throw new Error(
                    "The API handler is not initialized, please do so using the 'set' function of the handler."
                )
            const response = await fetch(ApiClient._url + request.path, {
                method: request.method,
                headers: { ...request.headers, ...headers },
                body: JSON.stringify({ ...request.body, ...body }),
            })

            if (response.ok) {
                const data = await response.json()
                return request.output ? request.output(data) : data
            } else {
                const data = await response.json()
                throw new Error(data.message)
            }
        } catch (error) {
            throw error
        }
    }
}
