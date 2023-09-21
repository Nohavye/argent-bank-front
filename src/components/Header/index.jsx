import { useLocation } from 'react-router'
import { Navigation, Link, LogoLink, Logo } from './styled'

const itemSettings = {
    login: { className: 'fa fa-user-circle', content: 'Sign In', link: '/login' },
}
const itemsPerRoute = {
    '/': [itemSettings.login],
    '/login': [itemSettings.login],
}

function ItemLinks() {
    const location = useLocation()
    const items = itemsPerRoute[location.pathname]

    if (!items) return

    return items.map((item, index) => (
        <Link to={item.link} key={`item-link-${index}`}>
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
