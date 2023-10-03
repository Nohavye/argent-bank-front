import { Navigation, Link, LogoLink, Logo } from './styled'

// Hooks
import { useLocation } from 'react-router'
import { useDispatch } from 'react-redux'

// Redux
import { actions as userActions } from '../../features/user'

// Paramètres des éléments de navigation.
const itemSettings = {
    // Paramètres pour le lien de connexion.
    login: {
        className: 'fa fa-user-circle',
        content: 'Sign In',
        link: '/login',
    },
    // Paramètres pour le lien du profil.
    profile: {
        className: 'fa fa-user-circle',
        content: 'Tony',
        link: '/profile',
    },
    // Paramètres pour le lien de déconnexion.
    logout: {
        className: 'fa fa-sign-out',
        content: 'Sign Out',
        link: '/',
        // Fonction de rappel exécutée lors du clic sur le lien de déconnexion.
        callback: (dispatch) => {
            sessionStorage.removeItem('token')
            dispatch(userActions.reset())
        },
    },
}

// Ensemble d'éléments de navigation associés à des routes spécifiques.
const itemsPerRoute = {
    '/': [itemSettings.login],
    '/login': [itemSettings.login],
    '/user': [itemSettings.profile, itemSettings.logout],
    '/profile': [itemSettings.logout],
}

// Composant représentant les liens des éléments de navigation.
function ItemLinks() {
    const dispatch = useDispatch()
    const location = useLocation()
    const items = itemsPerRoute[location.pathname]

    if (!items) return

    return items.map((item, index) => (
        <Link
            to={item.link}
            onClick={() => {
                if (item.callback) item.callback(dispatch)
            }}
            key={`item-link-${index}`}
        >
            <i className={item.className}></i>
            {item.content}
        </Link>
    ))
}

export default function Component() {
    return (
        <header>
            <Navigation>
                <LogoLink to="/">
                    <Logo alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </LogoLink>
                <div>
                    <ItemLinks />
                </div>
            </Navigation>
        </header>
    )
}
