/** Crée un objet de configuration de requête pour une API.
 *
 * @param {Object} options - Les options de la requête.
 * @param {string} options.path - Le chemin de l'URL de la requête.
 * @param {string} options.method - La méthode HTTP de la requête (GET, POST, PUT, DELETE, etc.).
 * @param {Object} options.defaultHeaders - Les en-têtes de la requête par défaut sous forme d'objet clé-valeur.
 * @param {any} options.defaultBody - Le corps de la requête par défaut, (sera converti au format JSON).
 * @param {Function} options.output - La fonction de traitement des données sortantes.
 * @returns {Object} Un objet de configuration de requête.
 */
export const setApiQuery = ({ path, method, defaultHeaders, defaultBody, output }) => ({
    path,
    method,
    headers: defaultHeaders,
    body: defaultBody,
    output,
})

/** Classe représentant un client API pour effectuer des requêtes HTTP. */
export default class ApiClient {
    static _url = null

    /** Initialise l'URL de base pour les requêtes API.
     *
     * @param {Object} options - Les options d'initialisation.
     * @param {string} options.hostUrl - L'URL du serveur hôte.
     * @param {string} options.basePath - Le chemin de base pour les requêtes API.
     */
    static set({ hostUrl, basePath }) {
        ApiClient._url = hostUrl + basePath
    }

    /** Traite une requête API en effectuant une requête HTTP correspondante.
     *
     * @param {Object} options - Les options de la requête.
     * @param {Object} options.apiRequest - Les détails de la requête (path, method, headers, body, output).
     * @param {Object} options.headers - Les en-têtes supplémentaires à inclure dans la requête.
     * @param {Object} options.body - Le corps de la requête à envoyer au serveur.
     * @returns {Promise} Une promesse résolue avec les données de la réponse.
     */
    static async processRequest({ apiQuery, headers, body }) {
        try {
            if (!ApiClient._url)
                throw new Error(
                    "The API client is not initialized, please do so using the 'set' function of the client."
                )
            const response = await fetch(ApiClient._url + apiQuery.path, {
                method: apiQuery.method,
                headers: { ...apiQuery.headers, ...headers },
                body: JSON.stringify({ ...apiQuery.body, ...body }),
            })

            if (response.ok) {
                const data = await response.json()
                return apiQuery.output ? apiQuery.output(data) : data
            } else {
                const data = await response.json()
                throw new Error(data?.message)
            }
        } catch (error) {
            throw error
        }
    }
}
