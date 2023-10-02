import ApiClient, { setApiQuery } from '../apiClient'

/**
 * Module contenant des requêtes d'API pour interagir avec le serveur.
 * @module constants/api
 */

/** Ensemble de requêtes d'API disponibles dans ce module.
 * (Chaque requête est configurée à l'aide de la fonction `setApiQuery`)
 */
export const apiQueries = {
    /** Requête pour obtenir le jeton d'authentification. */
    token: setApiQuery({
        path: '/user/login',
        method: 'POST',
        defaultHeaders: { 'Content-Type': 'application/json' },
        output: (data) => data.body.token,
    }),
    /** Requête pour obtenir le profil d'utilisateur. */
    getProfile: setApiQuery({
        path: '/user/profile',
        method: 'POST',
        output: (data) => data.body,
    }),
    /** Requête pour mettre à jour le profil d'utilisateur. */
    updateProfile: setApiQuery({
        path: '/user/profile',
        method: 'PUT',
        defaultHeaders: { 'Content-Type': 'application/json' },
        output: (data) => data.body,
    }),
}

// Paramétrage du client d'API.
ApiClient.set({ hostUrl: 'http://localhost:3001', basePath: '/api/v1' })
